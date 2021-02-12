import CustomerInfo from '../../../../types/CustomerInfo';

export const GET_CUSTOMER_INFO = 'selectAddresses/GET_CUSTOMER_INFO';
export const SET_CUSTOMER_INFO = 'selectAddresses/SET_CUSTOMER_INFO';
export const CLEAR_CUSTOMER_INFO = 'selectAddresses/CLEAR_CUSTOMER_INFO';
export const SET_LOADING = 'selectAddresses/SET_LOADING';

export interface GetCustomerInfoAction {
  type: typeof GET_CUSTOMER_INFO;
  customerId: number;
}

export interface SetCustomerInfoAction {
  type: typeof SET_CUSTOMER_INFO;
  payload: CustomerInfo;
  offset: number;
}

export interface ClearCustomerInfoAction {
  type: typeof CLEAR_CUSTOMER_INFO;
}

export interface CustomerInfoLoadAction {
  type: typeof SET_LOADING;
}

export type customerInfoActions =
  | GetCustomerInfoAction
  | SetCustomerInfoAction
  | ClearCustomerInfoAction
  | CustomerInfoLoadAction;
