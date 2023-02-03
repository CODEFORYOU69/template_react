import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../context/userContext";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setUser } = useCurrentUserContext();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDisconnection = () => {
    // gestion de la deconnexion
    localStorage.clear();
    setUser({});
    navigate("/");
  };
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SportsMartialArtsIcon />
        </IconButton>
        <Typography
          onClick={() => {
            navigate("/");
          }}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          DATA FIGHT
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            color="inherit"
          >
            LOGIN
          </Button>
          <Button
            onClick={() => {
              navigate("/addFighter");
            }}
            color="inherit"
          >
            ADD FIGHTER
          </Button>
          <Button
            onClick={() => {
              navigate("/fighters");
            }}
            color="inherit"
          >
            FIGHTERS
          </Button>
          <Button
            onClick={() => {
              navigate("/addFight");
            }}
            color="inherit"
          >
            ADD FIGHT
          </Button>
          <Button
            onClick={() => {
              navigate("/dashboard");
            }}
            color="inherit"
          >
            DASHBOARD
          </Button>
          <Button
            color="inherit"
            id="resources-button"
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
          >
            Resources
          </Button>
          <Button onClick={handleDisconnection} color="inherit">
            LOG OUT
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.youtube.com/@worldtaekwondo"
              target="_blank"
              rel="noreferrer"
            >
              World TKD Youtube
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.taekwondodata.com/"
              target="_blank"
              rel="noreferrer"
            >
              Taekwondo data
            </a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
