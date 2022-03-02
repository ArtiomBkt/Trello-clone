import styled, { css } from 'styled-components'
import { PropTypes } from '../../../types/prop-types'

export const HeaderModalContainer = styled.div<PropTypes.StyledProps>`
  position: fixed;

  width: 304px;
  ${({ modalPos }) =>
    modalPos &&
    css`
      top: ${modalPos.top}px;
      left: ${modalPos.left}px;
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

export const HeaderModalTitle = styled.div`
  display: block;
  position: relative;
  grid-column: 1 / span 3;
  grid-row: 1;

  padding: 0 32px;
  margin: 0;
  line-height: 40px;
  height: 40px;

  color: #5e6c84;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const HeaderModalCloseBtn = styled.button`
  grid-column: 3;
  grid-row: 1;

  background: transparent;
  color: #6b778c;

  margin: 0;
  padding: 0;

  z-index: 2;

  outline: none;
`

export const ModalCloseBtnIconContainer = styled.span`
  height: auto;
  width: 10px;
  display: inline-block;
  flex-shrink: 0;
  line-height: 1;

  cursor: pointer;

  &:hover {
    color: #172b4d;
  }

  svg {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    vertical-align: bottom;
  }
`

export const HeaderModalBodyContainer = styled.div`
  max-height: 863px;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

export const HeaderModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  & > button {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    height: 32px;
    padding: 12px;
    margin: 0;

    color: #172b4d;
    border-radius: 0;

    &:hover {
      // TODO: Active link = hover state
      background-color: #ebecf0;
      color: #172b4d;
    }

    & span:nth-child(2) {
      margin: 0 -2px 0 4px;
    }
  }
`
