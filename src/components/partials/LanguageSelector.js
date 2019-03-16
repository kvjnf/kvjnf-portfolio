import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import Actions from '../../actions/';

class LanguageSelector extends Component {
  componentDidMount() {
    const priorityLang = this.getPriorityLanguage();
    const { changeLanguage, lang } = this.props;
    if (priorityLang === 'ja-JP' && !lang.changed) {
      changeLanguage({ language: 'ja' });
    }
  }

  getPriorityLanguage() {
    return (
      (window.navigator.languages && window.navigator.languages[0]) ||
      window.navigator.language ||
      window.navigator.userLanguage ||
      window.navigator.browserLanguage
    );
  }

  getWindowScrollPostion = () => {
    if (window.pageYOffset) return window.pageYOffset;
    return document.documentElement.clientHeight
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  };

  addScrollEvent(ref) {
    let fixedFlag = false;
    let targetPosition = 0;
    const { fixedLangMenu, unfixedLangMenu } = this.props;

    window.addEventListener('scroll', () => {
      if (!ref) return;
      const baseY = this.getWindowScrollPostion();
      let targetY = ref.getBoundingClientRect().top + window.pageYOffset;

      if (!fixedFlag && baseY > targetY) {
        fixedLangMenu();
        targetPosition = targetY;
        fixedFlag = true;
      }

      if (fixedFlag && baseY < targetPosition) {
        unfixedLangMenu();
        fixedFlag = false;
        targetPosition = 0;
      }
    });
  }

  render() {
    const {
      changeLanguage,
      changeLanguageOpen,
      changeLanguageClose,
      lang
    } = this.props;

    const activeBtn = [
      lang.fixed ? 'fixed' : '',
      `${lang.open ? 'active visible' : ''}`
    ].join(' ');
    const dropClass = ['menu', `${lang.open ? 'transition visible' : ''}`].join(
      ' '
    );
    LanguageSelector.outSideClickEventHandler = () => changeLanguageClose();

    return (
      <div
        id="lang"
        className={activeBtn}
        ref={ref => this.addScrollEvent(ref)}
      >
        <div
          className="Montserrat lang-btn transparent ui floating dropdown labeled search icon button"
          onClick={() =>
            !lang.open ? changeLanguageOpen() : changeLanguageClose()
          }
        >
          <i className="world icon transparent" />
          <span className="text Montserrat">{lang.current.toUpperCase()}</span>
          <div className={dropClass}>
            <div
              className="item"
              onClick={() => changeLanguage({ language: 'ja' })}
            >
              <i className="flag-icon flag-icon-jp" />
              JAPANESE
            </div>
            <div
              className="item"
              onClick={() => changeLanguage({ language: 'en' })}
            >
              <i className="flag-icon flag-icon-us" />
              ENGLISH
            </div>
            <div
              className="item"
              onClick={() => changeLanguage({ language: 'de' })}
            >
              <i className="flag-icon flag-icon-de" />
              DEUTSCH
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ lang }) {
  return { lang };
}

const configClickOutSide = {
  handleClickOutside: () => LanguageSelector.outSideClickEventHandler
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(LanguageSelector, configClickOutSide));
