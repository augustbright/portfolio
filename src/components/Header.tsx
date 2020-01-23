import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <section className="page-section page-header container-fluid d-flex flex-column justify-content-center" id="page-top">
        <div className="row justify-content-center">
          <div className="col-2">
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
            <h2 className="subheading">A Humble React.js Developer</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <nav className="navbar">
              <ul className="nav">
                <li className="nav-item">
                  <a href="#portfolio">Portfolio</a>
                </li>
                &#9900;
                <li className="nav-item">
                  <a href="#contact">Contact Me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
