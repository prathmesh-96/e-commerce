import { protectedAxios as axios } from './helper';

export const postOrders = (placeorder) => {
  return axios
    .post('/orders', placeorder)
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};
