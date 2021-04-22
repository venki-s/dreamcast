import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="contained" onClick={props.signInNav}>
        Signin
      </Button> */}

      <Button
        variant="contained"
        color="primary"
        href="#contained-buttons"
        style={{ backgroundColor: "#2a6bf4" }}
        onClick={props.signUpNav}
      >
        Signup
      </Button>
    </div>
  );
}

export default ContainedButtons;
