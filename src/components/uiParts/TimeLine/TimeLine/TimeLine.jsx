import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import TimeLineArrow from '../TimeLineArrow/TimeLineArrow';
import TimeLineContent from '../TimeLineContent/TimeLineContent';
import { theme } from '../../../styles/global';

const TimeLineArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  ${theme.media.lg`
    flex-direction: column;
    row-gap: 10px;
    padding-left: 50px;
    position: relative;
  `}
`;

function TimeLine ({ id, start, end, title, roll, description }) {
  return (
    <TimeLineArticle id={`time-line-article-${id}`}>
      <TimeLineArrow start={start} end={end}/>
      <TimeLineContent 
        title={title} 
        roll={roll} 
        description={description}/>
    </TimeLineArticle>
  )
}

TimeLine.propTypes = {
  id: PropTypes.number.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  title: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

TimeLine.defaultProps = {
  end: null,
}

export default TimeLine;