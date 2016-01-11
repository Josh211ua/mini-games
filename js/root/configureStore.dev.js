import { applyMiddleware, createStore, compose } from "redux";
// import { persistState } from "redux-devtools";
import reduxThunk from "redux-thunk";

import DevTools from "../shared/components/DevTools.react";
import rootReducer from "./rootReducer";

const createStoreWithMiddleware = compose(
	applyMiddleware(reduxThunk),
	DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

	// Make reducers hot reloadable, see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
    if (module.hot) {
        module.hot.accept("./rootReducer", () => {
            const nextRootReducer = require("./rootReducer").default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
