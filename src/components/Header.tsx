import React from "react";
import Scrollable from "@augustbright/react-scrollable";
import Navbar from "./Navbar";

export default class Header extends React.Component {
  render() {
    return (
      <section
        className="page-section page-header container-fluid d-flex flex-column justify-content-center"
        id="page-top"
      >
        <div className="row justify-content-center">
          <div className="col-4 col-md-2">
            <img
              className="img-fluid rounded-circle"
              src="/img/photo.jpg"
              alt="Profile photo"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <h1 className="heading">August Bright</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <h2 className="text-secondary subheading">A React.js Developer</h2>
          </div>
        </div>
        <div className="row justify-content-center min-height-70">
          <div className="col p-0">
            <Scrollable>
              {({ isTopAbove }) => (
                <Navbar fixed={isTopAbove}>
                  <ul className="nav">
                    <li className="nav-item">
                      <a href="#portfolio">My works</a>
                    </li>
                    &#9900;
                    <li className="nav-item">
                      <a href="#contact">Contact Me</a>
                    </li>
                  </ul>
                </Navbar>
              )}
            </Scrollable>
          </div>
        </div>
      </section>
    );
  }
}
