import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="svg-test">
        <div
          className="col-sm-12 mh-copyright wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.3s"
        >
          <div className="row">
            <div className="col-sm-6">
              <div className="text-right text-xs-center">
                <p className="footer-text">Tom Sabatier @ 2020</p>
              </div>
            </div>
            <div className="col-sm-6">
              <p className="text-xs-center">
                <Link className="footer-text" to="/mentions-légales">
                  Mentions légales
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
