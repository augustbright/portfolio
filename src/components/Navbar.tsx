import React from "react";

interface INavbarProps {
  fixed: boolean;
}

export default class Navbar extends React.Component<INavbarProps> {
  render() {
    return (
      <React.Fragment>
        <nav
          className={`navbar justify-content-center p-0 ${
            this.props.fixed ? "fixed-top nav-fixed" : ""
          }`}
        >
          <a
            className={`${
              this.props.fixed ? "d-md-inline" : ""
            } d-none btn nav-brand btn-lg text-uppercase ab-brand font-weight-bold text-secondary`}
            href="/#"
          >
            augustbright
          </a>
          {this.props.children}
          <div className="nav-border"></div>
        </nav>
      </React.Fragment>
    );
  }
}
