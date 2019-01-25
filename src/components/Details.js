import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./../styles/detail.scss');

class Details extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="works_archives">
        <span className="border_line borderani-init borderani"></span>
        <div className="works_logo">
          <picture className="upfade-init">
            <source media="(min-width: 768px)" srcSet="/img/pc_mhd_logo.png" />
            <source media="(min-width: 321px)" srcSet="/img/sp_mhd_logo.png" />
            <img src="/img/pc_mhd_logo.png" />
          </picture>
        </div>
        <div className="works_view">
          <div className="device_section">
              <img className="display displayfade-init" src="/works/archives01/display.png" alt="" />
              <picture>
                <source media="(min-width: 768px)" srcSet="/works/archives01/iphone.png" />
                <source media="(max-width: 767px)" srcSet="/works/archives01/sp_iphone.png" />
                <img className="iphone iphonefade-init" src="/works/archives01/iphone.png" alt="" />
              </picture>
              <img className="macbook macbookfade-init" src="/works/archives01/macbook.png" alt="" />
          </div>

          <div className="works_desc">
            <div className="in_wrap fade-init">
              <h2>MHD モエ ヘネシー ディアジオ コーポレートサイト</h2>
              <div className="note">
                <p>Client：MHD モエ ヘネシー ディアジオ</p>
                <p>Art direction</p>
                <p>DesignTechnical Direction / Development</p>
              </div>
              <Link to="//www.mhdkk.com/" className="Montserrat link_btn viewsite_btn" target="_blank"><span>VIEW WEBSITE</span></Link>
            </div>
          </div>
          <div className="screen">
            <div className="in_wrap flex_layout">
              <div className="item L-oblique-init">
                <img src="/works/archives01/screen01.jpg" />
              </div>
              <div className="item R-oblique-init">
                <img src="/works/archives01/screen02.jpg" />
              </div>
              <div className="item L-oblique-init">
                <img src="/works/archives01/screen03.jpg" />
              </div>
              <div className="item R-oblique-init">
                <img src="/works/archives01/screen04.jpg" />
              </div>
            </div>
          </div>
          <Link to="/" className="Montserrat link_btn fade-init">
            <span className="arrow">BACK TO LIST</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Details;
