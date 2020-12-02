import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import FavoriteLocations from "./components/favorites/FavoriteLocations";
import Registration from "./components/user/Registration";
import HomePage from "./components/HomePage";

function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/favorites" component={FavoriteLocations} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;