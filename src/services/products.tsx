import { protectedAxios as axios } from './helper';
import { ScreenNames, WOOCOMMERCE_PARAMS } from '../constants';
import { Alert } from 'react-native';
import { navigate } from '../navigator/NavigationService';

export const getProducts = (offset: number) => {
  console.log('offset for api-' + offset);
  return axios
    .get('/products.json', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
        type: 'simple',
      },
    })
    .then((res) => res.data.products)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getProductsByCategory = (offset: number, categoryId: number) => {
  console.log('offset for api Product by category-');
  return axios
    .get('/collections/' + categoryId + '/products.json/', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
      },
    })
    .then((res) => res.data.products)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getSearchProducts = (offset: number, searchText: string) => {
  console.log('offset for api search-');
  return axios
    .get('/products.json', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
        search: searchText,
        type: 'simple',
      },
    })
    .then((res) => res.data.products)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getFeaturedProducts = (offset: number) => {
  return axios
    .get('/products.json?featured=true', {})
    .then((res) => res.data.products)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getBabyProducts = (offset: number) => {
  return axios
    .get('/products.json', {})
    .then((res) => {
      return res.data.products;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error.response);
    });
};

export const getProductReviews = (offset: number, productId: number) => {
  return axios
    .get('/product-reviews/reviews', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
        product: productId,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const postReviews = (reviewsDetails) => {
  return axios
    .post('/products-reviews/reviews', reviewsDetails)
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getCategoriesUrl = () => {
  console.log('offset category ');
  return axios
    .get('/products.json/categories', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
      },
    })
    .then((res) => res.data.products)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getCollectionsUrl = (offset: number, categoryId: number) => {
  return axios
    .get('/custom_collections.json', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
      },
    })
    .then((res) => res.data.custom_collections)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getCustomerInformation = (offset: number, customerId: number) => {
  return axios
    .get('/customers/' + customerId, {})
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const setCustomerInformation = (customerId: number, customerShippingAddress: {}) => {
  return axios
    .put('/customers/' + customerId, customerShippingAddress)
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const getOrderHistory = (offset: number, customerId: number) => {
  return axios
    .get('/orders', {
      params: {
        per_page: WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS,
        customer: customerId,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const createCustomer = (customer) => {
  // console.log('url =', customer)
  return axios
    .post('/customers/', customer)
    .then((res) => res.data)
    .catch((error) => {
      console.log('error ', error.response.data.message);
      if (
        error.response.data.message ===
        'An account is already registered with your email address. Please log in.'
      ) {
        Alert.alert(
          'Alert',
          error.response.data.message,
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'Log In', onPress: () => navigate(ScreenNames.LoginScreen) },
          ],
          { cancelable: false },
        );
      } else {
        return Promise.reject(error.response);
      }
    });
};
