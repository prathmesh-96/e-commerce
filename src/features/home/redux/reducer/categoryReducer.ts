import * as actions from '../actions/category';
import Category from '../../../../types/Category';

export interface CategoryState {
  categories: Category[];
  offset: number;
  categoryOver?: boolean;
  isLoading?: boolean;
}

const initialState: CategoryState = {
  categories: [],
  offset: 0,
  categoryOver: false,
  isLoading: false,
};

export default function categoryReducer(
  state: CategoryState = initialState,
  action: actions.CategoryActions,
): CategoryState {
  switch (action.type) {
    case actions.CLEAR_CATEGORIES:
      return initialState;
    case actions.SET_CATEGORIES:
      return {
        ...state,
        categories: state.categories.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.CATEGORIES_OVER:
      return { ...state, categoryOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
