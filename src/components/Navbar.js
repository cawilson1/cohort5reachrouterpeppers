import React from "react";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";

export default function Navbar({ setSignedIn, signedIn }) {
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
      {signedIn ? (
        <>
          <Link to="/mypeppers">My Peppers</Link>
          <Link to="/sharedpeppers">Peppers Shared With Me</Link>
          <Button
            onClick={() => {
              window.localStorage.setItem("jwt", "");
              setSignedIn(undefined);
            }}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </nav>
  );
}
