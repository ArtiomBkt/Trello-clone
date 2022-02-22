import styled, { css } from 'styled-components'
import { Icon, PrimeBtn } from '../../../styled/Mixins.styled'
import { PropTypes } from '../../../types/prop-types'

export const QuickEditContainer = styled.div`
  position: fixed;
  inset: 0;

  background: #0009;
  color: #fff;

  z-index: 10;
`

export const QuickEditCloseBtn = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }

  position: absolute;
  right: 0;
  top: 0;

  padding: 9px;
  transition-duration: 0.15s;
  transition-property: transform, color;

  color: #fff9;

  box-sizing: content-box;

  &:hover {
    color: #fff;
    cursor: pointer;
    transform: scale(1.2);
  }
`

export const TaskQuickEditorWrapper = styled.div<PropTypes.StyledProps>`
  position: absolute;
  width: 256px;

  ${({ modalPos }) =>
    modalPos &&
    css`
      top: ${modalPos.top}px;
      left: ${modalPos.left}px;
    `}
`

export const TaskQuickEditor = styled.div`
  position: relative;
  display: block;

  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
  width: 256px;
  min-height: 20px;

  background-color: #fff;
  z-index: 1;
`

export const TaskQuickEditorSave = styled.button`
  ${PrimeBtn('primary')};
  padding-left: 24px;
  padding-right: 24px;
  margin: 8px 4px 0 0;
`

export const TaskQuickEditorControls = styled.div<PropTypes.StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  left: 100%;
  top: 0;

  /* transform: translateX(-20px); */
  /* opacity: 0; */
  transition: opacity, transform 0.85s ease-in;

  width: 240px;

  z-index: 0;

  /* ${({ isQuickEdit }) =>
    isQuickEdit &&
    css`
      opacity: 1;
      transform: translateX(0);
    `} */
`

export const TaskQuickEditorControlBtn = styled.a`
  display: block;

  margin: 0 0 4px 8px;
  padding: 6px 12px 6px 8px;
  text-decoration: none;

  border-radius: 3px;
  background: #0009;
  color: #e6e6e6;

  transition: transform 85ms ease-in;

  &:hover {
    background: #000c;
    color: #fff;
    transform: translateX(5px);
  }
`

export const EditorControlBtnIcon = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }

  &:hover {
    color: #fff;
  }
  color: #fff;
`

export const EditorControlText = styled.span`
  margin-left: 4px;
`

export const EditorTaskTextarea = styled.textarea`
  height: 90px;
  resize: none;

  overflow: hidden;
  overflow-wrap: break-word;

  padding: 0;
  margin: -1px;
`
