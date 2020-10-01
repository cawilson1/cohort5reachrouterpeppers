import React from "react";
import { Router } from "@reach/router";
import Home from "../Pages/Home";
import AllPeppers from "../Pages/AllPeppers";
import SignIn from "../Pages/SignIn";
import NotFound from "../Pages/NotFound";

export default function PublicRoutes() {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <AllPeppers path="/allpeppers" />
      <SignIn path="/signin" />
    </Router>
  );
}
