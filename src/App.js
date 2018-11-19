import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import SkillsList from "./components/SkillsList";
import "./css/App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      div: 1
    };

    this.changeDiv = this.changeDiv.bind(this);
  }

  changeDiv(pageNumber) {
    this.setState({
      div: pageNumber
    });
  }

  render() {
    return (
      <div id="contentWrapper">
        <Nav />
        <Sidebar changeDiv={this.changeDiv} />
        <Head
          skills={[
            "web development",
            "web design",
            "ai reasearch",
            "machine learning",
            "investing"
          ]}
          goUp={this.state.div > 1 ? "home" : "null"}
        />
        <SkillsList goUp={this.state.div > 2 ? "skillsList" : "null"} />
      </div>
    );
  }
}
