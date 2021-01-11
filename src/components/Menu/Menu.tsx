import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <div className="Menu__titleContainer">
        <div className="Menu__circleContainer">
          <div className="Menu__title">T</div>
          <div className="Menu__subTitle">P</div>
        </div>
      </div>
      <div className="Menu__contentContainer">
        <a href="/#/" className="Menu__section">
          INTRODUCTION
        </a>
        <a href="/#/education" className="Menu__section">
          EDUCATION
        </a>
        <a href="/#/skills" className="Menu__section">
          TECHNICAL SKILLS
        </a>
        <a href="/#/experience" className="Menu__section">
          WORK EXPERIENCE
        </a>
      </div>
      <div className="Menu__linksContainer">
        <a className="Menu__linkIcon" href="https://github.com/pooletyler">
          <FaGithub size="1.75rem" />
        </a>
        <a className="Menu__linkIcon" href="https://linkedin.com/in/pooletb93">
          <FaLinkedin size="1.75rem" />
        </a>
        <a className="Menu__downloadIcon" href="/#/resume">
          <FaDownload size="1.75rem" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
