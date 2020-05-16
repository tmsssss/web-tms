import React from 'react'
import { withNamespaces } from 'react-i18next';


export const About = ({ t }) => {
    return (
        <section className="mh-about" id="tab-about">
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                            <img src="dev.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-inner">
                            <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">{t('titleAbout')}</h2>
                            <p className="wow fadeInUp about" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            {t('textAbout1')}<br/>{t('textAbout2')}
                                <br/> {t('textAbout3')}
                                <br/> {t('textAbout4')}
                                
                        </p>
                            <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <ul>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://www.php.net/">PHP</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/JavaScript">Javascript</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://reactjs.org/">React.js</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://symfony.com/">Symfony</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/HTML">HTML</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/CSS">CSS</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://sql.sh/">SQL</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://nextjs.org/">Next.js</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://gatsbyjs.org/">Gatsby</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://aws.amazon.com/fr/">AWS</a></span></li>
                                    <li><span><a target='_blank' rel="noopener noreferrer" href="https://firebase.google.com/?hl=fr">Firebase</a></span></li>
                                </ul>
                            </div>
                            <a href={t('cv')} download className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">{t('downloadCv')}<i className="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default withNamespaces()(About)



