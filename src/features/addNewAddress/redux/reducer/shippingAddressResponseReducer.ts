import * as actions from '../actions/shippingAddress';
import CustomerInfo from '../../../../types/CustomerInfo';

export interface shippingInfoResponseState {
  customerInfo: CustomerInfo;
}

const initialState: shippingInfoResponseState = {
  customerInfo: null,
};

export default function shippingAddressResponseReducer(
  state: shippingInfoResponseState = initialState,
  action: actions.ShippingAddressAction,
): shippingInfoResponseState {
  switch (action.type) {
    case actions.GET_POST_RESULT_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: action.customerInfo,
      };
    default:
      return state;
  }
}
