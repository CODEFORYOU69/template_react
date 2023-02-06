import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import NativeSelect from "@mui/material/NativeSelect";
// import InputLabel from "@mui/material/InputLabel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import Item from "@mui/material/Grid";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
// import { useNavigate } from "react-router-dom";
// import isConnected from "../services/isConnected";
// import { useCurrentUserContext } from "../context/userContext";

const backUrl = import.meta.env.VITE_BACKEND_URL;

function RadarChartFight() {
  const [data, setData] = useState([]);
  // const [sex, setSex] = useState("");
  // const [category, setCategory] = useState("");
  // const [fighter1_id, setFighter1_id] = useState([]);
  // const [weightcat, setWeightcat] = useState("");
  // const [setYear] = useState("");
  // const [eventyear, setEventyear] = useState("");
  // const [eventtype, setEventtype] = useState("");
  // const [eventname, setEventname] = useState("");
  // const [fighter, setFighter] = useState([]);
  // const { token } = useCurrentUserContext();

  // const Navigate = useNavigate();

  // useEffect(() => {
  //   // recupération des articles.
  //   const myHeader = new Headers();
  //   myHeader.append("Authorization", `Bearer ${token}`);

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeader,
  //   };

  //   fetch(`${backUrl}/api/fighters`, requestOptions)
  //     .then((response) => {
  //       if (!isConnected(response)) localStorage.clear();
  //       Navigate("/login");
  //       return response.json();
  //     })
  //     .then((fightersList) => setFighter(fightersList))
  //     .then(() => {
  //       console.warn("fightersList", fighter);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    fetch(`${backUrl}/api/fights/`)
      .then((response) => response.json())
      .then((fightresults) => setData(fightresults));
  }, []);
  console.warn(data);

  // const averageCac = data.map(
  //   (d) =>
  //     (d.cac_fd_1_by_fighter1 +
  //       d.cac_fd_2_by_fighter1 +
  //       d.cac_fd_3_by_fighter1 +
  //       d.cac_fd_4_by_fighter1 +
  //       d.cac_fd_5_by_fighter1 +
  //       d.cac_fg_1_by_fighter1 +
  //       d.cac_fg_2_by_fighter1 +
  //       d.cac_fg_3_by_fighter1 +
  //       d.cac_fg_4_by_fighter1 +
  //       d.cac_fg_5_by_fighter1 +
  //       d.cac_og_1_by_fighter1 +
  //       d.cac_og_2_by_fighter1 +
  //       d.cac_og_3_by_fighter1 +
  //       d.cac_og_4_by_fighter1 +
  //       d.cac_og_5_by_fighter1 +
  //       d.cac_od_1_by_fighter1 +
  //       d.cac_od_2_by_fighter1 +
  //       d.cac_od_3_by_fighter1 +
  //       d.cac_od_4_by_fighter1 +
  //       d.cac_od_5_by_fighter1) /
  //     20
  // );
  // console.warn("AVERAGE", averageCac);
  // const Data1 = data.map(
  //   (d) => (
  //     {
  //       subject: "cac",
  //       C1:
  //         (d.cac_fd_1_by_fighter1 +
  //           d.cac_fd_2_by_fighter1 +
  //           d.cac_fd_3_by_fighter1 +
  //           d.cac_fd_4_by_fighter1 +
  //           d.cac_fd_5_by_fighter1 +
  //           d.cac_fg_1_by_fighter1 +
  //           d.cac_fg_2_by_fighter1 +
  //           d.cac_fg_3_by_fighter1 +
  //           d.cac_fg_4_by_fighter1 +
  //           d.cac_fg_5_by_fighter1 +
  //           d.cac_og_1_by_fighter1 +
  //           d.cac_og_2_by_fighter1 +
  //           d.cac_og_3_by_fighter1 +
  //           d.cac_og_4_by_fighter1 +
  //           d.cac_og_5_by_fighter1 +
  //           d.cac_od_1_by_fighter1 +
  //           d.cac_od_2_by_fighter1 +
  //           d.cac_od_3_by_fighter1 +
  //           d.cac_od_4_by_fighter1 +
  //           d.cac_od_5_by_fighter1) /
  //         20,
  //     },
  //     {
  //       subject: "att",
  //       A1:
  //         (d.att_fd_1_by_fighter1 +
  //           d.att_fd_2_by_fighter1 +
  //           d.att_fd_3_by_fighter1 +
  //           d.att_fd_4_by_fighter1 +
  //           d.att_fd_5_by_fighter1 +
  //           d.att_fg_1_by_fighter1 +
  //           d.att_fg_2_by_fighter1 +
  //           d.att_fg_3_by_fighter1 +
  //           d.att_fg_4_by_fighter1 +
  //           d.att_fg_5_by_fighter1 +
  //           d.att_og_1_by_fighter1 +
  //           d.att_og_2_by_fighter1 +
  //           d.att_og_3_by_fighter1 +
  //           d.att_og_4_by_fighter1 +
  //           d.att_og_5_by_fighter1 +
  //           d.att_od_1_by_fighter1 +
  //           d.att_od_2_by_fighter1 +
  //           d.att_od_3_by_fighter1 +
  //           d.att_od_4_by_fighter1 +
  //           d.att_od_5_by_fighter1) /
  //         20,
  //     },
  //     {
  //       subject: "def",
  //       D1:
  //         (d.def_fd_1_by_fighter1 +
  //           d.def_fd_2_by_fighter1 +
  //           d.def_fd_3_by_fighter1 +
  //           d.def_fd_4_by_fighter1 +
  //           d.def_fd_5_by_fighter1 +
  //           d.def_fg_1_by_fighter1 +
  //           d.def_fg_2_by_fighter1 +
  //           d.def_fg_3_by_fighter1 +
  //           d.def_fg_4_by_fighter1 +
  //           d.def_fg_5_by_fighter1 +
  //           d.def_og_1_by_fighter1 +
  //           d.def_og_2_by_fighter1 +
  //           d.def_og_3_by_fighter1 +
  //           d.def_og_4_by_fighter1 +
  //           d.def_og_5_by_fighter1 +
  //           d.def_od_1_by_fighter1 +
  //           d.def_od_2_by_fighter1 +
  //           d.def_od_3_by_fighter1 +
  //           d.def_od_4_by_fighter1 +
  //           d.def_od_5_by_fighter1) /
  //         20,
  //     },
  //     {
  //       subject: "cac",
  //       C2:
  //         (d.cac_fd_1_by_fighter2 +
  //           d.cac_fd_2_by_fighter2 +
  //           d.cac_fd_3_by_fighter2 +
  //           d.cac_fd_4_by_fighter2 +
  //           d.cac_fd_5_by_fighter2 +
  //           d.cac_fg_1_by_fighter2 +
  //           d.cac_fg_2_by_fighter2 +
  //           d.cac_fg_3_by_fighter2 +
  //           d.cac_fg_4_by_fighter2 +
  //           d.cac_fg_5_by_fighter2 +
  //           d.cac_og_1_by_fighter2 +
  //           d.cac_og_2_by_fighter2 +
  //           d.cac_og_3_by_fighter2 +
  //           d.cac_og_4_by_fighter2 +
  //           d.cac_og_5_by_fighter2 +
  //           d.cac_od_1_by_fighter2 +
  //           d.cac_od_2_by_fighter2 +
  //           d.cac_od_3_by_fighter2 +
  //           d.cac_od_4_by_fighter2 +
  //           d.cac_od_5_by_fighter2) /
  //         20,
  //     },
  //     {
  //       subject: "att",
  //       A2:
  //         (d.att_fd_1_by_fighter2 +
  //           d.att_fd_2_by_fighter2 +
  //           d.att_fd_3_by_fighter2 +
  //           d.att_fd_4_by_fighter2 +
  //           d.att_fd_5_by_fighter2 +
  //           d.att_fg_1_by_fighter2 +
  //           d.att_fg_2_by_fighter2 +
  //           d.att_fg_3_by_fighter2 +
  //           d.att_fg_4_by_fighter2 +
  //           d.att_fg_5_by_fighter2 +
  //           d.att_og_1_by_fighter2 +
  //           d.att_og_2_by_fighter2 +
  //           d.att_og_3_by_fighter2 +
  //           d.att_og_4_by_fighter2 +
  //           d.att_og_5_by_fighter2 +
  //           d.att_od_1_by_fighter2 +
  //           d.att_od_2_by_fighter2 +
  //           d.att_od_3_by_fighter2 +
  //           d.att_od_4_by_fighter2 +
  //           d.att_od_5_by_fighter2) /
  //         20,
  //     },
  //     {
  //       subject: "def",
  //       D2:
  //         (d.def_fd_1_by_fighter2 +
  //           d.def_fd_2_by_fighter2 +
  //           d.def_fd_3_by_fighter2 +
  //           d.def_fd_4_by_fighter2 +
  //           d.def_fd_5_by_fighter2 +
  //           d.def_fg_1_by_fighter2 +
  //           d.def_fg_2_by_fighter2 +
  //           d.def_fg_3_by_fighter2 +
  //           d.def_fg_4_by_fighter2 +
  //           d.def_fg_5_by_fighter2 +
  //           d.def_og_1_by_fighter2 +
  //           d.def_og_2_by_fighter2 +
  //           d.def_og_3_by_fighter2 +
  //           d.def_og_4_by_fighter2 +
  //           d.def_og_5_by_fighter2 +
  //           d.def_od_1_by_fighter2 +
  //           d.def_od_2_by_fighter2 +
  //           d.def_od_3_by_fighter2 +
  //           d.def_od_4_by_fighter2 +
  //           d.def_od_5_by_fighter2) /
  //         20,
  //     }
  //   )
  // );
  // console.warn(Data1);
  // const attData1 = data.map((d) => ({
  //   subject: "att",
  //   A1:
  //     (d.att_fd_1_by_fighter1 +
  //       d.att_fd_2_by_fighter1 +
  //       d.att_fd_3_by_fighter1 +
  //       d.att_fd_4_by_fighter1 +
  //       d.att_fd_5_by_fighter1 +
  //       d.att_fg_1_by_fighter1 +
  //       d.att_fg_2_by_fighter1 +
  //       d.att_fg_3_by_fighter1 +
  //       d.att_fg_4_by_fighter1 +
  //       d.att_fg_5_by_fighter1 +
  //       d.att_og_1_by_fighter1 +
  //       d.att_og_2_by_fighter1 +
  //       d.att_og_3_by_fighter1 +
  //       d.att_og_4_by_fighter1 +
  //       d.att_og_5_by_fighter1 +
  //       d.att_od_1_by_fighter1 +
  //       d.att_od_2_by_fighter1 +
  //       d.att_od_3_by_fighter1 +
  //       d.att_od_4_by_fighter1 +
  //       d.att_od_5_by_fighter1) /
  //     20,
  // }));
  // const defData1 = data.map((d) => ({
  //   subject: "def",
  //   D1:
  //     (d.def_fd_1_by_fighter1 +
  //       d.def_fd_2_by_fighter1 +
  //       d.def_fd_3_by_fighter1 +
  //       d.def_fd_4_by_fighter1 +
  //       d.def_fd_5_by_fighter1 +
  //       d.def_fg_1_by_fighter1 +
  //       d.def_fg_2_by_fighter1 +
  //       d.def_fg_3_by_fighter1 +
  //       d.def_fg_4_by_fighter1 +
  //       d.def_fg_5_by_fighter1 +
  //       d.def_og_1_by_fighter1 +
  //       d.def_og_2_by_fighter1 +
  //       d.def_og_3_by_fighter1 +
  //       d.def_og_4_by_fighter1 +
  //       d.def_og_5_by_fighter1 +
  //       d.def_od_1_by_fighter1 +
  //       d.def_od_2_by_fighter1 +
  //       d.def_od_3_by_fighter1 +
  //       d.def_od_4_by_fighter1 +
  //       d.def_od_5_by_fighter1) /
  //     20,
  // }));
  // const cacData2 = data.map((d) => ({
  //   subject: "cac",
  //   C2:
  //     (d.cac_fd_1_by_fighter2 +
  //       d.cac_fd_2_by_fighter2 +
  //       d.cac_fd_3_by_fighter2 +
  //       d.cac_fd_4_by_fighter2 +
  //       d.cac_fd_5_by_fighter2 +
  //       d.cac_fg_1_by_fighter2 +
  //       d.cac_fg_2_by_fighter2 +
  //       d.cac_fg_3_by_fighter2 +
  //       d.cac_fg_4_by_fighter2 +
  //       d.cac_fg_5_by_fighter2 +
  //       d.cac_og_1_by_fighter2 +
  //       d.cac_og_2_by_fighter2 +
  //       d.cac_og_3_by_fighter2 +
  //       d.cac_og_4_by_fighter2 +
  //       d.cac_og_5_by_fighter2 +
  //       d.cac_od_1_by_fighter2 +
  //       d.cac_od_2_by_fighter2 +
  //       d.cac_od_3_by_fighter2 +
  //       d.cac_od_4_by_fighter2 +
  //       d.cac_od_5_by_fighter2) /
  //     20,
  // }));
  // const attData2 = data.map((d) => ({
  //   subject: "att",
  //   A2:
  //     (d.att_fd_1_by_fighter2 +
  //       d.att_fd_2_by_fighter2 +
  //       d.att_fd_3_by_fighter2 +
  //       d.att_fd_4_by_fighter2 +
  //       d.att_fd_5_by_fighter2 +
  //       d.att_fg_1_by_fighter2 +
  //       d.att_fg_2_by_fighter2 +
  //       d.att_fg_3_by_fighter2 +
  //       d.att_fg_4_by_fighter2 +
  //       d.att_fg_5_by_fighter2 +
  //       d.att_og_1_by_fighter2 +
  //       d.att_og_2_by_fighter2 +
  //       d.att_og_3_by_fighter2 +
  //       d.att_og_4_by_fighter2 +
  //       d.att_og_5_by_fighter2 +
  //       d.att_od_1_by_fighter2 +
  //       d.att_od_2_by_fighter2 +
  //       d.att_od_3_by_fighter2 +
  //       d.att_od_4_by_fighter2 +
  //       d.att_od_5_by_fighter2) /
  //     20,
  // }));
  // const defData2 = data.map((d) => ({
  //   subject: "def",
  //   D2:
  //     (d.def_fd_1_by_fighter2 +
  //       d.def_fd_2_by_fighter2 +
  //       d.def_fd_3_by_fighter2 +
  //       d.def_fd_4_by_fighter2 +
  //       d.def_fd_5_by_fighter2 +
  //       d.def_fg_1_by_fighter2 +
  //       d.def_fg_2_by_fighter2 +
  //       d.def_fg_3_by_fighter2 +
  //       d.def_fg_4_by_fighter2 +
  //       d.def_fg_5_by_fighter2 +
  //       d.def_og_1_by_fighter2 +
  //       d.def_og_2_by_fighter2 +
  //       d.def_og_3_by_fighter2 +
  //       d.def_og_4_by_fighter2 +
  //       d.def_og_5_by_fighter2 +
  //       d.def_od_1_by_fighter2 +
  //       d.def_od_2_by_fighter2 +
  //       d.def_od_3_by_fighter2 +
  //       d.def_od_4_by_fighter2 +
  //       d.def_od_5_by_fighter2) /
  //     20,
  // }));

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
              DATA ALL FIGHTS
            </Typography>

            {/* <Box
              sx={{
                display: "grid",
                columnGap: 1,
                rowGap: 2,
                gridTemplateColumns: "repeat(1, 1fr)",
              }}
            >
              <Item>
                <InputLabel className=" mt-1" htmlFor="fighter1">
                  Your Fighter
                </InputLabel>
                <NativeSelect
                  onChange={(event) => setFighter1_id(event.target.value)}
                  id="fighter1"
                  className=" mt-1"
                >
                  <option value="">--choose--</option>
                  {fighter.map((fighters1) => (
                    <option key={fighters1.id} value={fighters1.id}>
                      {fighters1.lastname} {fighters1.firstname}
                    </option>
                  ))}
                </NativeSelect>
              </Item>
              <Item>
                <TextField
                  onChange={(event) => setEventyear(event.target.value)}
                  margin="normal"
                  required
                  label="Year"
                  name="year"
                  id="password"
                  autoFocus
                />
              </Item>
              <Item>
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
              </Item>
              <Item>
                {" "}
                <TextField
                  onChange={(event) => setEventname(event.target.value)}
                  margin="normal"
                  required
                  label="Name Event"
                  name="NameEvent"
                  id="NameEvent"
                  autoFocus
                />
              </Item>
              <Item>
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
              </Item>
              <Item>
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
              </Item>
              <Item>
                {" "}
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
              </Item>
            </Box> */}
            <div>
              <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={600}
                height={500}
                data={data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Fighter 1"
                  dataKey="D1"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Fighter 2"
                  dataKey="D2"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default RadarChartFight;
