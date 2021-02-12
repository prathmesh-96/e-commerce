import Product from '../../../../types/Product';

export const GET_FIRST_CATEGORY = 'category/GET_FIRST_CATEGORY';
export const SET_FIRST_CATEGORY = 'category/SET_FIRST_CATEGORY';
export const CLEAR_FIRST_CATEGORY = 'category/CLEAR_FIRST_CATEGORY';
export const FIRST_CATEGORY_OVER = 'category/FIRST_CATEGORY_OVER';
export const SET_FIRST_LOADING = 'category/SET_FIRST_LOADING';

export interface GetFirstCategoryAction {
  type: typeof GET_FIRST_CATEGORY;
  categoryId: number;
  lazyLoad: boolean;
}

export interface SetFirstCategoryAction {
  type: typeof SET_FIRST_CATEGORY;
  payload: Product[];
  offset: number;
}

export interface ClearFirstCategoryAction {
  type: typeof CLEAR_FIRST_CATEGORY;
}

export interface FirstCategoryOverAction {
  type: typeof FIRST_CATEGORY_OVER;
}

export interface FirstCategoryLoadAction {
  type: typeof SET_FIRST_LOADING;
}

export type FirstCategoryActionType =
  | GetFirstCategoryAction
  | SetFirstCategoryAction
  | ClearFirstCategoryAction
  | FirstCategoryOverAction
  | FirstCategoryLoadAction;
