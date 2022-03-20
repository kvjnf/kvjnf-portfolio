import styled from "styled-components";
import { PropTypes } from 'prop-types';

const Content = styled.div`
  background: #fff;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
  padding: 15px;
  border-radius: 3px;
  text-align: left;
  max-width: 590px;
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

function TimeLineContent ({ title, roll, description}) {

  return (
    <Content>
      <Title>{title}</Title>
      <Roll>{roll}</Roll>
      <Description>{description}</Description>
    </Content>
  )
}

TimeLineContent.propTypes = {
  title: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TimeLineContent;