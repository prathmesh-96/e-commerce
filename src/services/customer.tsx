import { protectedAxios as axios } from './helper';

export const getCustomerInfo = (customerId: number) => {
  return axios.get('/customers', {
    params: {
      customer: customerId,
    },
  });
  // return axios
  //   .get('/customers.json', {
  //     params: {
  //       customer: customerId,
  //     },
  //   })
  //   .then((res) => res.data.customers)
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};
