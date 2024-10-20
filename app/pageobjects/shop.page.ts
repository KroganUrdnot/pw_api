import { expect } from "@playwright/test";
import { step } from "../../misc/reporters/step";
import {AppPage} from "../abstarctClasses";

export class Shop extends AppPage {
    public pagePath = '/shop';

    private productList = this.page.locator('.shop .product-list')

    @step
    async expectLoaded(message = 'Expected Shop page to be opened') {
        await expect(this.productList, message).toBeVisible()
    }

    @step
    async openProductDetailsByName(name: string) {
        await this.page.getByRole('heading', { name }).click();
    }
}