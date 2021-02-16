import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ShopIcon from "@material-ui/icons/Shop";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  return (
    <footer class="social-footer">
      <div class="social-footer-left">
        <Typography className="opacity" variant="subtitle2" gutterBottom>
          Copyright Balu Technologies 2021
          <sup>
            <CopyrightIcon className="copyright-icon" />
          </sup>
        </Typography>
      </div>
      <div class="social-footer-icons">
        <ul class="menu simple">
          <li>
            <a href="https://www.facebook.com/">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=en">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
