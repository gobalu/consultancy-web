import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "./Footer.scss";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

export const Footer = () => {
  const { isShowing, toggle } = useModal();

  return (
    <footer className="social-footer">
      <div className="social-footer-left">
        <p className="copyright">
          All Rights Reserved
          <sup>
            <CopyrightIcon className="copyright-icon" />
          </sup>
          Balu Technologies 2021
        </p>

        <div className="policies">
          <button className="button-default" onClick={toggle}>
            Anti-slavery policy
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
        </div>
      </div>
      <div className="social-footer-icons">
        <ul className="menu simple">
          <li>
            <a href="https://www.linkedin.com/company/balu-technologies">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/?hl=en">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <ScrollArrow />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
