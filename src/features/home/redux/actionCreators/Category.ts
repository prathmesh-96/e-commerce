import {
  CategoryActions,
  GET_CATEGORIES,
  SET_CATEGORIES,
  CLEAR_CATEGORIES,
  CATEGORIES_OVER,
  SET_LOADING,
} from '../actions/category';
import Category from '../../../../types/Category';

export function getCategories(lazyLoad: boolean): CategoryActions {
  return {
    type: GET_CATEGORIES,
    lazyLoad: lazyLoad,
  };
}

export function setCategories(categories: Category[], offset: number): CategoryActions {
  console.log('ac ==', offset);
  return {
    type: SET_CATEGORIES,
    payload: categories,
    offset: offset,
  };
}

export const clearCategories = (): CategoryActions => ({
  type: CLEAR_CATEGORIES,
});

export const setCategoriesOver = (): CategoryActions => {
  return {
    type: CATEGORIES_OVER,
  };
};

export const setLoading = (): CategoryActions => ({
  type: SET_LOADING,
});
