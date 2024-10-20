type Review = {
    product: {
        _id: string;
        name: string;
        slug: string;
    };
    user: {
        _id: string;
        firstName: string;
    };
    rating: number;
    isRecommended: boolean;
    status: string;
    _id: string;
    review: string;
    title: string;
    created: string;
    __v: number;
};

type RootObject = {
    reviews: Review[];
};

export function ValidateReview(
    data: RootObject,
    title: string,
    expectedComment: string,
    expectedRating: number,
    expectedUserName: string,
): boolean {
    const foundReview = data.reviews.find((review) => review.title === title);

    if (!foundReview) {
        console.log('Review not found');
        return false;
    }

    const isProductValid = foundReview.review === expectedComment;
    const isUserValid = foundReview.user.firstName === expectedUserName;
    const isRatingValid = foundReview.rating === expectedRating;

    if (isProductValid && isUserValid && isRatingValid) {
        console.log('Review is valid');
        return true;
    } else {
        console.log('Validation failed');
        return false;
    }
}
