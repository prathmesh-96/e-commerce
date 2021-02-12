import {
  customerInfoActions,
  GET_CUSTOMER_INFO,
  SET_CUSTOMER_INFO,
  CLEAR_CUSTOMER_INFO,
  SET_LOADING,
} from '../actions/selectAddresses';
import CustomerInfo from '../../../../types/CustomerInfo';

export function getCustmerInformation(customerId: number): customerInfoActions {
  return {
    type: GET_CUSTOMER_INFO,
    customerId: customerId,
  };
}

export function setCustomerInformation(
  customerDetails: CustomerInfo,
  offset: number,
): customerInfoActions {
  return {
    type: SET_CUSTOMER_INFO,
    payload: customerDetails,
    offset: offset,
  };
}

export const clearCustomerInformation = (): customerInfoActions => ({
  type: CLEAR_CUSTOMER_INFO,
});

export const setLoading = (): customerInfoActions => ({
  type: SET_LOADING,
});
