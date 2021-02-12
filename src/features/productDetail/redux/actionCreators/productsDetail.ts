import {
  ProductActionType,
  GET_PRODUCTS_DETAIL,
  SET_STATE,
  CLEAR_STATE,
  PRODUCTS_OVER,
  SIMILAR_OPTION_SET_STATE,
  REVIWES_SET_STATE,
} from '../actions/productsDetail';
import Product, { Reviews, similarOptionProduct } from '../../../../types/Product';

export function getProductDetails(productId: number, related_id: number): ProductActionType {
  return {
    type: GET_PRODUCTS_DETAIL,
    productId: productId,
    related_id: related_id,
  };
}

export function setPopularProducts(products: Product[], offset: number): ProductActionType {
  return {
    type: SET_STATE,
    payload: products,
    offset: offset,
  };
}

export function setSimilarProducts(similarProduct: similarOptionProduct[]): ProductActionType {
  return {
    type: SIMILAR_OPTION_SET_STATE,
    payload: similarProduct,
  };
}

export function setReview(reviews: Reviews[]): ProductActionType {
  return {
    type: REVIWES_SET_STATE,
    payload: reviews,
  };
}

export const clearPopularProducts = (): ProductActionType => ({
  type: CLEAR_STATE,
});

export const setPopularProductsOver = (): ProductActionType => ({
  type: PRODUCTS_OVER,
});
