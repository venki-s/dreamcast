import React, { Component } from "react";
import axios from "axios";
import Signin from "./SignIn";
import SignUp from "./SignUp";
import Snackbar from "@material-ui/core/Snackbar";

const AUTH_URL = "http://localhost:8080/api/talent/";

class Auth extends Component {
  auth = (fname, lname, email, password, isSignup) => {
    isSignup
      ? this.signUp(fname, lname, email, password)
      : this.signIn(email, password);
  };

  signIn = (email, password) => {
    const authData = {
      email,
      password,
    };

    axios
      .post(AUTH_URL + "?action=signin", authData)
      .then((response) => {
        console.log(response.data);
        this.setState({ open: false, message: "" });
        localStorage.setItem("token", response.data);
        this.props.history.push("/signinsuccess");
      })
      .catch((err) => {
        console.error(err.response.data);
        this.setState({ open: true, message: err.response.data });
      });
  };

  signUp = (fname, lname, email, password) => {
    const authData = {
      fname,
      lname,
      email,
      password,
    };

    axios
      .post(AUTH_URL + "?action=signup", authData)
      .then((response) => {
        console.log(response.data);

        this.props.history.push("/signupsuccess");
      })
      .catch((err) => {
        console.log("error  ", err);
        console.log("error status ", err.response.status);
        console.log("error message ", err.response.data);
      });
  };

  state = {
    url: "",
    email: "",
    password: "",
    open: false,
    message: "",
  };

  componentWillMount() {
    this.setState({ url: window.location.pathname });
  }

  render() {
    const signpage =
      this.state.url === "/signin" ? (
        <Signin auth={this.auth}></Signin>
      ) : (
        <SignUp auth={this.auth}></SignUp>
      );
    return (
      <div>
        {signpage}
        <Snackbar
          open={this.state.open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={this.state.message}
          autoHideDuration={6000}
        ></Snackbar>
      </div>
    );
  }
}

export default Auth;