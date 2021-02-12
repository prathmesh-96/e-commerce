import CustomerInfo from '../../../../types/CustomerInfo';
import * as actions from '../actions/selectAddresses';

export interface customerInfoState {
  customerDetails: CustomerInfo;
  offset: number;
  isLoading?: boolean;
}

const initialState: customerInfoState = {
  customerDetails: null,
  offset: 0,
  isLoading: false,
};

export default function selectddressReducer(
  state: customerInfoState = initialState,
  action: actions.customerInfoActions,
): customerInfoState {
  switch (action.type) {
    case actions.CLEAR_CUSTOMER_INFO:
      return initialState;
    case actions.SET_CUSTOMER_INFO:
      return {
        ...state,
        customerDetails: action.payload,
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
