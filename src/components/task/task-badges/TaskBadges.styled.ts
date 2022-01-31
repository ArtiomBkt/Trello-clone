import styled, { css } from 'styled-components'
import IconProps from '../../../interfaces/IconProps'
import { Icon } from '../../../styled/Mixins.styled'

export const BadgesWrapper = styled.div`
  float: left;
  margin-left: -2px;
  max-width: 100%;
`

type containerProps = {
  isDone?: boolean
}

export const BadgeContainer = styled.div<containerProps>`
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

  ${({ isDone }) => isDone ? 'background-color: green;' : ''}
`

export const BadgeIcon = styled.span`
  color: #6b778c;
  vertical-align: top;

  ${({ size }: IconProps) => Icon(size)}

  &:before {
    ${({ content }: IconProps) =>
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
