import React from "react";

interface IPortfolioItemProps {
  imageURL: string;
  heading: string;
  url: string;
  tags: string[];
}

export default class PortfolioItem extends React.Component<
  IPortfolioItemProps
> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src={this.props.imageURL}
              alt={this.props.heading}
            />
          </div>
        </div>
        <div className="mt-1 row">
          <div className="col text-center">
            <h3>{this.props.heading}</h3>
          </div>
        </div>
        <div className="mt-1 row">
          <div className="col text-center">
            {this.props.tags.map(tag => (
              <span className="p-1 text-secondary">{tag}</span>
            ))}
          </div>
        </div>
        <div className="mt-2 row justify-content-center">
            <div className="col-auto">
                <a className="btn btn-link btn-lg text-uppercase" href={this.props.url} target="_blank">Visit &gt;&gt;</a>
            </div>
        </div>
      </div>
    );
  }
}
