import React, { Component } from "react";
import ReactPlayer from "react-player";

class IntroVideo extends Component {
  render() {
    return (
      <ReactPlayer
        url="./video.mp4"
        playing={true}
        loop={true}
        width="25rem"
        height="auto"
      />
    );
  }
}

export default IntroVideo;
