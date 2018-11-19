import React from "react";
import "../css/Head.css";
import TypeWriterText from "./TypeWriterText";

export default class Head extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    let skill = "web developer";

    setInterval(() => {
      if (
        this.props.skills.length - 1 ===
        this.props.skills.indexOf(this.skill)
      ) {
        this.skill = this.props.skills[0];
      } else {
        this.skill = this.props.skills[
          this.props.skills.indexOf(this.skill) + 1
        ];
      }
    }, 3000);

    return (
      <div id={this.props.goUp}>
        <div id="head-section">
          <div id="head-section__main-content">
            <p id="head-section__main-text">LOVE TO DREAM</p>
            <p id="head-section__secondary-text">Living The Dream</p>
            <div id="head-section__my-work-wrapper">
              <div style={{ display: "flex" }}>
                <span id="head-section__my-work">I'm curious at </span>
                <TypeWriterText
                  words={this.props.skills}
                  addTextTiming={200}
                  removeTextTiming={50}
                  textStyle={{
                    color: "#1caf4b",
                    fontSize: "1.8rem",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                    marginLeft: "10px",
                    minWidth: "200px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
