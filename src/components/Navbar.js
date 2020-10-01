import React from "react";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "green",
        height: 50,
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <Link to="/">Home</Link> <Link to="/allpeppers">All Peppers</Link>{" "}
      <Link to="/signin">Sign In</Link>
    </nav>
  );
}
