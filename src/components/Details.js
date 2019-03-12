import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actions from '../actions';
import LoadingOverRay from './partials/details/LoadingOverray';
import { loadImagesAll } from '../utils';
import './../styles/common.scss';
import './../styles/detail.scss';

import Logo from './partials/Logo';
import DeviceSection from './partials/details/DeviceSection';
import Description from './partials/details/Description';
import ProjectCapture from './partials/details/ProjectCaptures';

class Details extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  componentDidMount() {
    const { fetchPost } = this.props;
    const { id } = this.props.match.params;
    this._isMounted = true;
    this._isMounted && fetchPost({ id });
  }

  componentDidUpdate() {
    const { setImagesLoading } = this.props;
    const { loadReady, imgReady, isImageLoading } = this.props.initial;
    if (loadReady && !imgReady && !isImageLoading) {
      setImagesLoading();
      this.finishLoading();
    }
  }

  componentWillUnmount() {
    const { resetOverray } = this.props;
    resetOverray();
    this._isMounted = false;
  }

  async removeLoaderAfterImagesLoaded(srcs) {
    await loadImagesAll(srcs);
    const { setImagesReady } = this.props;
    setImagesReady();
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
    this.removeLoaderAfterImagesLoaded(srcs);
  }

  renderDetailComponents() {
    const { removeOverray } = this.props;
    const { current } = this.props.lang;
    const { content } = this.props.post;
    const { loadReady, imgReady, isRemoved } = this.props.initial;
    const borderClassNames = [
      'border_line',
      'borderani-init',
      `${isRemoved ? 'borderani' : ''}`
    ].join(' ');

    if (!loadReady) {
      return null;
    }

    if (content.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        <LoadingOverRay
          ready={imgReady}
          isRemoved={isRemoved}
          remove={removeOverray}
        />
        <div className="works_archives">
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
        </div>
      </React.Fragment>
    );
  }

  render() {
    return this.renderDetailComponents();
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
