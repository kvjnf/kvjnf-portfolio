import styled from "styled-components";
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { theme } from "../../../styles/global";

const TimeLineArrowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TimeLineDate = styled.span`
  color: #374054;
  ${theme.fontFamilies.default}
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
    top: -10px;
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

function TimeLineArrow({ start, end, animate }){
  end = end?? 'Present';

  return (
    <TimeLineArrowWrap>
      <TimeLineDate>{`${start} – ${end}`}</TimeLineDate>
      <FaIconWrapper>
        <FaIconRoundBG
          initial='initial'
          variants={arrow}
          animate={animate}
          as={motion.div}
        >
          <FaArrowIcon
            icon={faLocationDot}
          />
        </FaIconRoundBG>
      </FaIconWrapper>
    </TimeLineArrowWrap>
  )
}

TimeLineArrow.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
}

export default TimeLineArrow;