import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useCurrentUserContext } from "../context/userContext";

const backUrl = import.meta.env.VITE_BACKEND_URL;

export default function Form() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const SuccessSignIn = () => {
      toast("Success login", {
        icon: "👍",
      });
    };
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    if (email && password) {
      fetch(`${backUrl}/api/login`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setUser(data.user);
          setToken(data.token);
          SuccessSignIn();
          navigate("/Dashboard");
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="form">
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              className="text-white text-main-font"
            >
              LOGIN
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(event) => setEmail(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Email Address"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                onChange={(event) => setPassword(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                autoFocus
              />
              <NavLink
                to="/SignUp"
                className="flex justify-end text-white text-main-font"
              >
                <Typography
                  component="subtitle1"
                  variant="subtitle1"
                  className="text-white text-sm text-main-font"
                >
                  Don't have an account? Sign Up
                </Typography>
              </NavLink>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
                type="submit"
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>
      <div>{errorMessage}</div>
    </div>
  );
}
