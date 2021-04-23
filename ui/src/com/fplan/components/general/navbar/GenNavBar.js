import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../../../../../../src/index.css";
import Link from "@material-ui/core/Link";
import Sign from "../../ui/Sign";
import Grid from "@material-ui/core/Grid";
import HomeImage from "../../ui/HomeImage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Lobster",
  },
  headings: {
    fontSize: "1.2rem",
    width: "7%",
    fontFamily: "Proza Libre",
  },
}));

export default function GenNavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          background: "transparent",
        }}
      >
        <Grid item xs={12}>
          <AppBar
            position="fixed"
            style={{
              backgroundColor: "white",
            }}
          >
            <Toolbar style={{ width: "auto", height: "auto" }}>
              <div
                style={{
                  width: "2%",
                }}
              ></div>
              <div style={{ width: "auto" }}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  style={{ textAlign: "left" }}
                >
                  <Link href="/" style={{ color: "#FF3300" }}>
                    Dream Cast
                  </Link>
                </Typography>
              </div>
              <div
                style={{
                  height: "auto",
                  width: "50px",
                }}
              >
                <HomeImage />
              </div>

              <div style={{ width: "35%" }}></div>
              <div className={classes.headings}>
                <Link
                  href="/"
                  style={{ color: "#ED5138" }}
                  className={classes.headings}
                >
                  Home
                </Link>
              </div>
              <div className={classes.headings}>
                <Link href="/" style={{ color: "#ED5138" }}>
                  Search Talent
                </Link>
              </div>
              <div className={classes.headings}>
                <Link href="/" style={{ color: "#ED5138" }}>
                  Studios
                </Link>
              </div>
              <div style={{ width: "10%" }} className={classes.headings}>
                <Link href="/" style={{ color: "#ED5138" }}>
                  Make your movie
                </Link>
              </div>
              <div style={{ width: "7%" }}>
                <Sign signInNav={props.signInNav} action={"signin"}></Sign>
              </div>
              <div style={{ width: "auto" }}>
                <Sign signUpNav={props.signUpNav} action={"signup"}></Sign>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}
