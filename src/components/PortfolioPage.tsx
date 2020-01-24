import React, { CSSProperties } from "react";
import Navbar from "../components/Navbar";

interface IPortfolioPageProps {
  src: string;
}

interface IPortfolioPageState {
  mode: "desktop" | "mobile";
}

export default class PortfolioPage extends React.Component<
  IPortfolioPageProps,
  IPortfolioPageState
> {
  constructor(props: IPortfolioPageProps) {
    super(props);
    this.state = {
      mode: "desktop"
    };
  }

  turnDesktop() {
    this.setState({
      mode: "desktop"
    });
  }

  turnMobile() {
    this.setState({
      mode: "mobile"
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar fixed={true}>
          <div className="d-none d-md-flex">
            <button onClick={() => this.turnMobile()}
              className={`btn disable-shadow ${
                this.state.mode === "mobile" ? "text-primary" : "text-muted"
              }`}
            >
              <i className="fas fa-lg fa-mobile-alt" />
            </button>

            <button onClick={() => this.turnDesktop()}
              className={`btn disable-shadow ${
                this.state.mode === "desktop" ? "text-primary" : "text-muted"
              }`}
            >
              <i className="fas fa-lg fa-desktop" />
            </button>
          </div>
        </Navbar>
        <div className="portfolio-bg"></div>
        <iframe className={`portfolio-frame ${this.state.mode === 'mobile' ? 'portfolio-mobile' : ''}`} src={this.props.src} />
      </React.Fragment>
    );
  }
}
