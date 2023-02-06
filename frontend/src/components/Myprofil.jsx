import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, NativeSelect } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCurrentUserContext } from "../context/userContext";

const backUrl = import.meta.env.VITE_BACKEND_URL;

export default function Myprofil() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [userRole, setUserRole] = useState("");
  const { user, setUser, token } = useCurrentUserContext();
  const imgRef = React.useRef();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const Created = () => {
    toast("Profil modified successfully", {
      icon: "👍",
    });
  };
  const Error = () => {
    toast("Error when modify your profil try again", {
      icon: "👎",
    });
  };
  const NoFile = () => {
    toast("No file found", {
      icon: "👎",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("firstname", firstname);
    console.warn("lastname", lastname);
    console.warn("country", country);

    // headers
    if (imgRef.current.files[0]) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const formData = new FormData();
      formData.append("img", imgRef.current.files[0]);
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("country", country);
      formData.append("userRole", userRole);

      for (const [key, value] of formData.entries()) {
        console.warn(`${key}: ${value}`);
      }

      axios
        .put(`${backUrl}/api/users/${user.id}`, formData, config)
        .then((data) => {
          console.warn("Success:", data);
          Created();
          navigate("/Myprofil");
        })
        .catch((error) => {
          console.error("Error:", error);
          Error();
        });
    } else {
      NoFile();
    }
  };
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  const GetUser = () => {
    fetch(`${backUrl}/api/users/${user.id}`, GETrequestOptions)
      .then((response) => response.json())
      .then((data) => setUser(data));
    console.warn();
  };
  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div className="flex center">
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
              My Profil
            </Typography>
            <div>
              <Toaster position="top-center" reverseOrder />
            </div>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              encType="multipart/form-data"
            >
              <img
                alt="avatar"
                src={`${backUrl}/uploads/${user.img}`}
                className="bg-black p-1 w-[15%] h-[12vh] rounded-full mb-2 m-auto "
              />
              <label htmlFor="img" className="form-label">
                {" "}
                Select image
              </label>
              <input type="file" ref={imgRef} id="img" required="required" />
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
                placeholder={user.firstname}
                value={firstname}
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
                placeholder={user.lastname}
                value={lastname}
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
                placeholder={user.country}
                value={country}
                autoFocus
              />
              <InputLabel htmlFor="role">Role</InputLabel>
              <NativeSelect
                onChange={(event) => setUserRole(event.target.value)}
                id="role"
                value={userRole}
                placeholder={user.userRole}
              >
                <option value="">--choose--</option>
                <option value="athlete">Athlete</option>
                <option value="coach">Coach</option>
              </NativeSelect>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
                type="submit"
              >
                Change my profil
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
