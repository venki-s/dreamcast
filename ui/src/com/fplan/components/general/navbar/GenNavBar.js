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
    fontSize: "2.5rem",
  },
  headings: {
    fontSize: "1rem",
    display: "inline-block",
    fontFamily: "Proza Libre",
    marginLeft: "1px",
    marginRight: "1px",
    //border: "1px solid red",
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
                  <Link href="/" style={{ color: "#ED5138" }}>
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

              <div style={{ width: "19%" }}></div>
              <div className={classes.headings} style={{ width: "5%" }}>
                <Link href="/" style={{ color: "#FF5722" }}>
                  Home
                </Link>
              </div>
              <div className={classes.headings} style={{ width: "8%" }}>
                <Link href="/" style={{ color: "#FF5722" }}>
                  Search Talent
                </Link>
              </div>
              <div className={classes.headings} style={{ width: "8%" }}>
                <Link href="/" style={{ color: "#FF5722" }}>
                  Short Movies
                </Link>
              </div>
              <div className={classes.headings} style={{ width: "5%" }}>
                <Link href="/" style={{ color: "#FF5722" }}>
                  Studios
                </Link>
              </div>
              <div style={{ width: "10%" }} className={classes.headings}>
                <Link href="/" style={{ color: "#FF5722" }}>
                  Make your movie
                </Link>
              </div>
              <div style={{ width: "8%" }} className={classes.headings}>
                <Link href="/" style={{ color: "#FF5722" }}>
                  Casting Calls
                </Link>
              </div>
              <div style={{ width: "5%" }}>
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
