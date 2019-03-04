import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actions from '../actions';
import './../styles/common.scss';
import './../styles/detail.scss';

import Logo from './partials/Logo';
import DeviceSection from './partials/details/DeviceSection';
import Description from './partials/details/Description';
import ProjectCapture from './partials/details/ProjectCaptures';

class Details extends Component {
  componentDidMount() {
    const { fetchPost } = this.props;
    const { id } = this.props.match.params;

    fetchPost({ id });
  }

  render() {
    const { current } = this.props.lang;
    const { content } = this.props.post;
    const { pageReady } = this.props.initial;
    const { eye_catch = {} } = content;
    const { project_detail = [] } = content;
    const post = current in content ? content[current] : {};
    const borderClassNames = [
      'border_line',
      'borderani-init',
      `${pageReady ? 'borderani' : ''}`
    ].join(' ');

    return (
      <div className="works_archives">
        <span className={borderClassNames} />
        <div className="works_logo">
          <Logo
            post={post}
            option={{
              translateY: [50, 0],
              opacity: [0, 1],
              easing: 'easeOutCubic',
              duration: 800
            }}
          />
        </div>
        <div className="works_view">
          <DeviceSection devices={eye_catch} />
          <Description post={post} />
          <ProjectCapture gallery={project_detail} />
          <Link to="/" className="Montserrat link_btn fade-init">
            <span className="arrow">BACK TO LIST</span>
          </Link>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps(state, ownProps) {
  const { post, initial, lang } = state;
  return { post, initial, lang, match: ownProps.match };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
