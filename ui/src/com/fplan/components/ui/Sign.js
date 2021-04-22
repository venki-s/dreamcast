import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Sign(props) {
  const classes = useStyles();

  if (props.action === "signin") {
    return (
      <div>
        <Link
          style={{ color: "#2a6bf4", fontSize: "1rem" }}
          href="/signin"
          onClick={props.signInNav}
        >
          Sign in
        </Link>
      </div>
    );
  }

  if (props.action === "signup") {
    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{ backgroundColor: "#2a6bf4", textTransform: "none" }}
          onClick={props.signUpNav}
        >
          Create a Free Account
        </Button>
      </div>
    );
  }
}
