import { RequestHolder } from "./requestHolder";
import type {
    LoginResponse,
    UserCreateRequest,
    UserCreatedResponse,
} from "./models";
import {step} from "../misc/reporters/Reporter";

const authURI = 'https://shopdemo-alex-hot.koyeb.app/api/auth';

export class AuthController extends RequestHolder {
    @step('Logging in...')
    async login(data: {
        email: string;
        password: string;
    }): Promise<LoginResponse> {
        const loginResponse = await this.request.post(
            authURI + "/login",
            {
                data,
            }
        );

        return await loginResponse.json() as Promise<LoginResponse>;
    }

    @step('Creating a new test user')
    async createNewUser(data: UserCreateRequest): Promise<UserCreatedResponse> {
        const resp = await this.request.post(
            authURI+ "/register",
            {
                data,
            }
        );

        return await resp.json() as Promise<UserCreatedResponse>;
    }
}