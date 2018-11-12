import React from "react";
import "../App.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <div id="nav-logo" />
        <div id="nav-profile-info">
          <div id="nav-profile-pic" />
          <div id="nav-profile-name">S.M.Deepak</div>
        </div>
      </div>
    );
  }
}
