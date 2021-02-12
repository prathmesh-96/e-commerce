import ReviewDetails from '../../../../types/ReviewDetails';

export const GET_REVIEWS = 'productReviewDetails/GET_REVIEWS';
export const SET_REVIEWS = 'productReviewDetails/SET_REVIEWS';
export const CLEAR_REVIEWS = 'productReviewDetails/CLEAR_REVIEWS';
export const PRODUCTREVIEWS_OVER = 'productReviewDetails/PRODUCTREVIEWS_OVER';
export const SET_LOADING = 'productReviewDetails/SET_LOADING';

export interface GetproductReviewDetailsAction {
  type: typeof GET_REVIEWS;
  productId: number;
  lazyLoad: boolean;
}

export interface SetproductReviewDetailsAction {
  type: typeof SET_REVIEWS;
  payload: ReviewDetails[];
  offset: number;
}

export interface ClearproductReviewDetailsAction {
  type: typeof CLEAR_REVIEWS;
}

export interface ProductsReviewOverAction {
  type: typeof PRODUCTREVIEWS_OVER;
}

export interface ProductReviewLoadAction {
  type: typeof SET_LOADING;
}

export type productReviewDetailsActions =
  | GetproductReviewDetailsAction
  | SetproductReviewDetailsAction
  | ClearproductReviewDetailsAction
  | ProductsReviewOverAction
  | ProductReviewLoadAction;
