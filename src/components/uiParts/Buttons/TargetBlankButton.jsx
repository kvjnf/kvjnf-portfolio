import PropTypes from 'prop-types';

function BlankLinkBtn({ text, link }) {
  return (
    <a
      href={link}
      className="Montserrat link_btn fade-init"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="arrow">{text}</span>
    </a>
  );
}

BlankLinkBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
};

export default BlankLinkBtn;
