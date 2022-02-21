import styled, { css } from 'styled-components'
// import { Link } from 'react-router-dom'
import { Icon } from '../../styled/Mixins.styled'
import { PropTypes } from '../../types/prop-types'

// export const TaskPreviewContainer = styled(Link)<PropTypes.StyledProps>`
export const TaskPreviewContainer = styled.a<PropTypes.StyledProps>`
  display: ${({ style }) => (style?.fullCover ? 'flex' : 'block')};
  flex-direction: ${({ style }) => (style?.fullCover ? 'row' : '')};

  cursor: pointer;

  margin-bottom: 8px;
  max-width: 300px;
  min-height: ${({ style }) => (style?.fullCover ? '56px' : '20px')};

  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;

  background-color: ${({ style }) => style?.background || '#fff'};
  position: relative;

  text-decoration: none;
  z-index: 0;

  &:hover {
    background-color: ${({ style }) => (style?.background === '#ef7564' ? '#eb5a46' : '#f4f5f7')};
    border-bottom-color: #091e4240;

    span {
      visibility: visible;
    }
  }
`

export const TaskCover = styled.div<PropTypes.StyledProps>`
  height: 32px;
  border-radius: 3px 3px 0 0;

  background-color: ${({ style }) => style?.background};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  user-select: none;
`

export const TaskEditIcon = styled.span<PropTypes.StyledProps>`
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
