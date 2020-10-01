import React, { useState, useEffect } from "react";
import PublicRoutes from "./components/PublicRoutes";
import Navbar from "./components/Navbar";
function App() {
  const [signedIn, setSignedIn] = useState(undefined);
  useEffect(() => {
    if (window.localStorage.jwt) {
      setSignedIn(window.localStorage.jwt);
    }
  }, []);
  console.log(signedIn);
  return (
    <div>
      <Navbar />
      <PublicRoutes />
    </div>
  );
}

export default App;
