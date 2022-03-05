import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'styled/Mixins.styled'
import { PropTypes } from 'types/prop-types'

export const taskColors: PropTypes.TaskColorsInterface = {
  green: { static: '#7bc86c', hover: '#61bd4f' },
  yellow: { static: '#f5dd29', hover: '#f2d600' },
  orange: { static: '#ffaf3f', hover: '#ff9f1a' },
  red: { static: '#ef7564', hover: '#eb5a46' },
  purple: { static: '#cd8de5', hover: '#c377e0' },
  blue: { static: '#5ba4cf', hover: '#298fca' },
  cyan: { static: '#29cce5', hover: '#00c2e0' },
  lighgreen: { static: '#6deca9', hover: '#51e898' },
  pink: { static: '#ff8ed4', hover: '#ff78cb' },
  navy: { static: '#172b4d', hover: '#091e42' }
}

export const TaskPreviewContainer = styled(Link)<PropTypes.StyledTaskPreviewProps>`
  ${({ $taskPreviewStyling }) =>
    $taskPreviewStyling.cover.fullCover
      ? css`
          display: flex;
          flex-direction: row;
          min-height: 56px;
          background-color: ${taskColors[$taskPreviewStyling.cover.background].static};
        `
      : css`
          display: block;
          min-height: 20px;
          background-color: #fff;
        `};

  margin-bottom: 8px;

  max-width: 300px;

  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;

  filter: ${({ $taskPreviewStyling }) => ($taskPreviewStyling.isDragging ? 'drop-shadow(0 0 .5rem #000)' : '')};
  transform: ${({ $taskPreviewStyling }) =>
    $taskPreviewStyling.isDragging && $taskPreviewStyling.draggingTransform
      ? `${$taskPreviewStyling.draggingTransform} rotate(3deg)`
      : !$taskPreviewStyling.isDragging
      ? ''
      : $taskPreviewStyling.draggingTransform} !important;

  // TODO: Absolute position on drag might solve overlapping issue - needs calculation like placeholder
  // IF absolute positioning is used on this container, additional relatively positioned content's wrapper is a must
  /* position: ${({ $taskPreviewStyling }) => $taskPreviewStyling.isDragging && 'absolute'} !important; */

  text-decoration: none;
  position: relative;

  &:hover {
    background-color: ${({ $taskPreviewStyling }) => ($taskPreviewStyling.cover.fullCover ? taskColors[$taskPreviewStyling.cover.background].hover : '#f4f5f7')};
    border-bottom-color: #091e4240;

    span {
      visibility: visible;
    }
  }
`

export const TaskCover = styled.div<PropTypes.StyledProps>`
  height: 32px;
  border-radius: 3px 3px 0 0;

  background-color: ${({ styling }) => taskColors[styling!.background].static};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  user-select: none;
`

export const TaskEditIcon = styled.span<PropTypes.StyledProps>`
  cursor: pointer;
  box-sizing: content-box;
  position: absolute;
  top: 2px;
  right: 2px;

  border-radius: 3px;

  padding: 4px;

  opacity: 0.8;
  visibility: hidden;

  background-clip: padding-box;
  background-color: #f4f5f7;
  background-origin: initial;

  z-index: 30;

  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }

  &:hover {
    background-color: #ebecf0;
    opacity: 1;
  }
`

export const DraggingPlaceholder = styled.div`
  position: absolute;

  border-radius: 3px;

  background-color: #0000003d;
`
