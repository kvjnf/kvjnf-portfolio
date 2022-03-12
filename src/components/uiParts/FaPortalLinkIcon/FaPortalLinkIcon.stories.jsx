import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { FaPortalLinkIcon } from './FaPortalLinkIcon';

export default {
  title: 'UIParts/Fa',
  component: FaPortalLinkIcon,
}

const Template = (args) => <FaPortalLinkIcon {...args} />

export const FaGithubIcon = Template.bind({});
FaGithubIcon.args = {
  faIcon: faGithub,
  bgc: '#000000',
  link: 'https://github.com/kvjnf/kvjnf-portfolio',
}

export const FaLinkedInIcon = Template.bind({});
FaLinkedInIcon.args = {
  faIcon: faLinkedinIn,
  bgc: '#0073b1',
  link: 'https://www.linkedin.com/in/daisuke-akiyama-5b0222120/'
}