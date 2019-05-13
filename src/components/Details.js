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
  constructor(props) {
    super(props);
    this.state = { initial: false };
  }

  componentDidMount() {
    const { fetchPost } = this.props;
    const { id } = this.props.match.params;

    this.setState({ initial: true });
    fetchPost({ id });
  }

  renderDetailComponents() {
    const { current } = this.props.lang;
    const { content } = this.props.post;

    if (!Object.keys(content).length > 0) {
      return null;
    }

    const borderClassNames = [
      'border_line',
      'borderani-init',
      this.state.initial ? 'borderani' : ''
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
          />
        </div>
        <div className="works_view">
          <DeviceSection devices={content.eye_catch} />
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
    return (
      <div className="works_archives">{this.renderDetailComponents()}</div>
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
  const { post, lang } = state;
  return { post, lang, match: ownProps.match };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
