import {RequestHolder} from "./requestHolder";
import type {
    RootObject,
} from "./models";
import {expect} from "@playwright/test";

const reviewURI = 'https://shopdemo-alex-hot.koyeb.app/api/review';

export class ReviewsController extends RequestHolder {
    async getReviews(data?: {
        page: 1;
        limit: 20;
    }): Promise<RootObject> {
        const reviewsResponse = await this.request.get(
            reviewURI,
            {
                data,
            }
        );

        expect(reviewsResponse.status()).toBe(200);
        return await reviewsResponse.json() as Promise<RootObject>;
    }
}