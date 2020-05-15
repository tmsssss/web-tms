import React, { Component } from 'react'

export default class About extends Component {
    render() {
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
                            <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">A propos</h2>
                            <p className="wow fadeInUp about" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                Moi c'est Tom, je suis web développeur junior et me passionne pour le développement
                                back-end. <br/> Je porte également un intérêt à développer des applications front-end.
                                <br/> Toute les technologies avec lesquelles nous travaillons évoluent a une vitesse folle, cela rend ce métier passionnant.
                                <br/> Voici quelques technologies sur lesquelles je travaille/m'intéresse :
                                
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
                            <a href="/cv.pdf" download className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Télécharger CV <i className="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
