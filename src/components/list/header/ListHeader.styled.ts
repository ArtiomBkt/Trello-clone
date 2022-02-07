import styled, { css } from 'styled-components'
import { Icon } from '../../../styled/Mixins.styled'
import { PropTypes } from '../../../types/prop-types'

export const ListTitle = styled.div`
  flex: 0 0 auto;
  position: relative;
  min-height: 20px;
  padding: 10px 8px;
  padding-right: 36px;
`

export const ListHeaderNameAssist = styled.h2`
  margin: 0 0 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  overflow-wrap: break-word;
  height: 28px;
  background: #0000;
  margin: -4px 0;
  max-height: 256px;
  min-height: 20px;
  padding: 4px 8px;
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

  &:focus {
    background: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`

export const ListHeaderOpts = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
`

export const HeaderOptsBtn = styled.a<PropTypes.StyledProps>`
  border-radius: 3px;
  color: #6b778c;
  padding: 6px;

  &:hover {
    background-color: #091e4214;
  }

  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`
