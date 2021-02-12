import CustomerInfo from '../../../../types/CustomerInfo';

export const POST_CUSTOMER_INFO = 'shippingAddress/POST_CUSTOMER_INFO';
export const GET_POST_RESULT_CUSTOMER_INFO = 'shippingAddress/GET_POST_RESULT_CUSTOMER_INFO';

export interface SetpostCustomerInfoAction {
  type: typeof POST_CUSTOMER_INFO;
  customerId: number;
  customerShippingAddress: {};
}

export interface getPostResultCustomerInfo {
  type: typeof GET_POST_RESULT_CUSTOMER_INFO;
  customerInfo: CustomerInfo;
}

export type ShippingAddressAction = SetpostCustomerInfoAction | getPostResultCustomerInfo;
