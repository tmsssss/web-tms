import React, { Component } from 'react'



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

    // Toggle dark mode
    let icon
    if (localStorage.getItem('darkMode') !== 'enabled'){
        icon = <i className="fa fa-toggle-off fa-2x mt-2" onClick={ this.enableDarkMode }></i>
    } else {
        icon = <i className="fa fa-toggle-on fa-2x mt-2" onClick={ this.disableDarkMode }></i>

    }
        return ( 
            
            <header 
            id="tms-nav"
            className={`black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp ${this.state.status === 'top' ? "" : "nav-strict"}`} >

            <div className="overlay"></div>
                <div className="container">
                 <div className="row">
                    <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                        <a className="navbar-brand" href="index.html">
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
        
}

export default NavBar
