import React from "react";
import classes from "./DisplayLogo.module.css";
import Logo from "./Logo";

const displaylogo = (props) => {
  return (
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>
  );
};

export default displaylogo;
