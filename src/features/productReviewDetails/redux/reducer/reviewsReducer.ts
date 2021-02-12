import ReviewDetails from '../../../../types/ReviewDetails';
import * as actions from '../actions/productReviewDetails';

export interface reviewsState {
  productReviewDetails: ReviewDetails[];
  offset: number;
  productReviewsOver?: boolean;
  isLoading?: boolean;
}

const initialState: reviewsState = {
  productReviewDetails: [],
  offset: 0,
  productReviewsOver: false,
  isLoading: false,
};

export default function reviewsReducer(
  state: reviewsState = initialState,
  action: actions.productReviewDetailsActions,
): reviewsState {
  switch (action.type) {
    case actions.CLEAR_REVIEWS:
      return initialState;
    case actions.SET_REVIEWS:
      return {
        ...state,
        productReviewDetails: state.productReviewDetails.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.PRODUCTREVIEWS_OVER:
      return { ...state, productReviewsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
