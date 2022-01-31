import styled, { css } from 'styled-components'
import IconProps from '../../../interfaces/IconProps'
import { Icon } from '../../../styled/Mixins.styled'

type WrapperProps = {
  isFullCover?: boolean
}

export const BadgesWrapper = styled.div<WrapperProps>`
  ${({ isFullCover }) => isFullCover ? 'display: none;' : ''}

  float: left;
  margin-left: -2px;
  max-width: 100%;
`

type ContainerProps = {
  isDone?: boolean
  isDateBadge?: boolean
}

export const BadgeContainer = styled.div<ContainerProps>`
  display: inline-block;
  position: relative;

  padding: 2px;
  margin: 0 4px 4px 0;
  max-width: 100%;
  min-height: 20px;

  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: top;

  color: #5e6c84;

  ${({ isDone }) => (isDone ? 'background-color: green;' : '')}

  ${({ isDateBadge }) =>
    isDateBadge
      ? css`
          &:hover {
            background-color: #ebecf0;
            border-radius: 3px;
          }
        `
      : ''}
`

export const BadgeIcon = styled.span<IconProps>`
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

export const BadgeText = styled.span`
  font-size: 12px;
  padding: 0 4px 0 2px;
  vertical-align: top;
  white-space: nowrap;
`
