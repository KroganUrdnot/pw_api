import { expect, test } from '@playwright/test';
import { Application } from '../app';
import { ClientInfo } from './resourses/clientInfo';
import { ValidateReview } from '../utils/reviews.utils';

test('logged in user can buy a product', async ({ page }) => {
  const app = new Application(page);

  const resp = await app.api.auth.createNewUser({
    isSubscribed: false,
    email: ClientInfo.email,
    firstName: ClientInfo.firstName,
    lastName: ClientInfo.lastName,
    password: ClientInfo.email,
  });

  const review = {
    title: ClientInfo.firstName + ' honest review',
    comment: 'Best value for money',
    stars: 5,
  };

  await app.setTokenToLocalStorage(resp.token);
  await app.shop.open();
  await app.shop.openProductDetailsByName('CHERRY TOMATOES');
  await app.review.add(review.title, review.comment, review.stars);
  await app.review.expectReviewAdded();

  const reviews = await app.api.reviews.getReviews();
  expect(ValidateReview(reviews, review.title, review.comment, review.stars, ClientInfo.firstName)).toBeTruthy();
});