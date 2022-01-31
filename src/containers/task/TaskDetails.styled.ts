import styled from 'styled-components'

type TaskDetailsProps = {
  isFullCover?: boolean
}

export const TaskDetailsContainer = styled.div<TaskDetailsProps>`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;

  ${({ isFullCover }) => isFullCover ? 'align-self: flex-end; width: 100%;' : ''};
`