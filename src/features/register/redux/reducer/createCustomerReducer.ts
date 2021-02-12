import Customer from '../../../../types/Customer';
import * as actions from '../actions/createCustomer';

export interface customerInfoState {
  customer: Customer;
}

const initialState: customerInfoState = {
  customer: null,
};

export default function createCustomerReducer(
  state: customerInfoState = initialState,
  action: actions.RegistrationActions,
): customerInfoState {
  switch (action.type) {
    case actions.CREATE_CUSTOMER:
      return {
        ...state,
        customer: action.customer,
      };
    default:
      return state;
  }
}
