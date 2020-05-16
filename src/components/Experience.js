import { withNamespaces } from 'react-i18next';

import React from 'react'

export const Experience = ({ t }) => {
    return (
        <section className="mh-experince mt-4" id="tab-experience">
        <div className="bolor-overlay">
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-education">
                             <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
                            <div className="mh-education-deatils">
                                <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                    <h4>{t('bts')}<br/><a target='_blank' rel="noopener noreferrer" href="https://www.esicad.com/">Esicad Montpellier</a></h4>
                                    <div className="mh-eduyear">2017-2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-work">
                             <h3>{t('experience')}</h3>
                            <div className="mh-experience-deatils">
                                <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                    <h4>{t('jobTitle')}<a target='_blank' rel="noopener noreferrer" href="https://agencelads.com/">Agence la DS</a></h4>
                                    <div className="mh-eduyear">2017-2019</div>
                                    <span>{t('responsability')}</span>
                                    <ul className="work-responsibility">
                                        <li><i className="fa fa-circle"></i>{t('responsability1')}</li>
                                        <li><i className="fa fa-circle"></i>{t('responsability2')}</li>
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

export default withNamespaces()(Experience)

