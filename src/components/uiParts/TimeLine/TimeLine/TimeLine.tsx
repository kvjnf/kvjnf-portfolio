import { useRef } from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from 'usehooks-ts';

import TimeLineArrow from '../TimeLineArrow/TimeLineArrow';
import TimeLineContent from '../TimeLineContent/TimeLineContent';
import { theme } from '../../../styles/global';

interface Props {
  date_start: string;
  date_end?: string;
  title: string;
  role: string;
  description: string;
  isLast: boolean;
}

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
  date_start,
  date_end = 'Present',
  title,
  role,
  description,
  isLast,
}: Props) {
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
        date_start={date_start} 
        date_end={date_end}
        animate={visible}
        />
      <TimeLineContent 
        title={title} 
        role={role} 
        description={description}
        isLast={isLast}
        animate={visible}
      />
    </TimeLineArticle>
  )
}
