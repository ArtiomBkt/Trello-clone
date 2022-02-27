import styled, { css } from 'styled-components'
import { PropTypes } from '../../../types/prop-types'
import { Icon } from '../../../styled/Mixins.styled'

export const BadgesWrapper = styled.div<PropTypes.StyledProps>`
  ${({ isFullCover }) => isFullCover && 'display: none;'}

  float: left;
  margin-left: -2px;
  max-width: 100%;
`

export const BadgeDueUnchecked = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}
  display: none;
  vertical-align: top;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const BadgeDueChecked = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}
  display: none;
  vertical-align: top;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const BadgeIcon = styled.span<PropTypes.StyledProps>`
  color: ${({ content }) => (content === '\\e91b' ? '#fff' : '#6b778c')};
  vertical-align: top;

  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

const handleDueStatus = (dueStatus: PropTypes.StyledProps['dueStatus']) => {
  switch (dueStatus) {
    case 'overdue':
      return { static: '#ec9488', hover: '#eb5a46', text: '#fff' }
    case 'duesoon':
      return { static: '#f2d600', hover: '#d9b51c', text: '#fff' }
    default:
      return
  }
}

export const BadgeContainer = styled.div<PropTypes.StyledProps>`
  display: inline-block;
  position: relative;

  padding: 2px;
  margin: 0 4px 4px 0;
  max-width: 100%;
  min-height: 20px;

  border-radius: 3px;

  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: top;

  color: #5e6c84;

  ${({ isDone, dueStatus }) =>
    isDone
      ? css`
          background-color: #61bd4f;

          & > * {
            color: #fff;
          }
        `
      : css`
          background-color: ${handleDueStatus(dueStatus)?.static};

          & > * {
            color: ${handleDueStatus(dueStatus)?.text};
          }
        `}

  ${({ isDateBadge, isDone, dueStatus }) =>
    isDateBadge &&
    css`
      &:hover {
        background-color: ${isDone ? '#519839' : handleDueStatus(dueStatus)?.hover};

        span:nth-child(3) {
          display: none;
        }

        ${isDone
          ? css`
              span:nth-child(2) {
                display: inline-block;
              }
            `
          : css`
              span:first-child {
                display: inline-block;
              }
            `}
      }
    `}
`

export const BadgeText = styled.span`
  font-size: 12px;
  padding: 0 4px 0 2px;
  vertical-align: top;
  white-space: nowrap;
`
