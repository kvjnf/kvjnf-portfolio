import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../../styles/global';

const AnimationVerticalBorder = styled(motion.span)`
  display: block;
  position: absolute;
  left: 50%;
  top: -25px;
  content: "";
  width: 2px;
  background-color: ${theme.colors.black};
`;

function VerticalBorder({ control }) {
  return (
    <AnimationVerticalBorder
      animate={control}
    />
  )
}

export default VerticalBorder