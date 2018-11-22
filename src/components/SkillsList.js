import React from "react";
import "../css/SkillsList.css";
import html5 from "../svg/html51.svg";

export default class SkillsList extends React.Component {
  constructor() {
    super();

    this.state = {
      doneAnim: false
    };
  }

  componentDidUpdate() {
    if (this.props.currentDiv === 2 && this.state.doneAnim === false) {
      this.setState({
        doneAnim: true
      });
    }
  }

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
          <div id="skills-list__heading-underline"> 2</div>
          <p id="skills-list__secondary-heading">
            Skills that i have acquired while on the joy of learning
          </p>
        </div>

        <div id="skills-list__skills">
          <div id="skills-list__listing" className="skill">
            <div
              id="skills-list__html5"
              className="skill"
              style={{
                animation: this.state.doneAnim
                  ? "skills-anim 0.3s ease-in-out 0.3s forwards"
                  : ""
              }}
            />
            <div
              id="skills-list__css3"
              className="skill"
              style={{
                animation: this.state.doneAnim
                  ? "skills-anim 0.3s ease-in-out 0.5s forwards"
                  : ""
              }}
            />
            <div
              id="skills-list__sass"
              className="skill"
              style={{
                animation: this.state.doneAnim
                  ? "skills-anim 0.3s ease-in-out 0.7s forwards"
                  : ""
              }}
            />
            <div
              id="skills-list__js"
              className="skill"
              style={{
                animation: this.state.doneAnim
                  ? "skills-anim 0.3s ease-in-out 0.8s forwards"
                  : ""
              }}
            />
            <div
              id="skills-list__react"
              className="skill"
              style={{
                animation: this.state.doneAnim
                  ? "skills-anim 0.3s ease-in-out 0.9s forwards"
                  : ""
              }}
            />
            <div
              id="skills-list__nodejs"
              className="skill"
              style={{
                animation: this.state.doneAnim
                  ? "skills-anim 0.3s ease-in-out 1.1s forwards"
                  : ""
              }}
            />
          </div>
        </div>

        <div id="skills-list__quote">
          <div id="skills-list__quote-mark" />
          <span id="quote">
            Let us take you into a deeper experience, make a moment a lasting
            conveyable memory. Let us help build your tribe.
          </span>
        </div>
      </div>
    );
  }
}
