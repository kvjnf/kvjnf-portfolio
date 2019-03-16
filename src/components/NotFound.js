import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../actions';

import './../styles/common.scss';
import './../styles/not-found.scss';

class NotFound extends Component {
  componentDidMount() {
    const { setInitialReady } = this.props;
    setInitialReady();
  }

  componentDidUpdate(prevProps) {
    const { initial } = this.props;
    const preInitial = prevProps.initial;
    if (initial.loadReady !== preInitial.loadReady && initial.loadReady) {
      const { removeOverray, setImagesReady } = this.props;
      setImagesReady();
      setTimeout(() => {
        removeOverray();
      }, 10);
    }
  }

  componentWillUnmount() {
    const { resetOverray } = this.props;
    resetOverray();
  }

  render() {
    return (
      <div id="not-found">
        <h2>404 NOT FOUND</h2>
      </div>
    );
  }
}

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
)(NotFound);
