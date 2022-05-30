import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { theme } from "../../../styles/global";
import { format, parseISO } from 'date-fns';

interface Props {
  date_start: string;
  date_end?: string;
  animate: 'visible' | '';
}

const TimeLineArrowWrap = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  justify-content: space-between;
`;
const TimeLineDate = styled.span`
  color: #374054;
  font-family: ${props => props.theme.fontFamilies.default.fontFamily};
  font-size: ${props => props.theme.fontFamilies.default.fontSize};
`;
const FaIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #021521;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.media.lg`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: -8px;
  `}
`;
const FaIconRoundBG = styled.div`
  width: 40px;
  height: 40px;
  background: #021521;
  border-radius: 50%;
  position: relative;

  ${theme.media.lg`
    width: 30px;
    height: 30px;
  `}
`;
const FaArrowIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  height: 1.8rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  margin: auto;

  ${theme.media.lg`
    height: 1.5rem;
  `}
`;
const arrow = {
  initial: {
    opacity: 0,
    y: -5
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

export default function TimeLineArrow({ 
  date_start,
  date_end = 'Present',
  animate 
}: Props){
  return (
    <TimeLineArrowWrap>
      <TimeLineDate>
        {`${format(parseISO(date_start), 'dd.MM.yyyy')} – ${date_end === 'Present' ? date_end: format(parseISO(date_end), 'dd.MM.yyyy')}`}
      </TimeLineDate>
      <FaIconWrapper>
        <FaIconRoundBG
          initial='initial'
          variants={arrow}
          animate={animate}
          as={motion.div}
        >
          <FaArrowIcon icon={faLocationDot as IconProp} />
        </FaIconRoundBG>
      </FaIconWrapper>
    </TimeLineArrowWrap>
  )
}
