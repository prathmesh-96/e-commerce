import {
  SecondCategoryActionType,
  GET_SECOND_CATEGORY,
  SET_SECOND_CATEGORY,
  CLEAR_SECOND_CATEGORY,
  SECOND_CATEGORY_OVER,
  SET_SECOND_LOADING,
} from '../actions/secondCategory';
import Product from '../../../../types/Product';

export function getSecondCategory(categoryId: number, lazyLoad: boolean): SecondCategoryActionType {
  return {
    type: GET_SECOND_CATEGORY,
    categoryId: categoryId,
    lazyLoad: lazyLoad,
  };
}

export function setSecondCategory(products: Product[], offset: number): SecondCategoryActionType {
  return {
    type: SET_SECOND_CATEGORY,
    payload: products,
    offset: offset,
  };
}

export const clearSecondCategory = (): SecondCategoryActionType => ({
  type: CLEAR_SECOND_CATEGORY,
});

export const setSecondCategoryOver = (): SecondCategoryActionType => ({
  type: SECOND_CATEGORY_OVER,
});

export const setSecondLoading = (): SecondCategoryActionType => ({
  type: SET_SECOND_LOADING,
});
