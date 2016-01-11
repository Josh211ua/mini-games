/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from "redux";
import { routeReducer as routing } from "redux-simple-router";

import home from "./homeReducer";

// Replace line below once you have several reducers with
// import { combineReducers } from "redux";
// const rootReducer = combineReducers({ homeReducer, yourReducer })
const rootReducer = combineReducers({
    home,
    routing
});

export default rootReducer;
