import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducers';

const initialState = {
	searchRepo: {}
};

const Store = createStore(
	Reducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

export default Store;