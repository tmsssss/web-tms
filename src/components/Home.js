import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section className="mh-home" id="mh-home">
            <div className="home-ovimg">
                <div className="container">
                    <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
                        <div className="col-sm-6">
                            <div className="mh-header-info">
                                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                    <span>Hello I'm</span>
                                </div>
                                
                                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Tom Sabatier</h2>
                                <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">Product Designer</h4>
                                
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope"></i><a href="mailto:tom.sbtr9@gmail.com">getemail@email.com</a></li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i className="fa fa-phone"></i><a href="callto:0638606557">0638606557</a></li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker"></i><address>37, Pollsatnd, New York, United State</address></li>
                                </ul>
                                
                                <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                    <li><a href="https://github.com/tmsssss"><i className="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                <div className="img-border">
                                    <img src="tom.png" alt="" width='425' height='425' className="img-fluid"/>
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
