import React from "react";
import { Router } from "@reach/router";
import Home from "../Pages/Home";
import AllPeppers from "../Pages/AllPeppers";
import NotFound from "../Pages/NotFound";
import SharedPeppers from "../Pages/SharedPeppers";

export default function PrivateRoutes({ signedIn }) {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <AllPeppers path="/allpeppers" />
      <SharedPeppers path="/sharedpeppers" signedIn={signedIn} />
    </Router>
  );
}
