import React, { Component } from "react";
import UserNavBar from "./navbar/UserNavBar";

import FooterSection from "../../general/sections/FooterSection";
import "../../../../../index.css";
import "../dashboard/sections/SideMenu";
import SideMenu from "../dashboard/sections/SideMenu";

class UserHomePage extends Component {
  render() {
    return (
      <div>
        <UserNavBar></UserNavBar>

        <SideMenu></SideMenu>

        <FooterSection></FooterSection>
      </div>
    );
  }
}

export default UserHomePage;
