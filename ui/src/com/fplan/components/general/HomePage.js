import React, { Component } from "react";
import GenNavBar from "./navbar/GenNavBar";

import HeaderSection from "./sections/HeaderSection";
import MainSection from "./sections/MainSection";
import FooterSection from "./sections/FooterSection";
import "../../../../index.css";

class HomePage extends Component {
  signInNav = () => {
    this.props.history.push("/signin");
  };

  signUpNav = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <GenNavBar
          signInNav={this.signInNav}
          signUpNav={this.signUpNav}
        ></GenNavBar>

        <HeaderSection signUpNav={this.signUpNav}></HeaderSection>

        <MainSection signUpNav={this.signUpNav}></MainSection>

        <FooterSection></FooterSection>
      </div>
    );
  }
}

export default HomePage;
