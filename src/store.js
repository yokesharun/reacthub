import { createStore } from 'redux';
import Reducer from './Reducers';

const initialState = {
	name : ''
};

const Store = createStore(
	Reducer,
	initialState
);

export default Store;