import styled from "styled-components";
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #021521;
  border-radius: 50%;
  position: relative;

  ${theme.media.lg`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: -10px;
  `}

  &::before {
    position: absolute;
    content: "";
    top: 0;
    width: 2.5px;
    background: #021521;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const FaArrowIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  height: 1.8rem;

  ${theme.media.lg`
    height: 1.5rem;
  `}
`;

function TimeLineArrow({ start, end }){
  end = end?? 'Present';

  return (
    <TimeLineArrowWrap>
      <TimeLineDate>{`${start} – ${end}`}</TimeLineDate>
      <FaIconWrapper>
        <FaArrowIcon icon={faLocationDot} />
      </FaIconWrapper>
    </TimeLineArrowWrap>
  )
}

TimeLineArrow.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
}

export default TimeLineArrow;