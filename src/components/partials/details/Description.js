import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nl2br } from '../../../utils';

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

    return (
      <div className="works_desc">
        <div className="in_wrap fade-init">
          <h2>{acf.project_explanation_header}</h2>
          <div className="works_desc_grid">
            <div className="note">
              <p>Client： {acf.project_client}</p>
              <p>{nl2br(acf.project_explanation)}</p>
            </div>
            {getLink()}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

Description.propTypes = {
  post: PropTypes.object
};

export default Description;
