import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useCurrentUserContext } from "../context/userContext";

const backUrl = import.meta.env.VITE_BACKEND_URL;

function FightersCard() {
  const { user, token } = useCurrentUserContext();
  const [fighters, setFighters] = useState(null);
  const [selectedFighter, setSelectedFighter] = useState(0);
  console.warn(user);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (id) => {
    setSelectedFighter(id);
    setModalOpen(id);
  };

  const handleModalClose = () => {
    setModalOpen(0);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  const DELrequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };
  const GetFighter = () => {
    fetch(`${backUrl}/api/fighters/`, GETrequestOptions)
      .then((response) => response.json())
      .then((data) => setFighters(data));
    console.warn(fighters);
  };

  const handleDelete = async () => {
    await fetch(
      `${backUrl}/api/fighters/${selectedFighter}`,
      DELrequestOptions
    );
    GetFighter();
  };
  useEffect(() => {
    GetFighter();
  }, []);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container component="main">
          <CssBaseline />

          {fighters && (
            <div className="flex flex-wrap justify-center">
              {fighters.map((fighter) => (
                <div className="flex " key={fighter.id}>
                  <div className=" m-8 flex object-contain ">
                    <div className=" bg-white rounded-lg shadow-lg border-2 object-contain max-w-sm ">
                      <img
                        className="rounded-t-lg border-8 border-orange-700 h-80 w-[20rem] "
                        src={`${backUrl}/uploads/${fighter.img}`}
                        alt={fighter.firstname}
                      />
                      <div className="p-4 border-8 object-contain">
                        <h5 className="text-black text-xl font-medium mb-1">
                          {fighter.firstname} {fighter.lastname}
                        </h5>
                        <p className="text-black text-base mb-1">
                          {fighter.country}
                        </p>
                        <p className="text-black text-base mb-1">
                          {fighter.category}
                        </p>
                        <p className="text-black text-base mb-1">
                          {fighter.weightCat}
                        </p>
                        <p className="text-black text-base mb-1">
                          {fighter.sex}
                        </p>
                        <p className="text-black text-base mb-1">
                          {fighter.age} years old
                        </p>
                        <button
                          type="button"
                          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          UPDATE
                        </button>
                        <button
                          onClick={() => handleModalOpen(fighter.id)}
                          type="button"
                          className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                    <div className="mt-48 flex absolute justify-center  bg-white">
                      {modalOpen === fighter.id && (
                        <div className="p-4 border-2 border-red-600 rounded shadow-md ">
                          <p className="text-black">
                            Are you sure you want delete {fighter.lastname}?
                          </p>
                          <button
                            className=" inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            type="button"
                            onClick={handleModalClose}
                          >
                            CANCEL
                          </button>
                          <button
                            className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            type="button"
                            onClick={handleDelete}
                          >
                            DELETE
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default FightersCard;
