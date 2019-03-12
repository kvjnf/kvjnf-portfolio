import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadImagesAll } from '../../../utils';
import Actions from '../../../actions';
import './../../../styles/loading-overray.scss';

class LoadingOverRay extends Component {
  componentDidUpdate(prevProps) {
    const { imgReady, isRemoved } = this.props.initial;
    const { makeSrcData, ready } = this.props;

    if (ready !== prevProps.ready && ready) {
      makeSrcData();
    }
    if (this.props.srcs !== prevProps.srcs) {
      this.removeLoaderAfterImagesLoaded();
    }
    if (imgReady && !isRemoved) {
      this.animateLoading();
    }
  }

  componentWillUnmount() {
    const { resetOverray } = this.props;
    resetOverray();
  }

  async removeLoaderAfterImagesLoaded() {
    const { srcs } = this.props;
    await loadImagesAll(srcs);
    const { setImagesReady } = this.props;
    setImagesReady();
  }

  animateLoading() {
    const { removeOverray } = this.props;
    setTimeout(() => {
      anime({
        targets: '#loading_overray',
        opacity: [1, 0],
        easing: 'easeOutCubic',
        duration: 200,
        complete: () => {
          removeOverray();
        }
      });
    }, 1000);
  }

  render() {
    const { isRemoved } = this.props.initial;
    const overrayClassNames = [`${isRemoved ? 'open' : ''}`].join(' ');
    return <div id="loading_overray" className={overrayClassNames} />;
  }
}

LoadingOverRay.propTypes = {
  makeSrcData: PropTypes.func,
  srcs: PropTypes.array,
  ready: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps(state) {
  const { initial } = state;
  return { initial };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingOverRay);
