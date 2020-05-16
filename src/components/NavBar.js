import React, { Component } from 'react'

import DarkButton from './DarkButton'

import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';





class NavBar extends Component {
      state = {
        status: 'top'
      }

      changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

      // Toggle nav color
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 10) {
            if (this.state.status !== "bottom") {
              this.setState({ status: "bottom" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);  
    }




      
    render (){
        const t = this.props.t
        return ( 
            <header 
            id="tms-nav"
            className={`black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp ${this.state.status === 'top' ? "" : "nav-strict"}`} >

            <div className="overlay"></div>
                <div className="container">
                 <div className="row">
                    <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                        <a className="navbar-brand" href="/">
                            <img src='tms.png' width="100" height="200" alt="" className="img-fluid"/>
                        </a>

                        <div class="navbar-toggler">
                            <a className='flag ml-5 mt-2' onClick={() => this.changeLanguage('en')}><img src='uk.png' width='32px' height='32'/></a>     
                            <a className='flag ml-5 mt-2' onClick={() => this.changeLanguage('fr')}><img src='fr.png' width='32px' height='32'/></a>     
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-0 ml-auto">
                            <Link activeClass="active" to="tab-home" spy={true} smooth={true} offset={0} duration={500} >
                                <li className="nav-item active">
                                    <a className="nav-link" href="#tab-home">Home</a>
                                </li>
                            </Link>
                            <Link activeClass="active" to="tab-about" spy={true} smooth={true} offset={-18} duration={500} >
                                <li className="nav-item">
                                    <a className="nav-link" href="#tab-about">{t('titleAbout')}</a>
                                </li>
                            </Link>       
                            <Link activeClass="active" to="tab-experience" spy={true} smooth={true} offset={-35} duration={500} >
                                <li className="nav-item">
                                    <a className="nav-link" href="#tab-experience">{t('experience nav')}</a>
                                </li>
                            </Link>
                            <Link activeClass="active" to="tab-skills" spy={true} smooth={true} offset={15} duration={500} >
                                <li className="nav-item">
                                   <a className="nav-link" href="#tab-skills">{t('skills')}</a>
                                </li>
                            </Link>
                            <Link activeClass="active" to="tab-contact" spy={true} smooth={true} offset={30} duration={500} >
                                <li className="nav-item">
                                   <a className="nav-link" href="#tab-contact">Contact</a>
                                </li>
                            </Link>
                                <li className='mt-3'>
                                   <DarkButton />
                                </li>
                                <a className='flag ml-5 mt-2' onClick={() => this.changeLanguage('en')}><img src='uk.png' width='32px' height='32'/></a>     
                                <a className='flag ml-5 mt-2' onClick={() => this.changeLanguage('fr')}><img src='fr.png' width='32px' height='32'/></a>                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
            
        )
    }
        
}


export default withNamespaces()(NavBar)








