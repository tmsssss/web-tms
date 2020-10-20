import React, { Component, Fragment } from "react";

import DarkButton from "./DarkButton";

import { Link } from "react-scroll";

import { withNamespaces } from "react-i18next";
import i18n from "../i18n";

class NavBar extends Component {
  state = {
    status: "top",
  };

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Toggle nav color
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
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

  render() {
    const t = this.props.t;
    return (
      <Fragment>
        <title>{t("page title")}</title>
        <header
          id="tms-nav"
          className={`black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp ${
            this.state.status === "top" ? "" : "nav-strict"
          }`}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                <a className="navbar-brand" href="/">
                  <img
                    src="tms.png"
                    width="100"
                    height="200"
                    alt="logo tms"
                    className="img-fluid"
                  />
                </a>

                <div className="navbar-toggler">
                  <button
                    className="flag ml-5 mt-2 hidden"
                    onClick={() => this.changeLanguage("en")}
                  >
                    <img
                      src="uk.png"
                      width="32px"
                      height="32"
                      alt="drapeau uk"
                    />
                  </button>
                  <button
                    className="flag ml-5 mt-2 hidden"
                    onClick={() => this.changeLanguage("fr")}
                  >
                    <img
                      src="fr.png"
                      width="32px"
                      height="32"
                      alt="drapeau fr"
                    />
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-0 ml-auto">
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        className="nav-zer"
                        to="tab-home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        {t("home")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        className="nav-zer"
                        to="tab-about"
                        spy={true}
                        smooth={true}
                        offset={-18}
                        duration={500}
                      >
                        {t("titleAbout")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        className="nav-zer"
                        to="tab-experience"
                        spy={true}
                        smooth={true}
                        offset={-35}
                        duration={500}
                      >
                        {t("experience nav")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        className=" nav-zer"
                        to="tab-skills"
                        spy={true}
                        smooth={true}
                        offset={15}
                        duration={500}
                      >
                        {t("skills")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        className="nav-zer"
                        to="tab-contact"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="mt-3">
                      <DarkButton />
                    </li>
                    <button
                      className="flag ml-5 mt-2 hidden"
                      onClick={() => this.changeLanguage("en")}
                    >
                      <img
                        src="uk.png"
                        width="32px"
                        height="32"
                        alt="drapeau uk"
                      />
                    </button>
                    <button
                      className="flag ml-5 mt-2 hidden"
                      onClick={() => this.changeLanguage("fr")}
                    >
                      <img
                        src="fr.png"
                        width="32px"
                        height="32"
                        alt="drapeau fr"
                      />
                    </button>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default withNamespaces()(NavBar);
