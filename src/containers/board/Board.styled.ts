import styled, { css } from 'styled-components'
import { PropTypes } from '../../types/prop-types'

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  outline: none;
  flex-grow: 1;
`

export const BoardContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  position: relative;
  overflow-y: auto;
`

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  overflow-y: auto;
  position: relative;
`

export const BoardWrapper = styled.div<PropTypes.StyledProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  ${({ isSidenavOpen }) =>
    isSidenavOpen &&
    css`
      margin-right: 339px;
    `}

  transition: margin 0.1s ease-in;
`
