import React from 'react';
import PropTypes from 'prop-types';
import nl2br from 'react-nl2br';

import { decodeHtml } from '../../utils';
import './../../styles/experience.scss';

function Experience({ experiences }) {
  const lists = experiences.map(data => {
    const { open_date, roll } = data.acf;
    const end_date = data.acf.end_date || 'Present';

    return (
      <article key={`vtime-id-${data.id}`} className="vtimeline-point">
        <div className="vtimeline-icon">
          <i className="fas fa-map-marker-alt" />
        </div>
        <div className="vtimeline-block">
          <span className="vtimeline-date">{`${open_date} – ${end_date}`}</span>
          <div className="vtimeline-content">
            <h3>{data.title.rendered}</h3>
            <h4>{roll}</h4>
            <p>{nl2br(decodeHtml(data.content.rendered))}</p>
          </div>
        </div>
      </article>
    );
  });

  return (
    <section id="experience" className="sections bgc-gray">
      <h2 className="Montserrat upfade-init">Experience</h2>
      <div id="experience-timeline">{lists}</div>
    </section>
  );
}

Experience.propTypes = {
  experiences: PropTypes.array
};

export default Experience;
