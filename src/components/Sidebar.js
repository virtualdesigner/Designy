import React from "react";
import "../css/Sidebar.css";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div
          id="sidebar__btn1"
          className="sidebar__btn"
          onClick={() => this.props.changeDiv(1)}
        />
        <div
          id="sidebar__btn2"
          className="sidebar__btn"
          onClick={() => this.props.changeDiv(2)}
        />
        <div
          id="sidebar__btn3"
          className="sidebar__btn"
          onClick={() => this.props.changeDiv(3)}
        />
        <div
          id="sidebar__btn4"
          className="sidebar__btn"
          onClick={() => this.props.changeDiv(4)}
        />
      </div>
    );
  }
}
