import React from "react";
import "../css/Head.css";

export default class Head extends React.Component {
  render() {
    return (
      <div>
        <div id="head-section">
          <div id="head-section__main-content">
            <p id="head-section__main-text">LOVE TO DREAM</p>
            <p id="head-section__secondary-text">Living the dream</p>
            {/* <div id="head-section__my-work-wrapper">
              <p id="head-section__my-work">I learn and work as a </p>
              <p id="head-section__my-work-anim" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
