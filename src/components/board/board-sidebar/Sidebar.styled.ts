import styled, { css } from 'styled-components'
import { PropTypes } from '../../../types/prop-types'
import { Icon } from '../../../styled/Mixins.styled'

export const BoardSidenavWrapper = styled.div<PropTypes.StyledProps>`
  ${({ isSidenavOpen }) =>
    isSidenavOpen
      ? css`
          transform: translateX(0);
          box-shadow: 0 12px 24px -6px #091e4240, 0 0 0 1px #091e4214;
        `
      : css`
          display: none;
          transform: translateX(339px);
        `}

  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;

  transition-property: transform, width;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;

  width: 339px;
  background-color: #f4f5f7;
  z-index: 5;
`

export const BoardSidenavContainer = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  inset: 0;
`

export const SidenavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;

  background-color: #f4f5f7;
  overflow: hidden;
`

export const SidenavDivider = styled.hr`
  margin: 0;
  padding: 0;
  height: 1px;
  width: 100%;

  border: 0;
  background-color: #091e4221;
`

export const SidenavHeaderContainer = styled.div`
  flex: 0 0 auto;
  position: relative;

  height: 48px;
  width: 100%;
  padding: 0 6px 0 12px;
`

export const SidenavHeaderContent = styled.div`
  display: flex;
  align-items: center;
`

export const SidenavBackBtn = styled.a<PropTypes.StyledProps>`
  position: absolute;
  top: 8px;
  left: 12px;
  overflow: hidden;

  transform: translateX(-42px);
  font-size: 20px;

  transition: transform 0.12s ease-in;

  ${({ size }) => Icon(size)}
  color: #6b778c;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const SidenavHeaderText = styled.h3`
  flex: 1;

  margin: 14px 32px;
  line-height: 20px;

  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition: margin 0.12s ease-in;
`

export const SidenavCloseBtn = styled.a<PropTypes.StyledProps>`
  position: absolute;
  top: 8px;
  right: 6px;

  ${({ size }) => Icon(size)}
  color: #6b778c;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
  font-size: 20px;
`

export const SidenavBodyContainer = styled.div`
  display: flex;
  flex: 1 1 auto;

  height: 100%;
  width: 100%;
  padding: 12px 6px 12px 12px;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #00000026;
    display: block;
  }
  &::-webkit-scrollbar-track-piece {
    border-radius: 3px;
    background: #091e4214;
  }
`
