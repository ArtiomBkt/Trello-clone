import styled from 'styled-components'

export const BoardSidenavWrapper = styled.div`
  /* display: none; */

  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;

  width: 339px;
  background-color: #f4f5f7;

  /* transform: translateX(339px); */
  transition: transform, width 0.1s ease-in;

  box-shadow: 0 12px 24px -6px #091e4240, 0 0 0 1px #091e4214;

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
