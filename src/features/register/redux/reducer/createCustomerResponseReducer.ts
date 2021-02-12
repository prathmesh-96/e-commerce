import * as actions from '../actions/createCustomer';
import CustomerInfo from '../../../../types/CustomerInfo';

export interface customerInfoResponseState {
  customerInfo: CustomerInfo;
}

const initialState: customerInfoResponseState = {
  customerInfo: null,
};

export default function createCustomerResponseReducer(
  state: customerInfoResponseState = initialState,
  action: actions.RegistrationActions,
): customerInfoResponseState {
  switch (action.type) {
    case actions.GET_RESPONSE:
      return {
        ...state,
        customerInfo: action.customerInfo,
      };
    default:
      return state;
  }
}
