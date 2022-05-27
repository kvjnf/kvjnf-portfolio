import styled from 'styled-components';
import { motion, AnimationControls } from 'framer-motion';

interface Props {
  control: AnimationControls;
}

const AnimationVerticalBorder = styled(motion.span)`
  display: block;
  position: absolute;
  left: 50%;
  top: -25px;
  content: "";
  width: 2px;
  background-color: ${(props) => props.theme.colors.black};
`;

export default function VerticalBorder({ control }: Props) {
  return (
    <AnimationVerticalBorder
      animate={control}
    />
  )
}
