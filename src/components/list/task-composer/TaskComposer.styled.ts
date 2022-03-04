import styled, { css } from 'styled-components'
import { PropTypes } from '../../../types/prop-types'
import { Icon, PrimeBtn } from '../../../styled/Mixins.styled'

export const TaskComposerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
`

// TODO: Change all anchor tags with children to button elements
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

export const TaskComposerIcon = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const TaskComposerContainer = styled.div`
  padding-bottom: 8px;
`

export const ComposingTask = styled.div`
  display: block;
  position: relative;
  cursor: pointer;

  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;

  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;

  background-color: #fff;

  text-decoration: none;
  z-index: 0;
`

export const ComposingTaskDetails = styled.div`
  position: relative;
  overflow: hidden;
  padding: 6px 8px 2px;
  z-index: 10;
`

export const ComposingTaskTextarea = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;

  margin-bottom: 4px;
  padding: 0;
  max-height: 162px;
  min-height: 54px;
  width: 100%;
  resize: none;

  background: none;
  border: none;
  box-shadow: none;
`

export const AddTaskBtn = styled.button`
  ${PrimeBtn('primary')}
`

export const DiscardTaskIcon = styled.a<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}
  color: #6b778c;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`
