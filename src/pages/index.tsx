import React from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import ContactMe from "../components/ContactMe";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Portfolio />
        <ContactMe />
      </React.Fragment>
    );
  }
}
