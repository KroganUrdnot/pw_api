import { expect } from "@playwright/test";
import {AppPage} from "../abstarctClasses";
import {step} from "../../misc/reporters/Reporter";

export class Shop extends AppPage {
    public pagePath = '/shop';

    private productList = this.page.locator('.shop .product-list')

    @step('Wait for load')
    async expectLoaded(message = 'Expected Shop page to be opened') {
        await expect(this.productList, message).toBeVisible()
    }

    @step('Open a product by name')
    async openProductDetailsByName(name: string) {
        await this.page.getByRole('heading', { name }).click();
    }
}