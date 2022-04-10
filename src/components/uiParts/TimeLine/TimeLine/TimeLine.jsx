import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import TimeLineArrow from '../TimeLineArrow/TimeLineArrow';
import TimeLineContent from '../TimeLineContent/TimeLineContent';
import { theme } from '../../../styles/global';
import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

const TimeLineArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;

  ${theme.media.lg`
    flex-direction: column;
    row-gap: 10px;
    padding-left: 50px;
  `}
`;

export default function TimeLine ({ 
  start,
  end,
  title,
  roll,
  description,
  isLast,
}) {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    freezeOnceVisible: true
  })
  const visible = !!entry?.isIntersecting ? 'visible' : '';
  
  return (
    <TimeLineArticle ref={ref}>
      <TimeLineArrow 
        start={start} 
        end={end}
        animate={visible}
        />
      <TimeLineContent 
        title={title} 
        roll={roll} 
        description={description}
        isLast={isLast}
        animate={visible}
      />
    </TimeLineArticle>
  )
}

TimeLine.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  title: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool
};

TimeLine.defaultProps = {
  end: null,
}
