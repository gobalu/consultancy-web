import './HomePage.scss';

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import TechPage from '../Tech/TechPage';
import Footer from '../../components/Footer/Footer';
import { Icon } from '@iconify/react';

const HomePage = () => {
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
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
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
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
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
      <div className="homepage__section homepage__section--footer">
        <div className="homepage__fixed--footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
