import AboutSection from '../../../uiParts/AboutSection/AboutSection';

export default function About() {
  const title = 'I’m into web developing.';
  const description = `Experienced Web developer with over 5 years of experience, strong knowledge and use of open source technologies.
  My client work examples are the following:
  - E-commerce web sites developing
  - HTML5 Web Midi Contlloer Application
  - Corporates' Instagram and products data management web application
  - Corporates' Web sites

  Skills :
  Javascript (ES6), jQuery, React.js, Redux.js, PHP 7+, MySQL 5.7+, Laravel 5.5, Wordpress 5, Sass, HTML5, webpack, gulp, Docker, Vagrant, ansible, AWS(EC2, ECR, Route 53, SES), ECCUBE 3
  `;

  return (
    <AboutSection 
      title={title}
      description={description}
    />
  )
}
