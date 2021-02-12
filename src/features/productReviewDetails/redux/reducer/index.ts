import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer';
import postReviewReducer from './postReviewReducer';
import postReviewResponseReducer from './addReviewResponseReducer';

const rootReducer = combineReducers({
  reviewsReducer: reviewsReducer,
  postReviewReducer: postReviewReducer,
  postReviewResponseReducer: postReviewResponseReducer,
});

export type ProductReviewState = ReturnType<typeof rootReducer>;

export default rootReducer;
