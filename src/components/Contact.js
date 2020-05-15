import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
        <section className="mh-footer" id="tab-contact">
            <div className="map-image image-bg">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            <h3>Contactez moi</h3>
                        </div>
                        <div className="col-sm-12 mh-footer-address">
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                        <div className="each-icon">
                                            <i className="fa fa-location-arrow"></i>
                                        </div>
                                        <div className="each-info">
                                            <h4></h4>
                                            <address>
                                                Montpellier <br/> 
                                                France
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                                        <div className="each-icon">
                                            <a href="mailto:tom.sbtr9@gmail.com"><i className="fa fa-envelope-o"></i></a>
                                        </div>
                                        <div className="each-info">
                                            <h4>Email</h4>
                                            <a href="mailto:tom.sbtr9@gmail.com">tom.sbtr9@gmail.com</a><br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                        <div className="each-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="each-info">
                                            <h4>Téléphone</h4>
                                            <a href="callto:+33638606557">06 38 60 65 57</a><br/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="text-left text-xs-center">
                                        <p>Tom Sabatier @ 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
        )
    }
}
