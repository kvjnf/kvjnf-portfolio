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
    const { fetchTop, top } = this.props;

    if (top.posts.length === 0) {
      fetchTop();
    }
  }

  componentDidUpdate(prevProps) {
    const { setInitialReady } = this.props;
    const { loadReady } = this.props.initial;

    if (!loadReady) {
      setInitialReady();
    }
  }

  finishLoading() {
    const { posts } = this.props.top;
    const srcs = posts.map(post => {
      return post._embedded['wp:featuredmedia'][0].source_url;
    });

    this.setState({ srcs });
  }

  getTopContent() {
    const { loadReady, isRemoved } = this.props.initial;
    const { posts, about, experience } = this.props.top;
    if (!loadReady || posts.length === 0) {
      return null;
    }
    const { current } = this.props.lang;
    const content = about[current].acf;
    const experiences = experience[current];

    return (
      <React.Fragment>
        <AboutMe content={content} />
        <Experience experiences={experiences} />
        <TopThumbnails posts={posts} ready={isRemoved} />
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
      <div id="top-content">
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ initial, top, lang }) {
  return { initial, top, lang };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
