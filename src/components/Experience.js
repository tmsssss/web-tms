import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="mh-experince" id="tab-experience">
            <div className="bolor-overlay">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-education">
                                 <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
                                <div className="mh-education-deatils">
                                    <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                        <h4>BTS SIO <a target='_blank' rel="noopener noreferrer" href="https://www.esicad.com/">Esicad Montpellier</a></h4>
                                        <div className="mh-eduyear">2017-2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-work">
                                 <h3>Experience</h3>
                                <div className="mh-experience-deatils">
                                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <h4>Développeur web junior <a target='_blank' rel="noopener noreferrer" href="https://agencelads.com/">Agence la DS</a></h4>
                                        <div className="mh-eduyear">2017-2019</div>
                                        <span>Responsabilité :</span>
                                        <ul className="work-responsibility">
                                            <li><i className="fa fa-circle"></i>Tout le web de l'entreprise</li>
                                            <li><i className="fa fa-circle"></i>Refonte du site principal sous Symfony 4</li>
                                        </ul>
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
