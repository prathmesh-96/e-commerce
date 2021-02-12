export const SET_QUANTITY_COUNT = 'productDetails/SET_QUANTITY_COUNT';
export const CLEAR_QUANTITY_COUNT = 'productDetails/CLEAR_QUANTITY_COUNT';

export interface setQuantityCountAction {
  type: typeof SET_QUANTITY_COUNT;
  quantity_count: number;
}

export interface clearQuantityCountAction {
  type: typeof CLEAR_QUANTITY_COUNT;
}

export type QuantityAction = setQuantityCountAction | clearQuantityCountAction;
