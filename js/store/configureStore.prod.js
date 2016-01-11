import { applyMiddleware, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import reduxThunk from 'redux-thunk';

import DevTools from "../components/dev/DevTools.react";
import rootReducer from "../reducers/rootReducer";

const createStoreWithMiddleware = compose(
	applyMiddleware(reduxThunk)
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
}