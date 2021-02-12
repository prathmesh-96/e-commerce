import Customer from '../../../../types/Customer';
import CustomerInfo from '../../../../types/CustomerInfo';

export const CREATE_CUSTOMER = 'register/CREATE_CUSTOMER';
export const GET_RESPONSE = 'register/GET_RESPONSE';

export interface createCustomerAction {
  type: typeof CREATE_CUSTOMER;
  customer: Customer;
}

export interface getCustomerCreatedResponseAction {
  type: typeof GET_RESPONSE;
  customerInfo: CustomerInfo;
}

export type RegistrationActions = createCustomerAction | getCustomerCreatedResponseAction;
