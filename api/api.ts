import { AuthController } from "./auth.controller";
import { RequestHolder } from "./requestHolder";
import {ReviewsController} from "./reviews.controller";

export class API extends RequestHolder {
    public readonly auth = new AuthController(this.request);
    public readonly reviews = new ReviewsController(this.request);
}