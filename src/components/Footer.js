import React from "react";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="social-footer">
      <div className="social-footer-left">
        <Typography className="copyright" variant="subtitle2" gutterBottom>
          <p className="copyright">
            Copyright Balu Technologies 2021
            <sup>
              <CopyrightIcon className="copyright-icon" />
            </sup>
          </p>
        </Typography>
      </div>
      <div className="social-footer-icons">
        <ul className="menu simple">
          <li>
            <a href="https://www.linkedin.com/company/balu-technologies">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=en">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/?lang=en">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
