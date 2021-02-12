import * as actions from '../actions/collections';
import Collections from '../../../../types/Collections';

export interface CollectionsState {
  collections: Collections[];
  offset: number;
  collectionsOver?: boolean;
  isLoading?: boolean;
}

const initialState: CollectionsState = {
  collections: [],
  offset: 0,
  collectionsOver: false,
  isLoading: false,
};

export default function collectionsReducer(
  state: CollectionsState = initialState,
  action: actions.CollectionsActions,
): CollectionsState {
  switch (action.type) {
    case actions.CLEAR_COLLECTIONS:
      return initialState;
    case actions.SET_COLLECTIONS:
      return {
        ...state,
        collections: state.collections.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.COLLECTIONS_OVER:
      return { ...state, collectionsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
