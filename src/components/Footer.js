import React from "react";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="social-footer">
      <div class="social-footer-left">
        <Typography variant="subtitle2" gutterBottom>
          Copyright Balu Technologies 2021
          <sup>
            <CopyrightIcon className="copyright-icon" />
          </sup>
        </Typography>
      </div>
      <div class="social-footer-icons">
        <ul class="menu simple">
          <li>
            <a href="https://www.linkedin.com/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=en">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/?lang=en">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
