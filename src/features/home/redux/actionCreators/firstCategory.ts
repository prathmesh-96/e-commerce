import {
  FirstCategoryActionType,
  GET_FIRST_CATEGORY,
  SET_FIRST_CATEGORY,
  CLEAR_FIRST_CATEGORY,
  FIRST_CATEGORY_OVER,
  SET_FIRST_LOADING,
} from '../actions/firstCategory';
import Product from '../../../../types/Product';

export function getFirstCategory(categoryId: number, lazyLoad: boolean): FirstCategoryActionType {
  return {
    type: GET_FIRST_CATEGORY,
    categoryId: categoryId,
    lazyLoad: lazyLoad,
  };
}

export function setFirstCategory(products: Product[], offset: number): FirstCategoryActionType {
  return {
    type: SET_FIRST_CATEGORY,
    payload: products,
    offset: offset,
  };
}

export const clearFirstCategory = (): FirstCategoryActionType => ({
  type: CLEAR_FIRST_CATEGORY,
});

export const setFirstCategoryOver = (): FirstCategoryActionType => ({
  type: FIRST_CATEGORY_OVER,
});

export const setFirstLoading = (): FirstCategoryActionType => ({
  type: SET_FIRST_LOADING,
});
