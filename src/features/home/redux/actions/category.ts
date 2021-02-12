import Category from '../../../../types/Category';

export const GET_CATEGORIES = 'home/GET_CATEGORIES';
export const SET_CATEGORIES = 'home/SET_CATEGORIES';
export const CLEAR_CATEGORIES = 'home/CLEAR_CATEGORIES';
export const CATEGORIES_OVER = 'home/CATEGORIES_OVER';
export const SET_LOADING = 'home/SET_LOADING';

export interface GetCategoriesAction {
  type: typeof GET_CATEGORIES;
  lazyLoad: boolean;
}

export interface SetCategoriesAction {
  type: typeof SET_CATEGORIES;
  payload: Category[];
  offset: number;
}

export interface ClearCategoriesAction {
  type: typeof CLEAR_CATEGORIES;
}

export interface CategoriesOverAction {
  type: typeof CATEGORIES_OVER;
}

export interface CategoriesLoadAction {
  type: typeof SET_LOADING;
}

export type CategoryActions =
  | GetCategoriesAction
  | SetCategoriesAction
  | ClearCategoriesAction
  | CategoriesOverAction
  | CategoriesLoadAction;
