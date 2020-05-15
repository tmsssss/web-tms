import React, { Component } from 'react'

import DarkButton from './DarkButton'

import { Link, animateScroll as scroll } from "react-scroll";



class NavBar extends Component {
      state = {
        status: 'top'
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
                        <button class="navbar-toggler" type="button">
                            <DarkButton />
                        </button>
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
        
}

export default NavBar
