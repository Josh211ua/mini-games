// 1. name: string - The name to use when displaying the option to play that game.
// 2. iconurl?: string (TODO not implemented)
// 3. route: ReactRouter.Route - A route component that can be plugged directly into the router.
// 4. reducer: Redux.Reducer - A reducer for all state in the game
import React from "react";
import { Route } from "react-router";
import { combineReducers } from "redux";

import Demo from "./components/Demo.react";
import * as reducers from "./reducers";

export const name = "Demo";

// Note top level routes needs keys because they will be put into a child array
export const route = <Route key="demo" path="/demo" component={Demo} />;

export const reducer = combineReducers(reducers);
