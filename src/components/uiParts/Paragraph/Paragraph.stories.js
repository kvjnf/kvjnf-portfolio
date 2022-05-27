import Paragraph from './Paragraph';

export default {
  title: 'UIParts/Paragraph',
  component: Paragraph
}

const Template = (args) => <Paragraph {...args} /> 
export const TextParagraph = Template.bind({});
TextParagraph.args = {
  texts: "Experienced Web developer with over 5 years of experience, strong knowledge and use of open source technologies.\r\nMy client work examples are the following:\r\n- E-commerce web sites developing\r\n- HTML5 Web Midi Contlloer Application\r\n- Corporates' Instagram and products data management web application\r\n- Corporates' Web sites\r\n\r\nSkills :\r\nJavascript (ES6), jQuery, React.js, Redux.js, PHP 7+, MySQL 5.7+, Laravel 5.5, Wordpress 5, Sass, HTML5, webpack, gulp, Docker, Vagrant, ansible, AWS(EC2, ECR, Route 53, SES), ECCUBE 3"
}