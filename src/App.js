import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="navBar">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/about-us" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
