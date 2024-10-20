export interface LoginResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    };
}

export interface UserCreatedResponse {
    success: boolean;
    subscribed: boolean;
    token: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    };
}

export interface UserCreateRequest {
    isSubscribed?: boolean;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

interface RootObject {
    reviews: Review[];
    totalPages: number;
    currentPage: number;
    count: number;
}
interface Review {
    product: Product;
    user: User;
    rating: number;
    isRecommended: boolean;
    status: string;
    _id: string;
    review: string;
    title: string;
    created: string;
    __v: number;
}
interface User {
    _id: string;
    firstName: string;
}
interface Product {
    _id: string;
    name: string;
    slug: string;
}