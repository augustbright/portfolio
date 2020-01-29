import React from 'react';

export default class ContactMe extends React.Component {
    render() {
        return (
            <section className="page-section container-fluid d-flex flex-column justify-content-center" id="contact">
                <div className="row justify-content-center">
                    <div className="col-auto text-secondary">
                        Feel free
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto font-weight-bold">
                        <a href="mailto:vtumanov782@gmail.com">augustbright@yandex.ru</a>
                    </div>
                </div>
            </section>
        );
    }
}