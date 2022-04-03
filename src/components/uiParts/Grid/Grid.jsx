import styled from "styled-components"
import { compose, layout, grid, space } from "styled-system"

const Grid = styled.div`
  display: grid;
  ${compose(
    layout,
    grid,
    space
  )}
`

export default Grid;
