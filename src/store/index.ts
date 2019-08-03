import { createStore } from 'redux';
import reducer from '../reducer/onlinePay';

const store = createStore(reducer);

export default store;
