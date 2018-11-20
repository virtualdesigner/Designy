import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import SkillsList from "./components/SkillsList";
import AboutMe from "./components/AboutMe";
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
          currentDiv={this.state.div}
        />
        <SkillsList currentDiv={this.state.div} />
        <AboutMe currentDiv={this.state.div} />
      </div>
    );
  }
}
