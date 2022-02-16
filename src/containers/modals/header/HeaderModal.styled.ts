import styled, { css } from 'styled-components'

type HeaderModalProps = {
  top?: number
  left?: number
}

export const HeaderModalContainer = styled.div<HeaderModalProps>`
  position: fixed;

  width: 304px;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}

  background-color: #fff;
  box-shadow: 0 8px 12px -4px rgba(9, 30, 66, 25%), 0 0 0 1px rgba(9, 30, 66, 8%);
  border-radius: 3px;

  z-index: 1;
  overflow: hidden;
  outline: none;
`

export const HeaderModalHead = styled.header`
  display: grid;
  grid-template-columns: 12px 1fr 12px;

  position: relative;
  text-align: center;

  padding: 0 12px;
  margin-bottom: 8px;
`
