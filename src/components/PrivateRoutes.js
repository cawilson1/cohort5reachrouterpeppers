import React from "react";
import { Router } from "@reach/router";
import Home from "../Pages/Home";
import AllPeppers from "../Pages/AllPeppers";
import NotFound from "../Pages/NotFound";

export default function PrivateRoutes() {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <AllPeppers path="/allpeppers" />
    </Router>
  );
}
