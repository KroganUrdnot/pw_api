import { API } from "../api/api";
import {PageHolder} from "./abstarctClasses";
import {Shop} from "./pageobjects/shop.page";
import {Review} from "./pageobjects/review.page";
import {step} from "../misc/reporters/Reporter";

export class Application extends PageHolder {
    public api = new API(this.page.request);

    public shop = new Shop(this.page);
    public review = new Review(this.page);

    async headlessLogin(data: { email: string; password: string }) {
        const token = (await this.api.auth.login(data)).token;
        await this.setTokenToLocalStorage(token);
    }

    @step()
    async setTokenToLocalStorage(token: string) {
        await this.page.goto("/", {waitUntil: "commit"});
        await this.page.evaluate(
            (_token) => window.localStorage.setItem("token", _token),
            token
        );
    }
}
