import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

import Picture from '../../Picture/Picture';

export type ThumbNail = {
  id: string;
  title: string;
  slug:string;
  src: string;
}
interface ImgProps extends LayoutProps{}
interface Props {
  slug: string;
  src: string;
  alt: string;
}

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
const Img = styled(Picture)<ImgProps>`
  ${layout}
`;

export default function ThumbNailsMini({ slug, src, alt }: Props) {
  return (
    <StyledLink to={`/detail/${slug}/`}>
      <Img width={1} maxWidth='fit-content' src={src} alt={alt} />
    </StyledLink>
  )
}
