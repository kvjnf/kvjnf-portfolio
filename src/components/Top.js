import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HoverableBtn from './partials/HoverableBtn';
import AboutMe from './partials/AboutMe';
import TopThumbnails from './partials/TopThumbnails';
import Actions from '../actions';
import LoadingOverRay from './partials/details/LoadingOverray';
import '../styles/top.scss';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { srcs: [] };
  }
  componentDidMount() {
    const { fetchPosts, fetchTop, posts } = this.props;
    if (posts.contents.length === 0) {
      fetchPosts();
      fetchTop();
    }
  }

  componentDidUpdate(prevProps) {
    const { setInitialReady } = this.props;
    const { loadReady } = this.props.initial;
    if (loadReady !== prevProps.initial.loadReady && !loadReady) {
      setInitialReady();
    }
  }

  finishLoading() {
    const { contents } = this.props.posts;
    const srcs = contents.map(post => {
      return post._embedded['wp:featuredmedia'][0].source_url;
    });

    this.setState({ srcs });
  }

  getTopContent() {
    const { loadReady, isRemoved } = this.props.initial;
    const { posts } = this.props;
    if (!loadReady || posts.contents.length === 0) {
      return null;
    }
    const { current } = this.props.lang;
    const content = this.props.top.content[current].acf;

    return (
      <React.Fragment>
        <h2 className="Montserrat upfade">MY WORKS</h2>
        <TopThumbnails posts={posts.contents} ready={isRemoved} />
        <AboutMe content={content} />
      </React.Fragment>
    );
  }

  render() {
    const { loadReady, isRemoved } = this.props.initial;
    const borderClassNames = [
      'border_line',
      'borderani-init',
      `${isRemoved ? 'borderani' : ''}`
    ].join(' ');
    return (
      <React.Fragment>
        <div className="content-wrapper bgc-gray">
          <span className={borderClassNames} />
          <HoverableBtn text="View CV" link="/resources/pdf/cv-daisukev2.pdf" />
        </div>
        <div className="works_contents content-wrapper">
          <LoadingOverRay
            ready={loadReady}
            srcs={this.state.srcs}
            makeSrcData={this.finishLoading.bind(this)}
          />
          {this.getTopContent()}
        </div>
      </React.Fragment>
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
