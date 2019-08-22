import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import RatingsPage from "./ratings/RatingsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <Route
        path="/(.+)"
        render={() => (
          <div>
            <Switch>
              <Route exact path="/ratings" component={RatingsPage} />
            </Switch>
          </div>
        )}
      />
    </div>
  );
}

export default App;
