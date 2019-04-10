import React from 'react';
import PropTypes from 'prop-types';
import { nl2br } from '../../utils';
import './../../styles/about.scss';

const AboutMe = ({ content }) => {
  return (
    <section className="about_contents sections">
      <h2 className="Montserrat">ABOUT ME</h2>
      <p className="en Montserrat">{content.about_me_title}</p>
      <p className="readtxt">{nl2br(content.about_me_text)}</p>
    </section>
  );
};

AboutMe.propTypes = {
  content: PropTypes.object
};

export default AboutMe;
