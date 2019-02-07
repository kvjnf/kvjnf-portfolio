import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import Actions from '../../actions/';

const getWindowScrollPostion = () => {
  if (window.pageYOffset) return window.pageYOffset;
  return document.documentElement.clientHeight
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
};

function LanguageSelector(props) {
  const {
    changeLanguage,
    changeLanguageOpen,
    changeLanguageClose,
    fixedLangMenu,
    unfixedLangMenu,
    lang
  } = props;
  const activeBtn = [
    'Montserrat lang-btn transparent ui floating dropdown labeled search icon button',
    `${lang.open ? 'active visible' : ''}`,
    `${lang.fixed ? 'fixed' : ''}`
  ].join(' ');
  const dropClass = ['menu', `${lang.open ? 'transition visible' : ''}`].join(
    ' '
  );
  LanguageSelector.outSideClickEventHandler = () => changeLanguageClose();

  const addScrollEvent = ref => {
    let fixedFlag = false;
    let targetPosition = 0;
    window.addEventListener('scroll', () => {
      if (!ref) return;
      const baseY = getWindowScrollPostion();
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
  };

  return (
    <div
      ref={ref => addScrollEvent(ref)}
      className={activeBtn}
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
  );
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
