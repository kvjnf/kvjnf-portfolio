import styled from "styled-components"
import { compose, layout, grid, space, LayoutProps, GridProps, SpaceProps } from "styled-system"

interface GridLayoutProps extends LayoutProps, GridProps, SpaceProps {}

const Grid = styled.div<GridLayoutProps>`
  display: grid;
  ${compose(
    layout,
    grid,
    space
  )}
`

export default Grid;
