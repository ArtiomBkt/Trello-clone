import styled, { css } from 'styled-components'
// import { Link } from 'react-router-dom'
import { Icon } from '../../styled/Mixins.styled'
import { PropTypes } from '../../types/prop-types'

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

// export const TaskPreviewContainer = styled(Link)<PropTypes.StyledProps>`
export const TaskPreviewContainer = styled.div<PropTypes.StyledProps>`
  ${({ styling }) =>
    styling?.fullCover
      ? css`
          display: flex;
          flex-direction: row;
          min-height: 56px;
          background-color: ${taskColors[styling.background].static};
        `
      : css`
          display: block;
          min-height: 20px;
          background-color: #fff;
        `};

  cursor: pointer;
  margin-bottom: 8px;
  max-width: 300px;

  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;

  position: relative;

  text-decoration: none;
  z-index: 0;

  &:hover {
    background-color: ${({ styling }) => (styling?.fullCover ? taskColors[styling.background].hover : '#f4f5f7')};
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
