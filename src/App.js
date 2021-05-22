import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MoviesDashboard from "./components/MovieDashboard";
import SingleMovie from "./components/SingleMovie";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MoviesDashboard />
        </Route>
        <Route exact path="/movies/:id">
          <SingleMovie />
        </Route>
      </Switch>
    </Router>
  );
}
