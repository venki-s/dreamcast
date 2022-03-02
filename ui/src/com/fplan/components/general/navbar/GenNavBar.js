import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "../../ui/HomeIcon";
import "../../../../../../src/index.css";
import Link from "@material-ui/core/Link";
import Sign from "../../ui/Sign";
import Grid from "@material-ui/core/Grid";

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
                  <Link href="/" style={{ color: "#2a6bf4" }}>
                    Dream Casting
                  </Link>
                </Typography>
              </div>
              <div
                style={{
                  width: "auto",
                }}
              >
                <HomeIcon style={{ color: "#2a6bf4" }}></HomeIcon>
              </div>

              <div style={{ width: "52%" }}></div>
              <div style={{ width: "7%" }}>
                <Link href="/" style={{ color: "#2a6bf4", fontSize: "1rem" }}>
                  Learn More
                </Link>
              </div>
              <div style={{ width: "7%" }}>
                <Link href="/" style={{ color: "#2a6bf4", fontSize: "1rem" }}>
                  Contact Us
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
