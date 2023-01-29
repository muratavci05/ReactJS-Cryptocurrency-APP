import React from "react";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Typography,
  Container,
  Toolbar,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CryptoState } from "../CryptoContext.jsx";
import AuthModal from "./Authentication/AuthModal.jsx";
import UserSidebar from "./Authentication/UserSidebar.jsx";
import Marquee from "react-fast-marquee";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currency, setCurrency, user } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
              variant="h6"
            >
              Cryptocurrency APP
              <Marquee
              gradientColor={[]}
              
                style={{
                  backgroundColor: "transparent",
                  color: "gray",
                  paddingLeft: "280px",
                  paddingRight: "200px",
                }}
              >
                <h6>&nbsp;Current Cryptocurrency Tracking &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp; Güncel Kripto Para Takibi &nbsp;&nbsp;</h6>
              </Marquee>
            </Typography>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simle-select"
              value={currency}
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"TRY"}>TRY</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
