
import DarkButton from './DarkButton'

import { Link, animateScroll as scroll } from "react-scroll";


import React, { useState, useEffect } from 'react'
import { withNamespaces } from 'react-i18next';



export const NavBar = ({ t }) => {
    const [status, setStatus] = useState('top')

    useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 10) {
              if (status !== "bottom") {
                setStatus({ status: "bottom" });
              }
            } else {
              if (status !== "top") {
                setStatus({ status: "top" });
              }
            }
          });
      })


    return (
        <header 
        id="tms-nav"
        className={`black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp ${status === 'top' ? "" : "nav-strict"}`} >

        <div className="overlay"></div>
            <div className="container">
             <div className="row">
                <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                    <a className="navbar-brand" href="/">
                        <img src='tms.png' width="100" height="200" alt="" className="img-fluid"/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-0 ml-auto">
                        <Link activeClass="active" to="tab-home" spy={true} smooth={true} offset={0} duration={500} >
                            <li className="nav-item active">
                                <a className="nav-link" href="#tab-home">Home</a>
                            </li>
                        </Link>
                        <Link activeClass="active" to="tab-about" spy={true} smooth={true} offset={-18} duration={500} >
                            <li className="nav-item">
                                <a className="nav-link" href="#tab-about">A propos</a>
                            </li>
                        </Link>       
                        <Link activeClass="active" to="tab-experience" spy={true} smooth={true} offset={0} duration={500} >
                            <li className="nav-item">
                                <a className="nav-link" href="#tab-experience">Expériences</a>
                            </li>
                        </Link>
                        <Link activeClass="active" to="tab-skills" spy={true} smooth={true} offset={0} duration={500} >
                            <li className="nav-item">
                               <a className="nav-link" href="#tab-skills">Compétences</a>
                            </li>
                        </Link>
                        <Link activeClass="active" to="tab-contact" spy={true} smooth={true} offset={0} duration={500} >
                            <li className="nav-item">
                               <a className="nav-link" href="#tab-contact">Contact</a>
                            </li>
                        </Link>
                            <li className='mt-3'>
                               <DarkButton />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}


export default withNamespaces()(NavBar)


