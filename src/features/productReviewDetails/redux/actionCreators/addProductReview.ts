import {
  ProductReviewsActions,
  POST_REVIEW,
  GET_POST_REVIEWS_RESPONSE,
} from '../actions/addProductReview';
import PostReviewDetails from '../../../../types/PostReviewDetails';

export function postReviews(reviewDetails: PostReviewDetails): ProductReviewsActions {
  return {
    type: POST_REVIEW,
    reviewDetails: reviewDetails,
  };
}

export function getReviewsResponse(postReviewResponse: boolean): ProductReviewsActions {
  return {
    type: GET_POST_REVIEWS_RESPONSE,
    postReviewResponse: postReviewResponse,
  };
}
