import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../../../../../index.css";

import ContentImage from "../../images/content/ContentImages";
import Sign from "../../ui/Sign";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(15),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  content: {
    fontSize: "52px",
    fontFamily: "Manrope",
    color: "#2a6bf4",
  },
  subcontent: {
    fontSize: "20px",
    fontFamily: "Manrope",
    fontWeight: 200,
  },
}));

export default function HeaderSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper
            style={{
              height: "12rem",
              background: "transparent",
              boxShadow: "none",
            }}
          ></Paper>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "left", padding: "0px 0px 0px 7rem" }}
        >
          <h2 className={classes.content}>Personal Financial Manager</h2>
          <h4 className={classes.subcontent}>
            Plan your financial goals. Manage your investments and liabilities.
            With My Portfolio Home you can plan your short-term and long-term
            financial goals in a hassle free and realistic manner.
          </h4>
          <Sign signUpNav={props.signUpNav} action={"signup"}></Sign>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <ContentImage image={"graph"}></ContentImage>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <ContentImage image={"3d"}></ContentImage>
        </Grid>
        <Grid item xs={3}>
          <ContentImage image={"paper"}></ContentImage>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "5rem",
        }}
      ></Grid>
    </div>
  );
}
