import { RegistrationActions, CREATE_CUSTOMER, GET_RESPONSE } from '../actions/createCustomer';
import CustomerInfo from '../../../../types/CustomerInfo';
import Customer from '../../../../types/Customer';

export function createCustomer(customer: Customer): RegistrationActions {
  return {
    type: CREATE_CUSTOMER,
    customer: customer,
  };
}

export function getCustomerCreateResponse(customerInfo: CustomerInfo): RegistrationActions {
  return {
    type: GET_RESPONSE,
    customerInfo: customerInfo,
  };
}
