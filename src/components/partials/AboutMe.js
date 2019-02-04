import React from 'react';
require('./../../styles/about.scss');

const AboutMe = () => {
  return (
    <div className="about_contents">
      <h2 className="Montserrat upfade-init">ABOUT ME</h2>
      <p className="en Montserrat upfade-init">I’m into web developing.</p>
      <p className="readtxt upfade-init">
        web業界の職務経歴は現在6年目となりまして、主な業務として、フロントエンド、バックエンドロジックの実装、などをしております。
        webエンジニアとして心がけている事は、お客様の要望を実現しつつ、保守性の高いコードを書くように制作することです。
        後の拡張性を考えながら制作をすることで、改修のご要望を頂いた際にも素早く対応できるように心がけています。
        プログラミング業務以外では、お客様との要件定義などディレクション業務にも携わっておりました。
      </p>
    </div>
  );
};

export default AboutMe;
