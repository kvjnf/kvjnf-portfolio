import styled from "styled-components";
import { motion } from 'framer-motion';

import { theme } from "../../../styles/global";
import { nl2br } from "../../../utils";

const Content = styled.div`
  max-width: 590px;
  width: 100%;
  position: relative;
`;
const ContentInner = styled.div`
  background: #fff;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
  padding: 15px;
  border-radius: 3px;
  text-align: left;
`;
const LineBar = styled.div`
  position: absolute;
  width: 4px;
  top: 40px;
  bottom: 0;
  background-color: #021521;
  left: -47px;
  z-index: 2;

  ${theme.media.lg`
    left: -32px;
    top: -1px;
  `}
`;
const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 300;
  display: inline-block;
  margin-bottom: 8px;
`;
const Roll = styled.h4`
  font-size: 1.2em;
  font-weight: 300;
  color: #7e8890;
  margin: 0 0 15px 0;
`;
const Description = styled.p`
  font-size: 0.9em;
  margin: 0;
`;
const content = {
  initial: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5
    }
  }
}

interface Props {
  title: string;
  role: string;
  description: string;
  animate: 'visible' | '';
  isLast: boolean;
}

export default function TimeLineContent ({ 
  title,
  role,
  description,
  animate,
  isLast
}: Props) {
  const bar = {
    initial: {
      bottom: '100%',
    },
    visible: {
      bottom: isLast ? '0%' : '-20%',
      transition: {
        duration: 4,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }

  return (
    <Content>
      <LineBar 
        variants={bar}
        initial='initial'
        animate={animate}
        as={motion.div}
      />
      <ContentInner
        variants={content}
        initial='initial'
        animate={animate}
        as={motion.div}
      >
        <Title>{title}</Title>
        <Roll>{role}</Roll>
        <Description>{nl2br(description)}</Description>
      </ContentInner>
    </Content>
  )
}
