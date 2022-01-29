import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 6px;
  height: 44px;

  background-color: #0000003d;
  color: #fff;
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 20px;

  p {
    font-family: source-sans;
    font-size: 2em;
    line-height: 16px;
    margin-left: 10px;
  }
`
