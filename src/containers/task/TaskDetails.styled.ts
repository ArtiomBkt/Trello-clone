import styled from 'styled-components'
import { PropTypes } from '../../types/prop-types'

export const TaskDetailsContainer = styled.div<PropTypes.StyledProps>`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;

  ${({ isFullCover }) => (isFullCover ? 'align-self: flex-end; width: 100%;' : '')};
`

export const TaskMembersContainer = styled.div<PropTypes.StyledProps>`
  ${({ isFullCover }) => isFullCover && 'display: none;'}

  align-self: flex-end;
  margin: 0 -2px 3px 0;
`
