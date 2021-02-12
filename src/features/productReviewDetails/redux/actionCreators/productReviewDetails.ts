import {
  productReviewDetailsActions,
  GET_REVIEWS,
  SET_REVIEWS,
  CLEAR_REVIEWS,
  PRODUCTREVIEWS_OVER,
  SET_LOADING,
} from '../actions/productReviewDetails';
import ReviewDetails from '../../../../types/ReviewDetails';

export function getReviews(productId: number, lazyLoad: boolean): productReviewDetailsActions {
  return {
    type: GET_REVIEWS,
    productId: productId,
    lazyLoad: lazyLoad,
  };
}

export function setReviews(
  productReviewDetails: ReviewDetails[],
  offset: number,
): productReviewDetailsActions {
  return {
    type: SET_REVIEWS,
    payload: productReviewDetails,
    offset: offset,
  };
}

export const clearReviews = (): productReviewDetailsActions => ({
  type: CLEAR_REVIEWS,
});

export const setProductReviewOver = (): productReviewDetailsActions => ({
  type: PRODUCTREVIEWS_OVER,
});

export const setLoading = (): productReviewDetailsActions => ({
  type: SET_LOADING,
});
