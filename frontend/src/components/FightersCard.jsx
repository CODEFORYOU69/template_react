import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useCurrentUserContext } from "../context/userContext";

const backUrl = import.meta.env.VITE_BACKEND_URL;

function FightersCard() {
  const { user, token } = useCurrentUserContext();
  const [fighters, setFighters] = useState(null);
  console.warn(user);

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
  useEffect(() => {
    fetch(`${backUrl}/api/fighters/`, GETrequestOptions)
      .then((response) => response.json())
      .then((data) => setFighters(data));
    console.warn(fighters);
  }, []);

  const handleDelete = () => {
    fetch(`${backUrl}/api/fighters/${user.id}`, DELrequestOptions);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {fighters && (
            <div>
              {fighters.map((fighter) => (
                <div key={fighter.id}>
                  <div className=" m-8 h-[35rem] flex flex-row justify-center ">
                    <div className=" bg-white rounded-lg shadow-lg  max-w-sm">
                      <a href="#!">
                        <img
                          className="rounded-t-lg"
                          src={`${backUrl}/uploads/${fighter.img}`}
                          alt={fighter.firstname}
                        />
                      </a>
                      <div className="p-6">
                        <h5 className="text-black text-xl font-medium mb-2">
                          {fighter.firstname} {fighter.lastname}
                        </h5>
                        <p className="text-black text-base mb-4">
                          {fighter.country}
                        </p>
                        <p className="text-black text-base mb-4">
                          {fighter.category}
                        </p>
                        <p className="text-black text-base mb-4">
                          {fighter.weightCat}
                        </p>
                        <p className="text-black text-base mb-4">
                          {fighter.sex}
                        </p>
                        <p className="text-black text-base mb-4">
                          {fighter.age}
                        </p>
                        <button
                          type="button"
                          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          UPDATE
                        </button>
                        <button
                          onClick={handleDelete}
                          type="button"
                          className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          DELETE
                        </button>
                      </div>
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
