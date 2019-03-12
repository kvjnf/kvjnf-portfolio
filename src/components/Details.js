import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actions from '../actions';
import LoadingOverRay from './partials/details/LoadingOverray';
import './../styles/common.scss';
import './../styles/detail.scss';

import Logo from './partials/Logo';
import DeviceSection from './partials/details/DeviceSection';
import Description from './partials/details/Description';
import ProjectCapture from './partials/details/ProjectCaptures';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { srcs: [] };
  }

  componentDidMount() {
    const { fetchPost } = this.props;
    const { id } = this.props.match.params;
    fetchPost({ id });
  }

  finishLoading() {
    const { current } = this.props.lang;
    const { content } = this.props.post;
    const { eye_catch } = content;
    let srcs = [
      content[current]._embedded['wp:featuredmedia'][0].source_url,
      eye_catch.pc.full_image_url
    ];
    if (eye_catch.sp) {
      srcs = [...srcs, eye_catch.sp.full_image_url];
    }

    this.setState({ srcs });
  }

  renderDetailComponents() {
    const { loadReady, isRemoved } = this.props.initial;
    const { current } = this.props.lang;
    const { content } = this.props.post;

    if (!loadReady || Object.keys(content).length === 0) {
      return null;
    }

    const borderClassNames = [
      'border_line',
      'borderani-init',
      `${isRemoved ? 'borderani' : ''}`
    ].join(' ');

    return (
      <React.Fragment>
        <span className={borderClassNames} />
        <div className="works_logo">
          <Logo
            key={content[current].id}
            post={content[current]}
            option={{
              translateY: [20, 0],
              opacity: [0, 1],
              easing: 'easeOutCubic',
              duration: 800
            }}
            ready={isRemoved}
          />
        </div>
        <div className="works_view">
          <DeviceSection devices={content.eye_catch} ready={isRemoved} />
          <Description post={content[current]} />
          <ProjectCapture gallery={content.project_detail} />
          <Link to="/" className="Montserrat link_btn fade-init">
            <span className="arrow">BACK TO LIST</span>
          </Link>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { loadReady } = this.props.initial;
    return (
      <div className="works_archives">
        <LoadingOverRay
          ready={loadReady}
          srcs={this.state.srcs}
          makeSrcData={this.finishLoading.bind(this)}
        />
        {this.renderDetailComponents()}
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
