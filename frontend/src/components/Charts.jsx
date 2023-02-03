import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const backUrl = import.meta.env.VITE_BACKEND_URL;

function RadarChartFight() {
  const [data, setData] = useState([]);
  const [setYear] = useState("");

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
              FILTER FIGHTS
            </Typography>
            <InputLabel htmlFor="fighter1">Year</InputLabel>
            <NativeSelect
              onChange={(event) => setYear(event.target.value)}
              id="Year"
            >
              <option value="">--choose--</option>
              {data.map((years) => (
                <option key={years.id} value={years.eventyear}>
                  {years.eventyear}
                </option>
              ))}
            </NativeSelect>
            {/* <InputLabel htmlFor="fighter1">Your Fighter</InputLabel>
            <NativeSelect
              onChange={(event) => setFighter1_id(event.target.value)}
              id="fighter1"
            >
              <option value="">--choose--</option>
              {fighter.map((fighters1) => (
                <option key={fighters1.id} value={fighters1.id}>
                  {fighters1.lastname} {fighters1.firstname}
                </option> */}
            {/* ))}
            </NativeSelect> */}
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
