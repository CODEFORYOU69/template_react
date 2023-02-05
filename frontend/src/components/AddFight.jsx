/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../context/userContext";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  // eslint-disable-next-line react/require-default-props
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function AddFight() {
  const backUrl = import.meta.env.VITE_BACKEND_URL;

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [fighter, setFighter] = useState([]);
  const [fighter1_id, setFighter1_id] = useState("");
  const [fighter2_id, setFighter2_id] = useState("");
  const [sex, setSex] = useState("");
  const [category, setCategory] = useState("");
  const [weightcat, setWeightcat] = useState("");
  const { token } = useCurrentUserContext();
  const [eventyear, setEventyear] = useState("");
  const [eventtype, setEventtype] = useState("");
  const [winner_id, setWinner_id] = useState("");
  const [eventname, setEventname] = useState("");
  const [att_og_1_by_fighter1, setAtt_og_1_by_fighter1] = useState(null);
  const [att_og_2_by_fighter1, setAtt_og_2_by_fighter1] = useState(null);
  const [att_og_3_by_fighter1, setAtt_og_3_by_fighter1] = useState(null);
  const [att_og_4_by_fighter1, setAtt_og_4_by_fighter1] = useState(null);
  const [att_og_5_by_fighter1, setAtt_og_5_by_fighter1] = useState(null);
  const [att_og_1_by_fighter2, setAtt_og_1_by_fighter2] = useState(null);
  const [att_og_2_by_fighter2, setAtt_og_2_by_fighter2] = useState(null);
  const [att_og_3_by_fighter2, setAtt_og_3_by_fighter2] = useState(null);
  const [att_og_4_by_fighter2, setAtt_og_4_by_fighter2] = useState(null);
  const [att_og_5_by_fighter2, setAtt_og_5_by_fighter2] = useState(null);
  const [att_od_1_by_fighter1, setAtt_od_1_by_fighter1] = useState(null);
  const [att_od_2_by_fighter1, setAtt_od_2_by_fighter1] = useState(null);
  const [att_od_3_by_fighter1, setAtt_od_3_by_fighter1] = useState(null);
  const [att_od_4_by_fighter1, setAtt_od_4_by_fighter1] = useState(null);
  const [att_od_5_by_fighter1, setAtt_od_5_by_fighter1] = useState(null);
  const [att_od_1_by_fighter2, setAtt_od_1_by_fighter2] = useState(null);
  const [att_od_2_by_fighter2, setAtt_od_2_by_fighter2] = useState(null);
  const [att_od_3_by_fighter2, setAtt_od_3_by_fighter2] = useState(null);
  const [att_od_4_by_fighter2, setAtt_od_4_by_fighter2] = useState(null);
  const [att_od_5_by_fighter2, setAtt_od_5_by_fighter2] = useState(null);
  const [att_fg_1_by_fighter1, setAtt_fg_1_by_fighter1] = useState(null);
  const [att_fg_2_by_fighter1, setAtt_fg_2_by_fighter1] = useState(null);
  const [att_fg_3_by_fighter1, setAtt_fg_3_by_fighter1] = useState(null);
  const [att_fg_4_by_fighter1, setAtt_fg_4_by_fighter1] = useState(null);
  const [att_fg_5_by_fighter1, setAtt_fg_5_by_fighter1] = useState(null);
  const [att_fg_1_by_fighter2, setAtt_fg_1_by_fighter2] = useState(null);
  const [att_fg_2_by_fighter2, setAtt_fg_2_by_fighter2] = useState(null);
  const [att_fg_3_by_fighter2, setAtt_fg_3_by_fighter2] = useState(null);
  const [att_fg_4_by_fighter2, setAtt_fg_4_by_fighter2] = useState(null);
  const [att_fg_5_by_fighter2, setAtt_fg_5_by_fighter2] = useState(null);
  const [att_fd_1_by_fighter1, setAtt_fd_1_by_fighter1] = useState(null);
  const [att_fd_2_by_fighter1, setAtt_fd_2_by_fighter1] = useState(null);
  const [att_fd_3_by_fighter1, setAtt_fd_3_by_fighter1] = useState(null);
  const [att_fd_4_by_fighter1, setAtt_fd_4_by_fighter1] = useState(null);
  const [att_fd_5_by_fighter1, setAtt_fd_5_by_fighter1] = useState(null);
  const [att_fd_1_by_fighter2, setAtt_fd_1_by_fighter2] = useState(null);
  const [att_fd_2_by_fighter2, setAtt_fd_2_by_fighter2] = useState(null);
  const [att_fd_3_by_fighter2, setAtt_fd_3_by_fighter2] = useState(null);
  const [att_fd_4_by_fighter2, setAtt_fd_4_by_fighter2] = useState(null);
  const [att_fd_5_by_fighter2, setAtt_fd_5_by_fighter2] = useState(null);
  const [def_og_1_by_fighter1, setDef_og_1_by_fighter1] = useState(null);
  const [def_og_2_by_fighter1, setDef_og_2_by_fighter1] = useState(null);
  const [def_og_3_by_fighter1, setDef_og_3_by_fighter1] = useState(null);
  const [def_og_4_by_fighter1, setDef_og_4_by_fighter1] = useState(null);
  const [def_og_5_by_fighter1, setDef_og_5_by_fighter1] = useState(null);
  const [def_og_1_by_fighter2, setDef_og_1_by_fighter2] = useState(null);
  const [def_og_2_by_fighter2, setDef_og_2_by_fighter2] = useState(null);
  const [def_og_3_by_fighter2, setDef_og_3_by_fighter2] = useState(null);
  const [def_og_4_by_fighter2, setDef_og_4_by_fighter2] = useState(null);
  const [def_og_5_by_fighter2, setDef_og_5_by_fighter2] = useState(null);
  const [def_od_1_by_fighter1, setDef_od_1_by_fighter1] = useState(null);
  const [def_od_2_by_fighter1, setDef_od_2_by_fighter1] = useState(null);
  const [def_od_3_by_fighter1, setDef_od_3_by_fighter1] = useState(null);
  const [def_od_4_by_fighter1, setDef_od_4_by_fighter1] = useState(null);
  const [def_od_5_by_fighter1, setDef_od_5_by_fighter1] = useState(null);
  const [def_od_1_by_fighter2, setDef_od_1_by_fighter2] = useState(null);
  const [def_od_2_by_fighter2, setDef_od_2_by_fighter2] = useState(null);
  const [def_od_3_by_fighter2, setDef_od_3_by_fighter2] = useState(null);
  const [def_od_4_by_fighter2, setDef_od_4_by_fighter2] = useState(null);
  const [def_od_5_by_fighter2, setDef_od_5_by_fighter2] = useState(null);
  const [def_fg_1_by_fighter1, setDef_fg_1_by_fighter1] = useState(null);
  const [def_fg_2_by_fighter1, setDef_fg_2_by_fighter1] = useState(null);
  const [def_fg_3_by_fighter1, setDef_fg_3_by_fighter1] = useState(null);
  const [def_fg_4_by_fighter1, setDef_fg_4_by_fighter1] = useState(null);
  const [def_fg_5_by_fighter1, setDef_fg_5_by_fighter1] = useState(null);
  const [def_fg_1_by_fighter2, setDef_fg_1_by_fighter2] = useState(null);
  const [def_fg_2_by_fighter2, setDef_fg_2_by_fighter2] = useState(null);
  const [def_fg_3_by_fighter2, setDef_fg_3_by_fighter2] = useState(null);
  const [def_fg_4_by_fighter2, setDef_fg_4_by_fighter2] = useState(null);
  const [def_fg_5_by_fighter2, setDef_fg_5_by_fighter2] = useState(null);
  const [def_fd_1_by_fighter1, setDef_fd_1_by_fighter1] = useState(null);
  const [def_fd_2_by_fighter1, setDef_fd_2_by_fighter1] = useState(null);
  const [def_fd_3_by_fighter1, setDef_fd_3_by_fighter1] = useState(null);
  const [def_fd_4_by_fighter1, setDef_fd_4_by_fighter1] = useState(null);
  const [def_fd_5_by_fighter1, setDef_fd_5_by_fighter1] = useState(null);
  const [def_fd_1_by_fighter2, setDef_fd_1_by_fighter2] = useState(null);
  const [def_fd_2_by_fighter2, setDef_fd_2_by_fighter2] = useState(null);
  const [def_fd_3_by_fighter2, setDef_fd_3_by_fighter2] = useState(null);
  const [def_fd_4_by_fighter2, setDef_fd_4_by_fighter2] = useState(null);
  const [def_fd_5_by_fighter2, setDef_fd_5_by_fighter2] = useState(null);
  const [cac_og_1_by_fighter1, setCac_og_1_by_fighter1] = useState(null);
  const [cac_og_2_by_fighter1, setCac_og_2_by_fighter1] = useState(null);
  const [cac_og_3_by_fighter1, setCac_og_3_by_fighter1] = useState(null);
  const [cac_og_4_by_fighter1, setCac_og_4_by_fighter1] = useState(null);
  const [cac_og_5_by_fighter1, setCac_og_5_by_fighter1] = useState(null);
  const [cac_og_1_by_fighter2, setCac_og_1_by_fighter2] = useState(null);
  const [cac_og_2_by_fighter2, setCac_og_2_by_fighter2] = useState(null);
  const [cac_og_3_by_fighter2, setCac_og_3_by_fighter2] = useState(null);
  const [cac_og_4_by_fighter2, setCac_og_4_by_fighter2] = useState(null);
  const [cac_og_5_by_fighter2, setCac_og_5_by_fighter2] = useState(null);
  const [cac_od_1_by_fighter1, setCac_od_1_by_fighter1] = useState(null);
  const [cac_od_2_by_fighter1, setCac_od_2_by_fighter1] = useState(null);
  const [cac_od_3_by_fighter1, setCac_od_3_by_fighter1] = useState(null);
  const [cac_od_4_by_fighter1, setCac_od_4_by_fighter1] = useState(null);
  const [cac_od_5_by_fighter1, setCac_od_5_by_fighter1] = useState(null);
  const [cac_od_1_by_fighter2, setCac_od_1_by_fighter2] = useState(null);
  const [cac_od_2_by_fighter2, setCac_od_2_by_fighter2] = useState(null);
  const [cac_od_3_by_fighter2, setCac_od_3_by_fighter2] = useState(null);
  const [cac_od_4_by_fighter2, setCac_od_4_by_fighter2] = useState(null);
  const [cac_od_5_by_fighter2, setCac_od_5_by_fighter2] = useState(null);
  const [cac_fg_1_by_fighter1, setCac_fg_1_by_fighter1] = useState(null);
  const [cac_fg_2_by_fighter1, setCac_fg_2_by_fighter1] = useState(null);
  const [cac_fg_3_by_fighter1, setCac_fg_3_by_fighter1] = useState(null);
  const [cac_fg_4_by_fighter1, setCac_fg_4_by_fighter1] = useState(null);
  const [cac_fg_5_by_fighter1, setCac_fg_5_by_fighter1] = useState(null);
  const [cac_fg_1_by_fighter2, setCac_fg_1_by_fighter2] = useState(null);
  const [cac_fg_2_by_fighter2, setCac_fg_2_by_fighter2] = useState(null);
  const [cac_fg_3_by_fighter2, setCac_fg_3_by_fighter2] = useState(null);
  const [cac_fg_4_by_fighter2, setCac_fg_4_by_fighter2] = useState(null);
  const [cac_fg_5_by_fighter2, setCac_fg_5_by_fighter2] = useState(null);
  const [cac_fd_1_by_fighter1, setCac_fd_1_by_fighter1] = useState(null);
  const [cac_fd_2_by_fighter1, setCac_fd_2_by_fighter1] = useState(null);
  const [cac_fd_3_by_fighter1, setCac_fd_3_by_fighter1] = useState(null);
  const [cac_fd_4_by_fighter1, setCac_fd_4_by_fighter1] = useState(null);
  const [cac_fd_5_by_fighter1, setCac_fd_5_by_fighter1] = useState(null);
  const [cac_fd_1_by_fighter2, setCac_fd_1_by_fighter2] = useState(null);
  const [cac_fd_2_by_fighter2, setCac_fd_2_by_fighter2] = useState(null);
  const [cac_fd_3_by_fighter2, setCac_fd_3_by_fighter2] = useState(null);
  const [cac_fd_4_by_fighter2, setCac_fd_4_by_fighter2] = useState(null);
  const [cac_fd_5_by_fighter2, setCac_fd_5_by_fighter2] = useState(null);
  const [gj_by_fighter1, setGj_by_fighter1] = useState(null);
  const [gj_by_fighter2, setGj_by_fighter2] = useState(null);

  const Created = () => {
    toast("Data Fight created successfully", {
      icon: "👍",
    });
  };

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
  console.warn("fighter 2 id", fighter2_id.id);
  console.warn("fighter 1 id", fighter1_id.id);
  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers({
      Authorization: `Bearer ${token}`,
    });
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      weightcat,
      category,
      eventtype,
      eventname,
      eventyear,
      att_og_1_by_fighter1,
      att_og_2_by_fighter1,
      att_og_3_by_fighter1,
      att_og_4_by_fighter1,
      att_og_5_by_fighter1,
      att_og_1_by_fighter2,
      att_og_2_by_fighter2,
      att_og_3_by_fighter2,
      att_og_4_by_fighter2,
      att_og_5_by_fighter2,
      att_od_1_by_fighter1,
      att_od_2_by_fighter1,
      att_od_3_by_fighter1,
      att_od_4_by_fighter1,
      att_od_5_by_fighter1,
      att_od_1_by_fighter2,
      att_od_2_by_fighter2,
      att_od_3_by_fighter2,
      att_od_4_by_fighter2,
      att_od_5_by_fighter2,
      att_fg_1_by_fighter1,
      att_fg_2_by_fighter1,
      att_fg_3_by_fighter1,
      att_fg_4_by_fighter1,
      att_fg_5_by_fighter1,
      att_fg_1_by_fighter2,
      att_fg_2_by_fighter2,
      att_fg_3_by_fighter2,
      att_fg_4_by_fighter2,
      att_fg_5_by_fighter2,
      att_fd_1_by_fighter1,
      att_fd_2_by_fighter1,
      att_fd_3_by_fighter1,
      att_fd_4_by_fighter1,
      att_fd_5_by_fighter1,
      att_fd_1_by_fighter2,
      att_fd_2_by_fighter2,
      att_fd_3_by_fighter2,
      att_fd_4_by_fighter2,
      att_fd_5_by_fighter2,
      def_og_1_by_fighter1,
      def_og_2_by_fighter1,
      def_og_3_by_fighter1,
      def_og_4_by_fighter1,
      def_og_5_by_fighter1,
      def_og_1_by_fighter2,
      def_og_2_by_fighter2,
      def_og_3_by_fighter2,
      def_og_4_by_fighter2,
      def_og_5_by_fighter2,
      def_od_1_by_fighter1,
      def_od_2_by_fighter1,
      def_od_3_by_fighter1,
      def_od_4_by_fighter1,
      def_od_5_by_fighter1,
      def_od_1_by_fighter2,
      def_od_2_by_fighter2,
      def_od_3_by_fighter2,
      def_od_4_by_fighter2,
      def_od_5_by_fighter2,
      def_fg_1_by_fighter1,
      def_fg_2_by_fighter1,
      def_fg_3_by_fighter1,
      def_fg_4_by_fighter1,
      def_fg_5_by_fighter1,
      def_fg_1_by_fighter2,
      def_fg_2_by_fighter2,
      def_fg_3_by_fighter2,
      def_fg_4_by_fighter2,
      def_fg_5_by_fighter2,
      def_fd_1_by_fighter1,
      def_fd_2_by_fighter1,
      def_fd_3_by_fighter1,
      def_fd_4_by_fighter1,
      def_fd_5_by_fighter1,
      def_fd_1_by_fighter2,
      def_fd_2_by_fighter2,
      def_fd_3_by_fighter2,
      def_fd_4_by_fighter2,
      def_fd_5_by_fighter2,
      cac_og_1_by_fighter1,
      cac_og_2_by_fighter1,
      cac_og_3_by_fighter1,
      cac_og_4_by_fighter1,
      cac_og_5_by_fighter1,
      cac_og_1_by_fighter2,
      cac_og_2_by_fighter2,
      cac_og_3_by_fighter2,
      cac_og_4_by_fighter2,
      cac_og_5_by_fighter2,
      cac_od_1_by_fighter1,
      cac_od_2_by_fighter1,
      cac_od_3_by_fighter1,
      cac_od_4_by_fighter1,
      cac_od_5_by_fighter1,
      cac_od_1_by_fighter2,
      cac_od_2_by_fighter2,
      cac_od_3_by_fighter2,
      cac_od_4_by_fighter2,
      cac_od_5_by_fighter2,
      cac_fg_1_by_fighter1,
      cac_fg_2_by_fighter1,
      cac_fg_3_by_fighter1,
      cac_fg_4_by_fighter1,
      cac_fg_5_by_fighter1,
      cac_fg_1_by_fighter2,
      cac_fg_2_by_fighter2,
      cac_fg_3_by_fighter2,
      cac_fg_4_by_fighter2,
      cac_fg_5_by_fighter2,
      cac_fd_1_by_fighter1,
      cac_fd_2_by_fighter1,
      cac_fd_3_by_fighter1,
      cac_fd_4_by_fighter1,
      cac_fd_5_by_fighter1,
      cac_fd_1_by_fighter2,
      cac_fd_2_by_fighter2,
      cac_fd_3_by_fighter2,
      cac_fd_4_by_fighter2,
      cac_fd_5_by_fighter2,
      gj_by_fighter1,
      gj_by_fighter2,
      fighter1_id,
      fighter2_id,
      winner_id,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    // send the data to the backend

    fetch(`${backUrl}/api/fights`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.warn("Success:", data);
        Created();
      })

      .catch((error) => {
        console.error("Error:", error);
        Error();
      });
  };
  console.warn("fetchfighter", fighter);

  return (
    <div className="">
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>
      <ThemeProvider theme={darkTheme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 20,
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
              ADD FIGHT
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <InputLabel htmlFor="fighter1">Your Fighter</InputLabel>
              <NativeSelect
                onChange={(event) => setFighter1_id(event.target.value)}
                id="fighter1"
              >
                <option value="">--choose--</option>
                {fighter.map((fighters1) => (
                  <option key={fighters1.id} value={fighters1.id}>
                    {fighters1.lastname} {fighters1.firstname}
                  </option>
                ))}
              </NativeSelect>
              <InputLabel htmlFor="category">Fighter 2</InputLabel>
              <NativeSelect
                onChange={(event) => setFighter2_id(event.target.value)}
                id="fighter2"
              >
                {fighter.map((fighters1) => (
                  <option key={fighters1.id} value={fighters1.id}>
                    {fighters1.lastname} {fighters1.firstname}
                  </option>
                ))}
              </NativeSelect>
              <TextField
                onChange={(event) => setEventyear(event.target.value)}
                margin="normal"
                required
                label="Year"
                name="year"
                id="password"
                autoFocus
              />
              <InputLabel htmlFor="category">Type of Event</InputLabel>
              <NativeSelect
                onChange={(event) => setEventtype(event.target.value)}
                id="Type"
              >
                <option value="">--choose--</option>
                <option value="G1">G1</option>
                <option value="G2">G2</option>
                <option value="World Cup">World Cup</option>
                <option value="European Championship">
                  European Championship
                </option>
                <option value="National Championship">
                  National Championship
                </option>
                <option value="Open">Open</option>
              </NativeSelect>
              <TextField
                onChange={(event) => setEventname(event.target.value)}
                margin="normal"
                required
                label="Name Event"
                name="NameEvent"
                id="NameEvent"
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
                onChange={(event) => setWeightcat(event.target.value)}
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
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(1, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1" }}>SITUATION</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1" }}>POINTS</Item>
                <Item sx={{ gridColumn: "7/15", gridRow: "1" }}>GARDE</Item>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(1, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1" }}>Menu</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1" }}>Menu</Item>
                <Item sx={{ gridColumn: "7/9", gridRow: "1" }}>Open left</Item>
                <Item sx={{ gridColumn: "9/11", gridRow: "1" }}>
                  open right
                </Item>
                <Item sx={{ gridColumn: "11/13", gridRow: "1" }}>
                  Close left
                </Item>
                <Item sx={{ gridColumn: "13/15", gridRow: "1" }}>
                  Close right
                </Item>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(1, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1" }}>Menu</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1" }}>Menu</Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "1" }}>B</Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "1" }}>R</Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "1" }}>B</Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "1" }}>R</Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "1" }}>B</Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "1" }}>R</Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "1" }}>B</Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "1" }}>R</Item>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(6, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1/6" }}>ATTAQUE</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1/2" }}>1 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "2/3" }}>2 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "3/4" }}>3 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "4/5" }}>4 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "5/6" }}>5 POINT</Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "2/3" }}>
                  <TextField
                    onChange={(event) =>
                      setAtt_og_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "3/4" }}>
                  <TextField
                    onChange={(event) =>
                      setAtt_og_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_og_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_od_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fg_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setAtt_fd_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(6, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1/6" }}>DEFENSE</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1/2" }}>1 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "2/3" }}>2 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "3/4" }}>3 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "4/5" }}>4 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "5/6" }}>5 POINT</Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "2/3" }}>
                  <TextField
                    onChange={(event) =>
                      setDef_og_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "3/4" }}>
                  <TextField
                    onChange={(event) =>
                      setDef_og_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_og_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_od_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fg_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setDef_fd_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(6, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1/6" }}>
                  INFIGHTING
                </Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1/2" }}>1 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "2/3" }}>2 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "3/4" }}>3 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "4/5" }}>4 POINT</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "5/6" }}>5 POINT</Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "2/3" }}>
                  <TextField
                    onChange={(event) =>
                      setCac_og_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "3/4" }}>
                  <TextField
                    onChange={(event) =>
                      setCac_og_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "7/8", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "8/9", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_og_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "9/10", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "10/11", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_od_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/12", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "12/13", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fg_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_1_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_2_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_3_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_4_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "13/14", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_5_by_fighter1(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "1/2" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_1_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "2/3" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_2_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "3/4" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_3_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "4/5" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_4_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "14/15", gridRow: "5/6" }}>
                  {" "}
                  <TextField
                    onChange={(event) =>
                      setCac_fd_5_by_fighter2(event.target.value)
                    }
                    margin="small"
                    label="AOR"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: "row",
                  gridTemplateColumns: "repeat(14, 1fr)",
                  gridTemplateRows: "repeat(1, 1fr)",
                }}
              >
                <Item sx={{ gridColumn: "1/4", gridRow: "1" }}>GAMJEON</Item>
                <Item sx={{ gridColumn: "4/7", gridRow: "1" }}>-1 POINT</Item>
                <Item sx={{ gridColumn: "7/11", gridRow: "1" }}>
                  <TextField
                    onChange={(event) => setGj_by_fighter1(event.target.value)}
                    margin="small"
                    label="BLUE"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
                <Item sx={{ gridColumn: "11/15", gridRow: "1" }}>
                  <TextField
                    onChange={(event) => setGj_by_fighter2(event.target.value)}
                    margin="small"
                    label="RED"
                    name="AOR"
                    id="password"
                    autoFocus
                  />
                </Item>
              </Box>
              <NativeSelect
                onChange={(event) => setWinner_id(event.target.value)}
                sx={{ width: "100%" }}
              >
                <option value="">Select Winner</option>
                <option value="1">Blue</option>
                <option value="2">Red</option>
              </NativeSelect>
              <Button type="submit" variant="contained" color="primary">
                Submit Fight
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
