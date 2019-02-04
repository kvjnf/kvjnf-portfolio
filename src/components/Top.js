import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AboutMe from './partials/AboutMe';
import TopThumbnails from './partials/TopThumbnails';
import Actions from '../actions';
import '../styles/top.scss';

class Top extends Component {
  componentDidMount() {
    const { fetchPosts, posts } = this.props;
    if (posts.contents.length === 0) {
      fetchPosts();
    }
  }

  componentDidUpdate() {
    const { setInitialReady, posts, initial } = this.props;
    if (!initial.pageReady && Object.keys(posts.contents).length > 0) {
      setInitialReady();
      return;
    }
  }

  componentWillUnmount() {
    this.props.unsetInitialReady();
  }

  render() {
    const { posts } = this.props;
    const { pageReady } = this.props.initial;
    const borderClassNames = [
      'border_line',
      'borderani-init',
      `${pageReady ? 'borderani' : ''}`
    ].join(' ');

    return (
      <div className="works_contents">
        <span className={borderClassNames} />
        <h2 className="Montserrat upfade">MY WORKS</h2>
        <TopThumbnails posts={posts.contents} />
        <AboutMe />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ posts, initial }) {
  return { posts, initial };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
