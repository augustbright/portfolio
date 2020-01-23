import React from 'react';
import PortfolioItem from '../components/PortfolioItem';


export default class Portfolio extends React.Component {
    render() {
        return (
            <section className="page-section container-fluid bg-light" id="portfolio">
                <div className="row mt-2">
                    <div className="col-md-4">
                        <PortfolioItem heading="A design studio landing" imageURL="/img/portfolio/interior.png" url="https://interior-yar.herokuapp.com/" tags={[
                            'Next.js', 'Bootstrap', 'Typescript'
                        ]}/>
                    </div>
                </div>
            </section>
        );
    }
}