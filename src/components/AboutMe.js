import React from "react";
import "../css/AboutMe.css";

export default class SkillsList extends React.Component {
  render() {
    return (
      <div
        id="about-me"
        style={{
          transitionProperty: "margin",
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          marginTop: this.props.currentDiv > 3 ? "-100vh" : "0vh"
          // backgroundColor: "#444"
        }}
      />
    );
  }
}
