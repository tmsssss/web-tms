import React, { Component } from 'react'



const NavBar = ({ darkMode, toggle }) => {
    
    // Toggle dark mode
    let icon
    if (toggle){
        icon = <i className="fa fa-toggle-off fa-2x mt-2" onClick={ darkMode }></i>
    } else {
        icon = <i className="fa fa-toggle-on fa-2x mt-2" onClick={ darkMode }></i>
    }
        return (
            <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header" >
            <div className="overlay"></div>
                <div className="container">
                 <div className="row">
                    <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                        <a className="navbar-brand" href="#">
                            <img src="tms.png" width="100" height="200" alt="" className="img-fluid"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-0 ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#mh-home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#mh-about">About</a>
                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" href="#mh-skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" href="#mh-contact">Contact</a>
                                </li>
                                <li>
                                    {icon}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
            
        )
}

export default NavBar
