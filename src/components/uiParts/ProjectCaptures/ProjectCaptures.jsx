import styled from 'styled-components'
import { theme } from '../../styles/global';
import Grid from '../Grid/Grid'

const StyledGrid = styled(Grid)`
  justify-items: center;
  align-content: space-between;

  grid-template-columns: 1fr 1fr;
  ${theme.media.md`
    grid-template-columns: 1fr;
  `}
`;

function ProjectCaptures({ lists }) {
  return (
    <StyledGrid
      gridColumn={2}
      gridGap={20}
      maxWidth={1000}
      py={60}
      px={15}
      margin='0 auto'
    >
      { lists }
    </StyledGrid>
  )
}

export default ProjectCaptures
