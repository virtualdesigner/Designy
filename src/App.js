import React from "react";
import Nav from "./components/Nav";
import Head from "./components/Head";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Head />
      </div>
    );
  }
}
