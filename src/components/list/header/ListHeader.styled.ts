import styled, { css } from 'styled-components'
import { Icon } from '../../../styled/Mixins.styled'
import IconProps from '../../../interfaces/IconProps'

export const ListTitle = styled.div`
  flex: 0 0 auto;
  position: relative;
  min-height: 20px;
  padding: 10px 8px;
  padding-right: 36px;
`

export const ListHeaderTarget = styled.div`
  position: absolute;
  inset: 0;
  cursor: pointer;
`

export const ListHeaderNameAssist = styled.h2`
  display: none;
  margin: 0 0 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`

export const ListHeaderNameInput = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 28px;
  resize: none;
  background: #0000;
  box-shadow: none;
  font-weight: 600;
  margin: -4px 0;
  max-height: 256px;
  min-height: 20px;
  padding: 4px 8px;
`

export const ListHeaderOpts = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 1;
`

export const HeaderOptsBtn = styled.a`
  border-radius: 3px;
  color: #6b778c;
  padding: 6px;

  &:hover {
    background-color: #091e4214;
  }

  ${({ size }: IconProps) => Icon(size)}

  &:before {
    ${({ content }: IconProps) =>
      css`
        content: ${content};
      `}
  }
`
