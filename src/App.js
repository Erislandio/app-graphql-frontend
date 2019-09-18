import React from "react";
import Header from "./components/header/Header";
import { Route, Link } from "react-router-dom";
import { Login } from "./components/login/login";
import { Dashboard } from "./components/dashboard/dash";

function App() {
  return (
    <div className="App">
      <Header />

      <Route component={Login} path="/login" />
      <Route component={Dashboard} path="/console" />

      {/* footer */}
    </div>
  );
}

export default App;
