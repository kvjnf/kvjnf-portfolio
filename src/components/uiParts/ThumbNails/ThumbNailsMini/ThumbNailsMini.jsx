import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import { layout } from 'styled-system';
import Picture from '../../Picture/Picture';

const StyledLink = styled(Link)`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 300px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: box-shadow .3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 18px rgb(0 0 0 / 12%);
  }
`;

const Img = styled(Picture)`
  ${layout}
`;

const ThumbNailsMini = ({ slug, src, alt }) => {
  return (
    <StyledLink to={`/detail/${slug}/`}>
      <Img width={1} maxWidth='fit-content' src={src} alt={alt} />
    </StyledLink>
  )
}

ThumbNailsMini.propTypes = {
  slug: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ThumbNailsMini