import React, { useEffect, useState } from "react";

const backUrl = import.meta.env.VITE_BACK_URL;

export default function FightCreated() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${backUrl}/api/fights/`)
      .then((response) => response.json())
      .then((fightresults) => setData(fightresults));
  }, []);
  console.warn(data);

  console.warn("number of fight", data.length);
  // get the number of fights
  const fightLength = data.length;
  console.warn(fightLength);
  return (
    <header className="App-header ml-10 h-40">
      <div className=" mt-28 h-30">
        <h1>Fight Created</h1>
        <div className=" flex mt-10"> Number of fights:{fightLength} </div>
      </div>
    </header>
  );
}
