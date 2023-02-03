import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, NativeSelect } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { toast, Toaster } from "react-hot-toast";

const backUrl = import.meta.env.VITE_BACKEND_URL;
export default function Form() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [userRole, setUserRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SuccessSignUp = () => {
    toast("Account created", {
      icon: "👍",
    });
  };
  const ErrorPassword = () => {
    toast("Password Does not match", {
      icon: "👎",
    });
  };
  const ErrorRegexPassword = () => {
    toast(
      "Password must be at least 8 characters long and contain at least one number and one letter one Uppercase and one special character",
      {
        icon: "👎",
      }
    );
  };
  const ErrorEmail = () => {
    toast("Email is not correct", {
      icon: "👎",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("firstname", firstname);
    console.warn("lastname", lastname);
    console.warn("country", country);
    console.warn("role", userRole);
    console.warn("email", email);

    if (password !== confirmPassword) {
      ErrorPassword();
      return;
    }
    // verify that the password is at least 8 characters long and contains at least one number and one letter (regex)
    if (
      !password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      ErrorRegexPassword();
      return;
    }
    // verify that the email is valid (regex)
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      ErrorEmail();
      return;
    }
    // headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      firstname,
      lastname,
      country,
      userRole,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    // send the data to the backend
    fetch(`${backUrl}/api/register`, requestOptions)
      .then((data) => {
        console.warn("Success:", data);
        SuccessSignUp();
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
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
              SIGN UP
            </Typography>
            <div>
              <Toaster position="top-center" reverseOrder />
            </div>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(event) => setFirstname(event.target.value)}
                margin="normal"
                required
                fullWidth
                type="text"
                label="First name"
                name="firstname"
                id="firstname"
                autoComplete="firstname"
                autoFocus
              />
              <TextField
                onChange={(event) => setLastname(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Last name"
                name="lastname"
                id="lastname"
                autoComplete="lastname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Country"
                onChange={(event) => setCountry(event.target.value)}
                name="country"
                id="country"
                autoComplete="country"
                autoFocus
              />
              <InputLabel htmlFor="role">Role</InputLabel>
              <NativeSelect
                onChange={(event) => setUserRole(event.target.value)}
                id="role"
              >
                <option value="">--choose--</option>
                <option value="athlete">Athlete</option>
                <option value="coach">Coach</option>
              </NativeSelect>

              <TextField
                onChange={(event) => setEmail(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Email"
                type="email"
                name="email"
                id="email"
                autoFocus
              />

              <TextField
                onChange={(event) => setPassword(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Password"
                type="text"
                name="password"
                id="password"
              />

              <TextField
                onChange={(event) => setConfirmPassword(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="text"
                name="password"
                id="password"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
                type="submit"
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
