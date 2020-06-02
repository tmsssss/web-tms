import { withNamespaces } from 'react-i18next';

import React from 'react'

export const Home = ({ t }) => {
    let chif = 12 %= 2
    return (
        <section className="mh-home" id="tab-home">
            <div className="home-ovimg">
                <div className="container">
                    <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
                        <div className="col-sm-6">
                            <div className="mh-header-info">
                                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                    <span role="img" aria-label="spoke">🖖</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Tom Sabatier</h2>
                                <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">{t('jobTitle')}</h4>
                                
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope"></i><a href="mailto:tom.sbtr9@gmail.com">tom.sbtr9@gmail.com</a></li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i className="fa fa-phone"></i>+33 6 38 60 65 57</li>
                                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker"></i><address>Montpellier</address></li>
                                </ul>
                                
                                <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/tmsssss">{chif}<i className="fa fa-github"></i></a></li>
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

export default withNamespaces()(Home)
