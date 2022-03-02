import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "../../../ui/HomeIcon";
import "../../../../../../../src/index.css";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
              <div
                style={{
                  width: "5%",
                }}
              ></div>
              <div
                style={{
                  width: "auto",
                }}
              >
                <Link
                  href="/signinsuccess"
                  style={{ color: "#2a6bf4", fontSize: "1rem" }}
                >
                  My Dashboard
                </Link>
              </div>
              <div
                style={{
                  width: "2%",
                }}
              ></div>
              <div
                style={{
                  width: "auto",
                }}
              >
                <Link
                  href="/signinsuccess"
                  style={{ color: "#2a6bf4", fontSize: "1rem" }}
                >
                  Create Porrtfolio
                </Link>
              </div>
              <div
                style={{
                  width: "2%",
                }}
              ></div>
              <div
                style={{
                  width: "auto",
                }}
              >
                <Link
                  href="/signinsuccess"
                  style={{ color: "#2a6bf4", fontSize: "1rem" }}
                >
                  Your life goals
                </Link>
              </div>
              <div
                style={{
                  width: "2%",
                }}
              ></div>
              <div
                style={{
                  width: "auto",
                }}
              >
                <Link
                  href="/signinsuccess"
                  style={{ color: "#2a6bf4", fontSize: "1rem" }}
                >
                  Plans to achive your goals
                </Link>
              </div>
              <div
                style={{
                  width: "2%",
                }}
              ></div>
              <div
                style={{
                  width: "auto",
                }}
              >
                <Link
                  href="/signinsuccess"
                  style={{ color: "#2a6bf4", fontSize: "1rem" }}
                >
                  Reports
                </Link>
              </div>

              <div
                style={{
                  width: "30%",
                }}
              ></div>
              <div>
                <Typography
                  style={{ color: "black" }}
                  className={classes.title}
                >
                  Ravindra P
                </Typography>
              </div>
              <div style={{ color: "#2a6bf4" }}>
                <IconButton aria-label="show 2 new notifications">
                  <Badge badgeContent={2} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
              <div style={{ color: "#2a6bf4" }}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Toolbar></Toolbar>
        </Grid>
      </Grid>
    </div>
  );
}
