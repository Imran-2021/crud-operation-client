import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import NoMatch from "./Components/Nomatch/NoMatch";
import Table from "./Components/Table/Table";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/home">
          <Home />
        </Route>
        <Route path="/users">
          <Table />
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
