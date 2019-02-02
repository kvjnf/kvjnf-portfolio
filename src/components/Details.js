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
    if (Object.keys(this.props.post.content).length > 0) {
      return;
    }
    const { fetchPost } = this.props;
    const { id } = this.props.match.params;

    fetchPost({ id });
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    const prevId = prevProps.match.params.id;

    if (id !== prevId) {
      const { fetchPost } = this.props;
      fetchPost({ id });
    }
  }

  render() {
    const { content } = this.props.post;
    const { eye_catch = {} } = content;
    const { project_detail = [] } = content;

    return (
      <div className="works_archives">
        <span className="border_line borderani-init borderani" />
        <div className="works_logo">
          <Logo post={content} />
        </div>
        <div className="works_view">
          <DeviceSection devices={eye_catch} />
          <Description post={content} />
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
  return { post: state.post, match: ownProps.match };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
