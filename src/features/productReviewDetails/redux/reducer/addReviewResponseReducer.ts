import * as actions from '../actions/addProductReview';

export interface reviewResponseState {
  postReviewResponse: boolean;
}

const initialState: reviewResponseState = {
  postReviewResponse: false,
};

export default function addReviewResponseReducer(
  state: reviewResponseState = initialState,
  action: actions.ProductReviewsActions,
): reviewResponseState {
  switch (action.type) {
    case actions.GET_POST_REVIEWS_RESPONSE:
      return {
        ...state,
        postReviewResponse: action.postReviewResponse,
      };
    default:
      return state;
  }
}
