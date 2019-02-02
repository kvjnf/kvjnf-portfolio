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

  render() {
    const { posts } = this.props;

    return (
      <div className="works_contents">
        <span className="border_line borderani-init borderani" />
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

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
