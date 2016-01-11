/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from "redux";
import { routeReducer as routing } from "redux-simple-router";

const rootReducer = combineReducers({
    routing
});

export default rootReducer;
