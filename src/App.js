import React from "react";
import Nav from "./components/Nav";
import Head from "./components/Head";
import "./css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Head
          skills={[
            "web development",
            "web design",
            "ai reasearch",
            "machine learning",
            "investing"
          ]}
        />
      </div>
    );
  }
}
