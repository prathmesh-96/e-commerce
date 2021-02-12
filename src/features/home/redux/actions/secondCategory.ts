import Product from '../../../../types/Product';

export const GET_SECOND_CATEGORY = 'category/GET_SECOND_CATEGORY';
export const SET_SECOND_CATEGORY = 'category/SET_SECOND_CATEGORY';
export const CLEAR_SECOND_CATEGORY = 'category/CLEAR_SECOND_CATEGORY';
export const SECOND_CATEGORY_OVER = 'category/SECOND_CATEGORY_OVER';
export const SET_SECOND_LOADING = 'category/SET_SECOND_LOADING';

export interface GetSecondCategoryAction {
  type: typeof GET_SECOND_CATEGORY;
  categoryId: number;
  lazyLoad: boolean;
}

export interface SetSecondCategoryAction {
  type: typeof SET_SECOND_CATEGORY;
  payload: Product[];
  offset: number;
}

export interface ClearSecondCategoryAction {
  type: typeof CLEAR_SECOND_CATEGORY;
}

export interface SecondCategoryOverAction {
  type: typeof SECOND_CATEGORY_OVER;
}

export interface SecondCategoryLoadAction {
  type: typeof SET_SECOND_LOADING;
}

export type SecondCategoryActionType =
  | GetSecondCategoryAction
  | SetSecondCategoryAction
  | ClearSecondCategoryAction
  | SecondCategoryOverAction
  | SecondCategoryLoadAction;
