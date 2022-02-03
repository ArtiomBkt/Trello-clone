import styled, { css } from 'styled-components'
import IconProps from '../../../interfaces/IconProps'
import { Icon } from '../../../styled/Mixins.styled'

export const TaskComposerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
`

export const TaskComposerToggler = styled.a`
  display: block;
  flex: 1 0 auto;

  color: #5e6c84;

  margin: 2px 8px 8px 8px;
  padding: 4px 8px;

  position: relative;

  border-radius: 3px;
  user-select: none;

  &:hover {
    background-color: #091e4214;
    color: #172b4d;
  }
`

export const TaskComposerIcon = styled.span<IconProps>`
  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`
