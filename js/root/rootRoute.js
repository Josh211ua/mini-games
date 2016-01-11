import React from "react";
import { Route } from "react-router";

import App from "./App.react";
import NotFoundPage from "../shared/components/NotFound.react";
import * as Games from "../games/index";

const routes = [];
for (const game in Games) {
    if (Games.hasOwnProperty(game)) {
        routes.push(Games[game].route);
    }
}

const RootRoute = (
    <Route component={App}>
        {routes}
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default RootRoute;
