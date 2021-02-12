import { all, put, takeEvery, call, select, take } from 'redux-saga/effects';
import * as homeActions from './actions/products';
import * as homeActionsCreators from './actionCreators/products';
import * as cartBadgeActions from './actions/cartBadge';
import * as cartBadgeActionsCreators from './actionCreators/cartBadge';
import * as categoryActionsCreators from './actionCreators/Category';
import * as categoryActions from './actions/category';
import * as collectionsActions from './actions/collections';
import * as featuredProductActions from './actions/featuredProduct';
import * as babyProductActions from './actions/babyProduct';
import * as featuredProductActionsCreators from './actionCreators/featuredProduct';
import * as babyProductActionsCreators from './actionCreators/babyProduct';
import * as collectionsActionsCreators from './actionCreators/Collections';
import * as firstcategoryActions from './actions/firstCategory';
import * as firstcategoryActionsCreators from './actionCreators/firstCategory';
import * as secondcategoryActions from './actions/secondCategory';
import * as secondcategoryActionsCreators from './actionCreators/secondCategory';
import {
  getProducts,
  getFeaturedProducts,
  // getCategoriesUrl,
  getCollectionsUrl,
  getBabyProducts,
} from '../../../services/products';
import { getCartItemCount } from '../../../services/cartProducts';
import Product from '../../../types/Product';
import { AppState } from '../../../redux/reducer';
import { WOOCOMMERCE_PARAMS } from '../../../constants';
import Category from '../../../types/Category';
import Collections from '../../../types/Collections';
import { AnyAction } from 'redux';
import { getProductsByCategory } from '../../../services/products';

export const homePageProductsOffset = (state: AppState) => state.home.productsReducer.offset;
export const homePageProductsListOver = (state: AppState) =>
  state.home.productsReducer.productsOver;

export function* GET_PRODUCTS({ lazyLoad }: AnyAction) {
  const productsOffset = yield select(homePageProductsOffset);
  const productsOver = yield select(homePageProductsListOver); // flag that indicates if lazy load list is over or not
  // get products only if productsOver flag is false
  if (!lazyLoad) {
    yield put(homeActionsCreators.setLoading());
  }

  if (!lazyLoad || !productsOver) {
    const res: Product[] = yield call(getProducts, productsOffset);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(homeActionsCreators.setPopularProductsOver());
    }
    yield put(homeActionsCreators.setPopularProducts(res, productsOffset.length));
  }
}

export const featuredProducts = (state: AppState) =>
  state.home.featuredProductReducer.featuredProducts;
export const featuredProductsListOver = (state: AppState) =>
  state.home.featuredProductReducer.featuredProductsOver;

export function* GET_FEATURED_PRODUCTS({ lazyLoad }: AnyAction) {
  const featuredProduct = yield select(featuredProducts);
  const featuredProductsOver = yield select(featuredProductsListOver); // flag that indicates if lazy load list is over or not
  if (!lazyLoad) {
    yield put(homeActionsCreators.setLoading());
  }

  if (!lazyLoad || !featuredProductsOver) {
    const res: Product[] = yield call(getFeaturedProducts, featuredProduct.length);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(featuredProductActionsCreators.setFeaturedProductsOver());
    }
    yield put(featuredProductActionsCreators.setFeaturedProducts(res, featuredProduct.length));
  }
}

export const babyProducts = (state: AppState) => state.home.babyProductReducer.babyProducts;
export const babyProductsListOver = (state: AppState) =>
  state.home.babyProductReducer.babyProductsOver;

export function* GET_BABY_PRODUCTS({ lazyLoad }: AnyAction) {
  const babyProduct = yield select(babyProducts);
  const babyProductsOver = yield select(babyProductsListOver); // flag that indicates if lazy load list is over or not
  if (!lazyLoad) {
    yield put(homeActionsCreators.setLoading());
  }

  if (!lazyLoad || !babyProductsOver) {
    const res: Product[] = yield call(getBabyProducts, babyProduct.length);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(babyProductActionsCreators.setBabyProductsOver());
    }
    yield put(babyProductActionsCreators.setBabyProducts(res, res.length));
  }
}

// export const categories = (state: AppState) => state.home.categoryReducer.categories;
// export const categoriesListOver = (state: AppState) => state.home.categoryReducer.categoryOver;

// export function* GET_CATEGORIES({ lazyLoad }: AnyAction) {
//   const category = yield select(categories);
//   const categoryListOver = yield select(categoriesListOver); // flag that indicates if lazy load list is over or not

//   if (!lazyLoad) {
//     yield put(homeActionsCreators.setLoading());
//   }

//   if (!lazyLoad || !categoryListOver) {
//     const res: Category[] = yield call(getCategoriesUrl, category.length);
//     if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
//       yield put(categoryActionsCreators.setCategoriesOver());
//     }
//     yield put(categoryActionsCreators.setCategories(res, category.length));
//   }
// }

export const collections = (state: AppState) => state.home.collectionsReducer.collections;
export const collectionsListOver = (state: AppState) =>
  state.home.collectionsReducer.collectionsOver;

export function* GET_COLLECTIONS({ categoryId, lazyLoad }: AnyAction) {
  const col = yield select(collections);
  const collectionsOver = yield select(collectionsListOver); // flag that indicates if lazy load list is over or not

  if (!lazyLoad) {
    yield put(homeActionsCreators.setLoading());
  }

  if (!lazyLoad || !collectionsOver) {
    const res: Collections[] = yield call(getCollectionsUrl, col.length, categoryId);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(collectionsActionsCreators.setCollectionsOver());
    }
    yield put(collectionsActionsCreators.setCollections(res, col.length));
  }
}

export function* GET_CART_ITEM_COUNT() {
  const res: number = yield call(getCartItemCount);
  yield put(cartBadgeActionsCreators.setCartItemCount(res));
}

export const categoryFirstProducts = (state: AppState) => state.home.categoryFirstReducer.products;
export const categoryFirstProductsListOver = (state: AppState) =>
  state.home.categoryFirstReducer.productsOver;

export function* GET_FRIST_CATEGORY_PRODUCT({ categoryId, lazyLoad }: AnyAction) {
  // console.log(`lazy ${lazyLoad}`)
  const productsByCategory = yield select(categoryFirstProducts);
  const productsByCategoryOver = yield select(categoryFirstProductsListOver); // flag that indicates if lazy load list is over or not
  // get products only if productsOver flag is false
  if (!lazyLoad) {
    yield put(firstcategoryActionsCreators.setFirstLoading());
  }

  if (!lazyLoad || !productsByCategoryOver) {
    const res: Product[] = yield call(getProductsByCategory, productsByCategory.length, categoryId);
    console.log(res);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(firstcategoryActionsCreators.setFirstCategoryOver());
    }
    yield put(firstcategoryActionsCreators.setFirstCategory(res, productsByCategory.length));
  }
}

// export const categorySecondProducts = (state: AppState) =>
//   state.home.categorySecondReducer.products;
// export const categorySecondProductsListOver = (state: AppState) =>
//   state.home.categorySecondReducer.productsOver;

// export function* GET_SECOND_CATEGORY_PRODUCT({ categoryId, lazyLoad }: AnyAction) {
//   // console.log(`lazy ${categoryId}`)
//   const productsByCategory = yield select(categorySecondProducts);
//   const productsByCategoryOver = yield select(categorySecondProductsListOver); // flag that indicates if lazy load list is over or not
//   // get products only if productsOver flag is false
//   if (!lazyLoad) {
//     yield put(secondcategoryActionsCreators.setSecondLoading());
//   }

//   if (!lazyLoad || !productsByCategoryOver) {
//     const res: Product[] = yield call(getProductsByCategory, productsByCategory.length, categoryId);
//     if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
//       yield put(secondcategoryActionsCreators.setSecondCategoryOver());
//     }
//     yield put(secondcategoryActionsCreators.setSecondCategory(res, productsByCategory.length));
//   }
// }

export default function* rootSaga() {
  yield all([takeEvery(homeActions.GET_PRODUCTS, GET_PRODUCTS)]);
  yield all([takeEvery(featuredProductActions.GET_FEATURED_PRODUCTS, GET_FEATURED_PRODUCTS)]);
  yield all([takeEvery(babyProductActions.GET_BABY_PRODUCTS, GET_BABY_PRODUCTS)]);
  yield all([takeEvery(collectionsActions.GET_COLLECTIONS, GET_COLLECTIONS)]);
  // yield all([takeEvery(categoryActions.GET_CATEGORIES, GET_CATEGORIES)]);
  yield all([takeEvery(cartBadgeActions.GET_CART_ITEM_COUNT, GET_CART_ITEM_COUNT)]);
  yield all([takeEvery(firstcategoryActions.GET_FIRST_CATEGORY, GET_FRIST_CATEGORY_PRODUCT)]);
  // yield all([takeEvery(secondcategoryActions.GET_SECOND_CATEGORY, GET_SECOND_CATEGORY_PRODUCT)])
}
