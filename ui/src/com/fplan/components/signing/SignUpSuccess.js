import React, { Component } from "react";
import Link from "@material-ui/core/Link";

class SignUpSuccess extends Component {
  render() {
    return (
      <div>
        <p>User Registration success</p>
        <Link href="/signin" variant="body2">
          {"Please click here to login"}
        </Link>
      </div>
    );
  }
}

export default SignUpSuccess;
