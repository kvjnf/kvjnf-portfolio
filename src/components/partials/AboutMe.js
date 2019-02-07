import React from 'react';
import PropTypes from 'prop-types';
import { nl2br } from '../../utils';
import './../../styles/about.scss';

const AboutMe = ({ content }) => {
  return (
    <div className="about_contents">
      <h2 className="Montserrat">ABOUT ME</h2>
      <p className="en Montserrat">{content.about_me_title}</p>
      <p className="readtxt">{nl2br(content.about_me_text)}</p>
    </div>
  );
};

AboutMe.propTypes = {
  content: PropTypes.object
};

export default AboutMe;
