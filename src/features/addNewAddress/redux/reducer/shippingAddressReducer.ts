import * as actions from '../actions/shippingAddress';

export interface shippingInfoState {
  customerId: number;
  customerShippingAddress: {};
}

const initialState: shippingInfoState = {
  customerId: 2,
  customerShippingAddress: {},
};

export default function shippingAddressReducer(
  state: shippingInfoState = initialState,
  action: actions.ShippingAddressAction,
): shippingInfoState {
  switch (action.type) {
    case actions.POST_CUSTOMER_INFO:
      return {
        ...state,
        customerShippingAddress: action.customerShippingAddress,
      };
    default:
      return state;
  }
}
