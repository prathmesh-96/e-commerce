import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as shippingAddressActions from './actions/shippingAddress';
import * as shippingAddressActionsCreators from './actionCreator/shippingAddress';
import { setCustomerInformation } from '../../../services/products';
import CustomerInfo from '../../../types/CustomerInfo';
import { AnyAction } from 'redux';
import { navigate } from '../../../navigator/NavigationService';
import { ScreenNames } from '../../../constants';
import { Alert } from 'react-native';

export function* POST_CUSTOMER_DETAILS({ customerId, customerShippingAddress }: AnyAction) {
  const res: CustomerInfo = yield call(setCustomerInformation, customerId, customerShippingAddress);
  if (res !== null) {
    yield put(shippingAddressActionsCreators.getPostResultCustomerInformation(res));
    navigate(ScreenNames.SelectAddressScreen);
  } else {
    Alert.alert(
      'Error',
      'Please try after sometime',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  }
}

export default function* rootSaga() {
  yield all([takeEvery(shippingAddressActions.POST_CUSTOMER_INFO, POST_CUSTOMER_DETAILS)]);
}
