import PostReviewDetails from '../../../../types/PostReviewDetails';

export const POST_REVIEW = 'productReviewsDetails/POST_REVIEWS';
export const GET_POST_REVIEWS_RESPONSE = 'productReviewsDetails/GET_POST_REVIEWS_RESPONSE';

export interface postReviewsAction {
  type: typeof POST_REVIEW;
  reviewDetails: PostReviewDetails;
}

export interface getReviewsResponseAction {
  type: typeof GET_POST_REVIEWS_RESPONSE;
  postReviewResponse: boolean;
}

export type ProductReviewsActions = postReviewsAction | getReviewsResponseAction;
