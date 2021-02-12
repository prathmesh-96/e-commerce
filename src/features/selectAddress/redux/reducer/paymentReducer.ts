import * as actions from '../actions/payment';
import PlaceOrder from '../../../../types/PlaceOrder';

export interface paymentState {
  placeorder: PlaceOrder;
  screenName: string;
}

const initialState: paymentState = {
  placeorder: null,
  screenName: null,
};

export default function paymentReducer(
  state: paymentState = initialState,
  action: actions.PaymentAction,
): paymentState {
  switch (action.type) {
    case actions.POST_ORDER:
      return {
        ...state,
        placeorder: action.placeorder,
        screenName: action.screenName,
      };
    default:
      return state;
  }
}
