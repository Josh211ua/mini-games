import { applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

const createStoreWithMiddleware = compose(
	applyMiddleware(reduxThunk)
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
