import * as actions from '../actions/addProductReview';
import PostReviewDetails from '../../../../types/PostReviewDetails';

export interface postReviewsState {
  reviewDetails: PostReviewDetails;
}

const initialState: postReviewsState = {
  reviewDetails: null,
};

export default function postReviewReducer(
  state: postReviewsState = initialState,
  action: actions.ProductReviewsActions,
): postReviewsState {
  switch (action.type) {
    case actions.POST_REVIEW:
      return {
        ...state,
        reviewDetails: action.reviewDetails,
      };
    default:
      return state;
  }
}
