import styled from 'styled-components'
import { PropTypes } from '../../types/prop-types'

export const TaskDetailsContainer = styled.div<PropTypes.StyledProps>`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;

  ${({ isFullCover }) => (isFullCover ? 'align-self: flex-end; width: 100%;' : '')};
`
