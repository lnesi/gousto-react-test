import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <ul class="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About</Link>
            </li>
          </ul>
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
