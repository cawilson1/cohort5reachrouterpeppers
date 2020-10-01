import React from "react";
import { Link, navigate } from "@reach/router";
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
              setSignedIn(undefined);
              window.localStorage.setItem("jwt", "");
              navigate("/signin");
            }}
          >
            Sign Out
          </Button>
          {/* <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button
              onClick={() => {
                setSignedIn(undefined);
                window.localStorage.setItem("jwt", "");
              }}
            >
              Sign Out
            </Button>
          </Link> */}
        </>
      ) : (
        <>
          <Link to="/signin">Sign In</Link>
        </>
      )}
    </nav>
  );
}
