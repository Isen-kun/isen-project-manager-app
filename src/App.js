import React from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <Container className="sm">
        <AuthContextProvider>
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </AuthContextProvider>
      </Container>
    </Router>
  );
}

export default App;
