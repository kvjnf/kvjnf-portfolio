import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HoverableBtn from './partials/HoverableBtn';
import AboutMe from './partials/AboutMe';
import Experience from './partials/Experience';
import TopThumbnails from './partials/TopThumbnails';
import LoadingOverRay from './partials/details/LoadingOverray';
import Actions from '../actions';
import '../styles/top.scss';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { srcs: [] };
  }
  componentDidMount() {
    const { fetchPosts, fetchTop, fetchExperience, posts } = this.props;
    if (posts.contents.length === 0) {
      fetchPosts();
      fetchTop();
      fetchExperience();
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
    const experiences = this.props.experience.contents[current];

    return (
      <React.Fragment>
        <AboutMe content={content} />
        <Experience experiences={experiences} />
        <TopThumbnails posts={posts.contents} ready={isRemoved} />
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
        <section className="content-wrapper bgc-gray top-content">
          <span className={borderClassNames} />
          <HoverableBtn text="View CV" link="/resources/pdf/cv-daisukev2.pdf" />
        </section>
        <section className="works_contents">
          <LoadingOverRay
            ready={loadReady}
            srcs={this.state.srcs}
            makeSrcData={this.finishLoading.bind(this)}
          />
          {this.getTopContent()}
        </section>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ posts, initial, top, lang, experience }) {
  return { posts, initial, top, lang, experience };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
