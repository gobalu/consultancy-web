import "./HomePage.scss";

import React from "react";
import Hero from "../../components/Hero/Hero";
import TechPage from "../Tech/TechPage";
import Footer from "../../components/Footer/Footer";
import { Icon } from "@iconify/react";
import ContactUs from "../../components/ContactUs/ContactUs";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="homepage__section homepage__section--grey">
        <div className="homepage__fixed">
          <div className="homepage__title">
            INNOVATIVE SOFTWARE SOLUTIONS ● INFRASTRUCTURE ● SOFTWARE
            ARCHITECTURE
          </div>
          <div className="homepage__box-wrapper">
            <div className="homepage__box-container">
              <div className="homepage__box">
                <span className="homepage__box-icon">
                  <Icon icon="carbon:infrastructure-classic" />
                </span>
                <span className="homepage__box-title">Infrastructure</span>
                <p className="homepage__box-text">
                  Building scalable, maintainable infrastructure to allow you to
                  grow and meet demands whilst keeping costs down.
                </p>
              </div>
            </div>
            <div className="homepage__box-container">
              <div className="homepage__box">
                <span className="homepage__box-icon">
                  <Icon icon="ic:baseline-architecture" />
                </span>
                <span className="homepage__box-title">Architecture</span>
                <p className="homepage__box-text">
                  Breaking complex problems down into simple architecture that
                  is both scalable, and recoverable in the worst case scenario,
                  our architectural approach will give you peace of mind
                </p>
              </div>
            </div>
            <div className="homepage__box-container">
              <div className="homepage__box">
                <span className="homepage__box-icon">
                  <Icon icon="cil:magnifying-glass" />
                </span>
                <span className="homepage__box-title">Technical Solutions</span>
                <p className="homepage__box-text">
                  Whether its a migration to the Cloud, managing your SaaS
                  platform, or infrastructure configuration and deployment, you
                  can trust our technical solutions will be reliable and
                  following current best practices
                </p>
              </div>
            </div>
          </div>
          <div className="homepage__box-wrapper">
            <div className="homepage__box-container">
              <div className="homepage__box">
                <span className="homepage__box-icon">
                  <Icon icon="simple-icons:knowledgebase" />
                </span>
                <span className="homepage__box-title">
                  Experience & Expertise
                </span>
                <p className="homepage__box-text">
                  A tight knit team with a passion for technology and a wealth
                  of experience in the industry.
                </p>
              </div>
            </div>
            <div className="homepage__box-container">
              <div className="homepage__box">
                <span className="homepage__box-icon">
                  <Icon icon="bi:arrow-clockwise" />
                </span>
                <span className="homepage__box-title">Agile</span>
                <p className="homepage__box-text">
                  Iteratively developing software to ensure we build solutions
                  to solve your business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__section">
        <div className="p homepage__fixed">
          <TechPage />
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
      <div className="homepage__section homepage__section--footer">
        <div className="homepage__fixed--footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
