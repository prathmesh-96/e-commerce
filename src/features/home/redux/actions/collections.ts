import Collections from '../../../../types/Collections';

export const GET_COLLECTIONS = 'home/GET_COLLECTIONS';
export const SET_COLLECTIONS = 'home/SET_COLLECTIONS';
export const CLEAR_COLLECTIONS = 'home/CLEAR_COLLECTIONS';
export const COLLECTIONS_OVER = 'home/COLLECTIONS_OVER';
export const SET_LOADING = 'home/SET_LOADING';

export interface GetCollectionsAction {
  type: typeof GET_COLLECTIONS;
  lazyLoad: boolean;
}

export interface SetCollectionsAction {
  type: typeof SET_COLLECTIONS;
  payload: Collections[];
  offset: number;
}

export interface ClearCollectionsAction {
  type: typeof CLEAR_COLLECTIONS;
}

export interface CollectionsOverAction {
  type: typeof COLLECTIONS_OVER;
}

export interface CollectionsLoadAction {
  type: typeof SET_LOADING;
}

export type CollectionsActions =
  | GetCollectionsAction
  | SetCollectionsAction
  | ClearCollectionsAction
  | CollectionsOverAction
  | CollectionsLoadAction;
