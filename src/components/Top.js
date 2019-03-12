import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AboutMe from './partials/AboutMe';
import TopThumbnails from './partials/TopThumbnails';
import Actions from '../actions';
import LoadingOverRay from './partials/details/LoadingOverray';
import { loadImagesAll } from '../utils';
import '../styles/top.scss';

class Top extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }
  componentDidMount() {
    const { fetchPosts, fetchTop, posts } = this.props;
    this._isMounted = true;
    if (posts.contents.length === 0 && this._isMounted) {
      fetchPosts();
      fetchTop();
    }

    const { setInitialReady } = this.props;
    if (posts.contents.length > 0 && this._isMounted) {
      setInitialReady();
    }
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
    const { contents } = this.props.posts;

    const srcs = contents.map(post => {
      return post._embedded['wp:featuredmedia'][0].source_url;
    });

    this.removeLoaderAfterImagesLoaded(srcs);
  }

  render() {
    const { loadReady, imgReady, isRemoved } = this.props.initial;
    if (!loadReady) {
      return null;
    }
    if (this.props.posts.contents.length === 0) {
      return null;
    }
    const { posts, removeOverray } = this.props;
    const { current } = this.props.lang;
    const content = this.props.top.content[current].acf;

    const borderClassNames = [
      'border_line',
      'borderani-init',
      `${loadReady ? 'borderani' : ''}`
    ].join(' ');

    return (
      <div className="works_contents">
        <LoadingOverRay
          ready={imgReady}
          isRemoved={isRemoved}
          remove={removeOverray}
        />
        <span className={borderClassNames} />
        <h2 className="Montserrat upfade">MY WORKS</h2>
        <TopThumbnails posts={posts.contents} ready={isRemoved} />
        <AboutMe content={content} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ posts, initial, top, lang }) {
  return { posts, initial, top, lang };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
