import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import * as productReviewActions from './actions/productReviewDetails';
import * as productReviewActionsCreators from './actionCreators/productReviewDetails';
import * as addproductReviewActions from './actions/addProductReview';
import * as addproductReviewActionsCreators from './actionCreators/addProductReview';
import { getProductReviews, postReviews } from '../../../services/products';
import ReviewDetails from '../../../types/ReviewDetails';
import { AppState } from '../../../redux/reducer';
import { AnyAction } from 'redux';
import { WOOCOMMERCE_PARAMS, ScreenNames } from '../../../constants';
import { Alert } from 'react-native';
import { navigate } from '../../../navigator/NavigationService';

export const productsReviews = (state: AppState) =>
  state.productReviewDetails.reviewsReducer.productReviewDetails;
export const productReviewsOver = (state: AppState) =>
  state.productReviewDetails.reviewsReducer.productReviewsOver;

export function* GET_PRODUCT_REVIEWS({ productId, lazyLoad }: AnyAction) {
  console.log(`lazy ${lazyLoad}`);
  const productsReviewsList = yield select(productsReviews);
  const productsReviewsOver = yield select(productReviewsOver); // flag that indicates if lazy load list is over or not
  // get products only if productsOver flag is false
  if (!lazyLoad) {
    yield put(productReviewActionsCreators.setLoading());
  }

  if (!lazyLoad || !productsReviewsOver) {
    const res: ReviewDetails[] = yield call(
      getProductReviews,
      productsReviewsList.length,
      productId,
    );
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(productReviewActionsCreators.setProductReviewOver());
    }
    yield put(productReviewActionsCreators.setReviews(res, productsReviewsList.length));
  }
}

export function* POST_REVIEWS({ reviewDetails }: AnyAction) {
  const res: ReviewDetails = yield call(postReviews, reviewDetails);
  if (res !== null) {
    yield put(addproductReviewActionsCreators.getReviewsResponse(true));
    navigate(ScreenNames.ProductReviewDetails, { productID: reviewDetails.product_id });
    console.log(res);
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
  yield all([takeEvery(productReviewActions.GET_REVIEWS, GET_PRODUCT_REVIEWS)]);
  yield all([takeEvery(addproductReviewActions.POST_REVIEW, POST_REVIEWS)]);
}
