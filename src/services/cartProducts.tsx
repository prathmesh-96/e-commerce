import { unProtectedAxios as axios } from './helper';
import { WOOCOMMERCE_PARAMS } from '../constants';

export const getCartProducts = (offset: number) => {
  console.log('get cart product', offset);
  return (
    axios
      .get('/cart/cart.js', {})
      // .get('/get-cart', {
      //   params: {
      //     per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
      //     thumb: true,
      //     type: 'simple',
      //   },
      // })
      .then((res) => res.data)
      .catch((error) => {
        return Promise.reject(error.response);
      })
  );
};

export const getCartTotal = () => {
  console.log('get cart total');
  return axios
    .get('/cart/totals.js', {})
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const clearCart = (offset: number) => {
  console.log('get clear cart', offset);
  return axios
    .post('/clear.js', {})
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const deleteCartProduct = (key: string) => {
  console.log('delete cart product');
  return axios
    .delete('/item.js', {
      params: {
        cart_item_key: key,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const postAddToCart = (addToCartProducts) => {
  console.log('get post add to cart');
  return axios.post('/cart/add.js', {
    data: [
      {
        id: addToCartProducts,
      },
    ],
  });
  // return axios
  //   .post('/add-item', addToCartProducts)
  //   .then((res) => res.data)
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

export const updateQuantity = (updateCartProduct) => {
  console.log('update quantity');
  return axios
    .post('/cart/update.js', updateCartProduct)
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getCartItemCount = (offset: number) => {
  console.log('get cartitem count', offset);
  return axios
    .get('/cart/count.js', {})
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};
