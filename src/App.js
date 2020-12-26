import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
