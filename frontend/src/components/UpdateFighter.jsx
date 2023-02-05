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
export default function AddFighter() {
  const [country, setCountry] = useState("");
  const [sex, setSex] = useState("");
  const [category, setCategory] = useState("");
  const [weightCat, setWeightCat] = useState("");
  const [age, setAge] = useState("");
  const { token } = useCurrentUserContext();
  const imgRef = React.useRef();
  const [fighter, setFighter] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // recupération des articles.
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeader,
    };

    fetch(`${backUrl}/api/fighters`, requestOptions)
      .then((response) => response.json())
      .then((fightersList) => setFighter(fightersList))
      .then(() => {
        console.warn("fightersList", fighter);
      })
      .catch(() => {
        navigate("/dashboard");
      });
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const Created = () => {
    toast("Fighter created successfully", {
      icon: "👍",
    });
  };
  const Error = () => {
    toast("Error when create fighter try again", {
      icon: "👎",
    });
  };
  const ErrorAge = () => {
    toast("Age must be a number", {
      icon: "👎",
    });
  };
  const ErrorCategory = () => {
    toast("The age and the category does not match", {
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

    console.warn("sex", sex);
    console.warn("country", country);
    console.warn("category", category);
    console.warn("weightCat", weightCat);
    console.warn("age", age);

    if (!age.match(/^[0-9]+$/)) {
      ErrorAge();
      return;
    }
    // verify that the password is at least 8 characters long and contains at least one number and one letter (regex)
    if (
      (age >= 12 && age <= 14 && category !== "Cadet") ||
      (age >= 15 && age <= 17 && category !== "Junior") ||
      (age > 17 && category !== "Senior")
    ) {
      ErrorCategory();
      return;
    }
    // headers
    if (imgRef.current.files[0]) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const formData = new FormData();
      formData.append("img", imgRef.current.files[0]);
      formData.append("sex", sex);
      formData.append("country", country);
      formData.append("category", category);
      formData.append("weightCat", weightCat);
      formData.append("age", age);

      for (const [key, value] of formData.entries()) {
        console.warn(`${key}: ${value}`);
      }

      axios
        .put(`${backUrl}/api/fighters/${fighter.id}`, formData, config)
        .then((data) => {
          console.warn("Success:", data);
          Created();
          navigate("/Dashboard");
        })
        .catch((error) => {
          console.error("Error:", error);
          Error();
        });
    } else {
      NoFile();
    }
  };

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
              ADD FIGHTER
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
              <label htmlFor="img" className="form-label">
                {" "}
                Select image
              </label>
              <InputLabel htmlFor="fighter1">Your Fighter</InputLabel>
              <NativeSelect id="fighter1">
                <option value="">--choose--</option>
                {fighter.map((fighters1) => (
                  <option key={fighters1.id} value={fighters1.id}>
                    {fighters1.lastname} {fighters1.firstname}
                  </option>
                ))}
              </NativeSelect>
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
              <TextField
                onChange={(event) => setAge(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Age"
                name="password"
                id="password"
                autoComplete="password"
                autoFocus
              />
              <InputLabel htmlFor="category">Category</InputLabel>
              <NativeSelect
                onChange={(event) => setCategory(event.target.value)}
                id="category"
              >
                <option value="">--choose--</option>
                <option value="Cadet">Cadet</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </NativeSelect>
              <InputLabel htmlFor="sex">Sex</InputLabel>
              <NativeSelect
                onChange={(event) => setSex(event.target.value)}
                name="sex"
                id="sex"
              >
                <option value="">--choose--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </NativeSelect>

              <InputLabel htmlFor="WeightCat">Weight Category</InputLabel>
              <NativeSelect
                onChange={(event) => setWeightCat(event.target.value)}
                name="WeightCat"
                id="WeightCat"
              >
                <option value="">Select a Weight Category</option>
                {category === "Cadet" && sex === "Male" && (
                  <>
                    <option type="Cadet" value="-33">
                      under 33kg
                    </option>
                    <option type="Cadet" value="-37">
                      under 37kg
                    </option>
                    <option type="Cadet" value="-41">
                      under 42kg
                    </option>
                    <option type="Cadet" value="-45">
                      under 45kg
                    </option>
                    <option type="Cadet" value="-49">
                      under 48kg
                    </option>
                    <option type="Cadet" value="-53">
                      under 52kg
                    </option>
                    <option type="Cadet" value="-57">
                      under 57kg
                    </option>
                    <option type="Cadet" value="-61">
                      under 63kg
                    </option>
                    <option type="Cadet" value="-65">
                      under 68kg
                    </option>
                    <option type="Cadet" value="+65">
                      more than 68kg
                    </option>
                  </>
                )}
                {category === "Junior" && sex === "Male" && (
                  <>
                    <option type="Junior" value="-45">
                      under 45kg
                    </option>
                    <option type="Junior" value="-48">
                      under 48kg
                    </option>
                    <option type="Junior" value="-51">
                      under 51kg
                    </option>
                    <option type="Junior" value="-55">
                      under 55kg
                    </option>
                    <option type="Junior" value="-59">
                      under 59kg
                    </option>
                    <option type="Junior" value="-63">
                      under 63kg
                    </option>
                    <option type="Junior" value="-68">
                      under 68kg
                    </option>
                    <option type="Junior" value="-73">
                      under 73kg
                    </option>
                    <option type="Junior" value="-78">
                      under 78kg
                    </option>
                    <option type="Junior" value="+78">
                      more than 78kg
                    </option>
                  </>
                )}
                {category === "Senior" && sex === "Male" && (
                  <>
                    <option type="Senior" value="-54">
                      under 54kg
                    </option>
                    <option type="Senior" value="-58">
                      under 58kg
                    </option>
                    <option type="Senior" value="-63">
                      under 63kg
                    </option>
                    <option type="Senior" value="-68">
                      under 68kg
                    </option>
                    <option type="Senior" value="-74">
                      under 74kg
                    </option>
                    <option type="Senior" value="-80">
                      under 80kg
                    </option>
                    <option type="Senior" value="-88">
                      under 88kg
                    </option>
                    <option type="Senior" value="+88">
                      more than 88kg
                    </option>
                  </>
                )}
                {category === "Cadet" && sex === "Female" && (
                  <>
                    <option type="Cadet" value="-29">
                      under 29kg
                    </option>
                    <option type="Cadet" value="-33">
                      under 33kg
                    </option>
                    <option type="Cadet" value="-37">
                      under 37kg
                    </option>
                    <option type="Cadet" value="-41">
                      under 41kg
                    </option>
                    <option type="Cadet" value="-44">
                      under 44kg
                    </option>
                    <option type="Cadet" value="-47">
                      under 47kg
                    </option>
                    <option type="Cadet" value="-51">
                      under 51kg
                    </option>
                    <option type="Cadet" value="-55">
                      under 55kg
                    </option>
                    <option type="Cadet" value="-59">
                      under 59kg
                    </option>
                    <option type="Cadet" value="+59">
                      more than 59kg
                    </option>
                  </>
                )}
                {category === "Junior" && sex === "Female" && (
                  <>
                    <option type="Junior" value="-42">
                      under 42kg
                    </option>
                    <option type="Junior" value="-44">
                      under 44kg
                    </option>
                    <option type="Junior" value="-46">
                      under 46kg
                    </option>
                    <option type="Junior" value="-49">
                      under 49kg
                    </option>
                    <option type="Junior" value="-52">
                      under 52kg
                    </option>
                    <option type="Junior" value="-55">
                      under 55kg
                    </option>
                    <option type="Junior" value="-59">
                      under 59kg
                    </option>
                    <option type="Junior" value="-63">
                      under 63kg
                    </option>
                    <option type="Junior" value="-68">
                      under 68kg
                    </option>
                    <option type="Junior" value="+68">
                      more than 68kg
                    </option>
                  </>
                )}
                {category === "Senior" && sex === "Female" && (
                  <>
                    <option type="Senior" value="-46">
                      under 46kg
                    </option>
                    <option type="Senior" value="-49">
                      under 49kg
                    </option>
                    <option type="Senior" value="-53">
                      under 53kg
                    </option>
                    <option type="Senior" value="-57">
                      under 57kg
                    </option>
                    <option type="Senior" value="-62">
                      under 62kg
                    </option>
                    <option type="Senior" value="-67">
                      under 67kg
                    </option>
                    <option type="Senior" value="-73">
                      under 73kg
                    </option>
                    <option type="Senior" value="+73">
                      more than 73kg
                    </option>
                  </>
                )}
              </NativeSelect>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#890000", color: "white" }}
                type="submit"
              >
                Add Fighter
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
