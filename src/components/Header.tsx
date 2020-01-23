import React from "react";
import ViewportWatcher from "./ViewportWatcher";

interface IHeaderProps {}

interface IHeaderState {}

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return (
      <section
        className="page-section page-header container-fluid d-flex flex-column justify-content-center"
        id="page-top"
      >
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
            <h2 className="text-secondary subheading">
              A Humble React.js Developer
            </h2>
          </div>
        </div>
        <div className="row justify-content-center min-height-70">
          <div className="col">
            <ViewportWatcher>
              {({ isTopAbove }) => (
                <nav
                  className={`navbar justify-content-center p-0 ${
                    isTopAbove ? "fixed-top nav-fixed" : ""
                  }`}
                >
                  <ul className="nav">
                    <li className="nav-item">
                      <a href="#portfolio">My works</a>
                    </li>
                    &#9900;
                    <li className="nav-item">
                      <a href="#contact">Contact Me</a>
                    </li>
                  </ul>
                  <div className="nav-border"></div>
                </nav>
              )}
            </ViewportWatcher>
          </div>
        </div>
      </section>
    );
  }
}
