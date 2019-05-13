import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HoverableBtn from './partials/HoverableBtn';
import AboutMe from './partials/AboutMe';
import Experience from './partials/Experience';
import TopThumbnails from './partials/TopThumbnails';
import Actions from '../actions';
import '../styles/top.scss';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = { initial: false };
  }

  componentDidMount() {
    const { fetchTop, top } = this.props;
    this.setState({ initial: true });

    if (!top.posts.length > 0) {
      fetchTop();
    }
  }

  getTopContent() {
    const { posts, about, experience } = this.props.top;

    if (!posts.length > 0) {
      return null;
    }
    const { current } = this.props.lang;
    const content = about[current].acf;
    const experiences = experience[current];

    return (
      <React.Fragment>
        <AboutMe content={content} />
        <Experience experiences={experiences} />
        <TopThumbnails posts={posts} />
      </React.Fragment>
    );
  }

  render() {
    const borderClassNames = [
      'border_line',
      'borderani-init',
      this.state.initial ? 'borderani' : ''
    ].join(' ');

    return (
      <div id="top-content">
        <section className="content-wrapper bgc-gray top-content">
          <span className={borderClassNames} />
          <HoverableBtn text="View CV" link="/resources/pdf/cv-daisukev3.pdf" />
        </section>
        <section className="works_contents">{this.getTopContent()}</section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ top, lang }) {
  return { top, lang };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
