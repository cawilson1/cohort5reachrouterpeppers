import React, { useState, useEffect } from "react";
import axios from "axios";
import PepperCard from "../components/PepperCard";
export default function MyPeppers({ signedIn }) {
  const [peppers, setPeppers] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/getpeppersbyuser", {
        jwt: signedIn
      })
      .then(resp => setPeppers(resp.data))
      .catch(err => console.log(err));
  }, []);
  console.log(peppers);
  return (
    <div>
      {peppers.map(pepper => {
        return <PepperCard pepper={pepper} />;
      })}
    </div>
  );
}
