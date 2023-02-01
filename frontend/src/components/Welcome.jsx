import React from "react";

function Welcome() {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className="flex mt-4 text-2xl justify-center"> DATA FIGHT</h1>
        <p className="flex justify-center  ">
          Pour performer dans le sport de haut l'analyse des combats est
          primordial Ici vous pourrez visualiser vos analyse afin d'en tirer des
          axes de travail{" "}
        </p>
        <button
          type="button"
          className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6"
        >
          S'INSCRIRE
        </button>
      </div>
    </div>
  );
}

export default Welcome;
