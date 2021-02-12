import { protectedAxios as axios } from './helper';
import { WOOCOMMERCE_PARAMS } from '../constants';

export const getSimilarProducts = (productIds: number[]) => {
  return axios
    .get(`/products.json?include=${productIds}`, {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
        type: 'simple',
      },
    })
    .then((res) => {
      return res.data.products;
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getReview = (productIds: number) => {
  return axios
    .get(`/products/reviews?product=${productIds}`, {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};
