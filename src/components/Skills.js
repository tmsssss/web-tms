import React from 'react'
import { withNamespaces } from 'react-i18next';

export const Skills = ({ t }) => {
    return (
        <section className="mh-skills" id="tab-skills">
        <div className="container">
            <div className="row section-separator">
                <div className="section-title text-center col-sm-12">
                    <h2>{t('skills')}</h2>
                </div>
                <div className="col-sm-12 col-ful">
                    <div className="mh-skills-inner">
                        <div className="mh-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <div className="each-skills">
                                <div className="candidatos">
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">PHP</div>
                                            <div className="percentagem-num">80%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{width:'80%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="candidatos">
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">Javascript</div>
                                            <div className="percentagem-num">40%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{width:'40%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="candidatos">
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">Symfony</div>
                                            <div className="percentagem-num">50%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{width:'50%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="candidatos">
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">React.js</div>
                                            <div className="percentagem-num">35%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{width:'35%'}}></div>
                                        </div>
                                    </div>
                                </div>                                    
                                <div className="candidatos">
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">SQL</div>
                                            <div className="percentagem-num">70%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{width:'70%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="candidatos">
                                    <div className="parcial">
                                        <div className="info">
                                            <div className="nome">HTML/CSS</div>
                                            <div className="percentagem-num">90%</div>
                                        </div>
                                        <div className="progressBar">
                                            <div className="percentagem" style={{width:'90%'}}></div>
                                        </div>
                                    </div>
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

export default withNamespaces()(Skills)
