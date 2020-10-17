import React from 'react';
import { Switch, Route, Link } from "react-router-dom"
import './App.css';
import Form from "./Components/Form"

export default function App() {
  // Initializers

  return (
    <div className="App">

      <Link to="/">Home</Link>
      <Link to="/Form">Form</Link>
      <div>
        <span>--testing--</span>
        <h1>Marvel API</h1>
      </div>

      <Switch>
        <Route path="/Form">
          <Form />
        </Route>

        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </div>
  );
}
