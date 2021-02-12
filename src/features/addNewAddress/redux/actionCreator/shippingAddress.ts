import {
  ShippingAddressAction,
  POST_CUSTOMER_INFO,
  GET_POST_RESULT_CUSTOMER_INFO,
} from '../actions/shippingAddress';
import CustomerInfo from '../../../../types/CustomerInfo';

export function setpostCustomerInformation(
  customerId: number,
  customerShippingAddress: {},
): ShippingAddressAction {
  return {
    type: POST_CUSTOMER_INFO,
    customerId: customerId,
    customerShippingAddress: customerShippingAddress,
  };
}

export function getPostResultCustomerInformation(
  customerInfo: CustomerInfo,
): ShippingAddressAction {
  return {
    type: GET_POST_RESULT_CUSTOMER_INFO,
    customerInfo: customerInfo,
  };
}
