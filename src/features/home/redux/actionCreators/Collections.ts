import {
  CollectionsActions,
  GET_COLLECTIONS,
  SET_COLLECTIONS,
  CLEAR_COLLECTIONS,
  COLLECTIONS_OVER,
  SET_LOADING,
} from '../actions/collections';
import Collections from '../../../../types/Collections';

export function getCollections(lazyLoad: boolean): CollectionsActions {
  return {
    type: GET_COLLECTIONS,
    lazyLoad: lazyLoad,
  };
}

export function setCollections(collections: Collections[], offset: number): CollectionsActions {
  console.log('ac ==', offset);
  return {
    type: SET_COLLECTIONS,
    payload: collections,
    offset: offset,
  };
}

export const clearCollects = (): CollectionsActions => ({
  type: CLEAR_COLLECTIONS,
});

export const setCollectionsOver = (): CollectionsActions => {
  return {
    type: COLLECTIONS_OVER,
  };
};

export const setLoading = (): CollectionsActions => ({
  type: SET_LOADING,
});
