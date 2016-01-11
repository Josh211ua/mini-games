/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from "redux";
import { routeReducer as routing } from "redux-simple-router";

import * as Games from "../games";

// Collect the root reducers from each game
const reducers = {};
for (const key in Games) {
    if (Games.hasOwnProperty(key)) {
        const game = Games[key];
        if (game.reducer) {
            reducers[key] = game.reducer;
        }
    }
}

// Add the routing reducer
reducers.routing = routing;

const rootReducer = combineReducers(reducers);

export default rootReducer;
