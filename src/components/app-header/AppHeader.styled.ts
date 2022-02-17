import styled from 'styled-components'

export const Header = styled.header`
  height: 44px;
  overflow: hidden;
`

export const HeaderMainNav = styled.nav`
  display: flex;

  padding: 6px 4px;
  height: 100%;

  /* background-color: #026aa7; */
  background-color: rgba(0, 0, 0, 0.16); // should be dynamic
  backdrop-filter: blur(6px);
`

export const HeaderLinksWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
`

export const HeaderLinksContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  height: 100%;
  position: relative;
`

export const HeaderLinks = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 5px;
  color: #fff;
`

export const HeaderRightChunk = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`
