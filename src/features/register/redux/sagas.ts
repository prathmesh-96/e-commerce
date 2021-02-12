import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as RegistrationActions from './actions/createCustomer';
import * as RegistrationCreatorActions from './actionCreators/createCustomer';
import { createCustomer } from '../../../services/products';
import CustomerInfo from '../../../types/CustomerInfo';
import { AnyAction } from 'redux';
import { Alert } from 'react-native';
import { navigate } from '../../../navigator/NavigationService';
import { ScreenNames } from '../../../constants';

export function* CREATE_CUSTOMER({ customer }: AnyAction) {
  const res: CustomerInfo = yield call(createCustomer, customer);
  if (res !== null) {
    yield put(RegistrationCreatorActions.getCustomerCreateResponse(res));
    console.log(res);
    navigate(ScreenNames.LoginScreen);
  } else {
    Alert.alert(
      'Alert',
      'Sorry! Try after sometime',
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
  yield all([takeEvery(RegistrationActions.CREATE_CUSTOMER, CREATE_CUSTOMER)]);
}
