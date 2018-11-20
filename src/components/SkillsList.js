import React from "react";
import "../css/SkillsList.css";

export default class SkillsList extends React.Component {
  render() {
    return (
      <div
        id="skills-list"
        style={{
          transitionProperty: "margin",
          transitionDuration: "1s",
          transitionTimingFunction: "ease",
          marginTop: this.props.currentDiv > 2 ? "-100vh" : "0vh"
        }}
      >
        <div id="skills-list__head">
          <p id="skills-list__heading">THINGS I KNOW WELL</p>
          <div id="skills-list__heading-underline">2</div>
          <p id="skills-list__secondary-heading">
            Skills that i have acquired while on the joy of learning
          </p>
        </div>

        <div id="skills-list__skills" />
      </div>
    );
  }
}
