import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

// Sample component to be removed later

const HatsPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>HATS PAGE</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
