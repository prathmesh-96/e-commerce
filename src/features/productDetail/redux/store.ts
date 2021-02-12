import { createStore } from 'redux';
import quantityReducer from './reducer/quantityCountReducer';

const store = createStore(quantityReducer);
export default store;
