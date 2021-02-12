import { QuantityAction, SET_QUANTITY_COUNT, CLEAR_QUANTITY_COUNT } from '../actions/quantity';

export function setQuantityCount(q_count: number): QuantityAction {
  return {
    type: SET_QUANTITY_COUNT,
    quantity_count: q_count,
  };
}

export function clearQuantityCount(): QuantityAction {
  return {
    type: CLEAR_QUANTITY_COUNT,
  };
}
