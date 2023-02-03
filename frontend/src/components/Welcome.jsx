import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Logo from "../assets/fightData.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Welcome() {
  const navigate = useNavigate();
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="flex flex-col justify-center">
            <img
              className="flex mt-20 text-2xl justify-center"
              src={Logo}
              alt="logo"
            />
            <p className="mt-12 flex justify-center  ">
              Pour performer dans le sport de haut niveau l'analyse des combats
              est primordial Ici vous pourrez visualiser vos analyse afin d'en
              tirer des axes de travail{" "}
            </p>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
              type="button"
              className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6"
              onClick={() => {
                navigate("/signup");
              }}
            >
              S'INSCRIRE
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Welcome;
