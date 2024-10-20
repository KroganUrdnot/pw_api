import { expect } from "@playwright/test";
import {AppPage} from "../abstarctClasses";
import {step} from "../../misc/reporters/step";

export class Review extends AppPage {
    public pagePath = '/shop';

    starRating = (star: number) => this.page.locator(`.react-stars [data-index="${star}"] .fa-star`);
    titleInput = this.page.getByPlaceholder('Enter Review title');
    commentInput = this.page.getByPlaceholder('Write Review');
    publishButton = this.page.getByRole('button', { name: 'Publish Review' });

    @step
    async expectLoaded(): Promise<void> {
        await expect(this.starRating(0)).toBeVisible();
        await expect(this.starRating(4)).toBeVisible();
        await expect(this.titleInput).toBeVisible();
        await expect(this.commentInput).toBeVisible();
        await expect(this.publishButton).toBeVisible();
    }

    @step
    async add(title: string, comment: string, stars: number) {
        await this.expectLoaded();

        await this.titleInput.fill(title);
        await this.commentInput.fill(comment);
        await this.starRating(stars-1).click();
        await this.publishButton.click();
    }

    @step
    async expectReviewAdded() {
        await expect(this.page.getByRole('heading', { name: 'Your review has been added' })).toBeVisible();
    }
}