import React from "react";

import BurgerLogo from "../../../../../assets/images/circle-cropped.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="MyBurger"></img>
  </div>
);

export default logo;
