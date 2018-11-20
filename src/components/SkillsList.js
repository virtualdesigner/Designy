import React from "react";
import "../css/SkillsList.css";

export default class SkillsList extends React.Component {
  render() {
    return (
      <div
        id={this.props.upOrDown}
        style={{
          transitionProperty: "margin",
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          marginTop: this.props.currentDiv > 2 ? "-100vh" : "0vh"
        }}
      >
        <div id="about-my-skills" />
      </div>
    );
  }
}
