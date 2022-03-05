import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LinkHover, HeaderLogoPseudos } from 'styled/Mixins.styled'

export const LogoLink = styled(Link)`
  display: block;
  position: relative;

  flex-shrink: 0;

  margin-left: 10px;
  padding: 0 8px;
  border-radius: 3px;
  height: 32px;

  &:hover {
    ${LinkHover}
  }
`

export const HeaderLogo = styled.div`
  box-sizing: unset;
  display: flex;
  align-items: center;
  position: relative;
`

export const LogoContainer = styled.div`
  box-sizing: unset;
  display: flex;
  align-items: center;

  width: 75px;
  height: 16px;
  padding: 8px 0;
  margin: 0;
  opacity: 1;
  position: relative;

  ${HeaderLogoPseudos}
`

export const LogoText = styled.p`
  margin: 0;
  margin-left: 22px;

  font-family: 'sourceSans';
  line-height: 16px;
  font-weight: 800;
  font-size: 1.5rem;

  color: #fff;
`
