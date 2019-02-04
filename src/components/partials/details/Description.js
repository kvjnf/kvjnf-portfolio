import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nl2br } from '../../../utils';
import ScrollAnimation from './../../../utils/ScrollAnimation';

import '../../../styles/description.scss';

function Description({ post }) {
  if ('acf' in post) {
    const { acf } = post;
    const getLink = () => {
      if ('project_link' in acf) {
        return (
          <Link
            to={acf.project_link}
            className="Montserrat link_btn viewsite_btn"
            target="_blank"
          >
            <span>VIEW WEBSITE</span>
          </Link>
        );
      }
      return null;
    };

    const animeOption = {
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutCubic',
      duration: 800
    };

    return (
      <div className="works_desc">
        <ScrollAnimation show={animeOption} baseLine={'center'}>
          <div className="description in_wrap">
            <h2>{acf.project_explanation_header}</h2>
            <div className="works_desc_grid">
              <div className="note">
                <p>Client： {acf.project_client}</p>
                <p>{nl2br(acf.project_explanation)}</p>
              </div>
              {getLink()}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
  return null;
}

Description.propTypes = {
  post: PropTypes.object
};

export default Description;
