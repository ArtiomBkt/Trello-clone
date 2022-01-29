import { css } from 'styled-components'
import logoStatic from '../assets/images/logo-static.gif'
import logoHover from '../assets/images/logo-hover.gif'

export const LinkHover = () => css`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  color: #fff;
  cursor: pointer;
`

export const HeaderLogoPseudos = () => css`
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 15px;
    width: 100%;
    background: url(${logoStatic});
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:after {
    background-image: url(${logoHover});
    opacity: 0;
  }

  &:hover::before,
  &:focus::before,
  &:focus::after {
    background-image: url(${logoHover});
    opacity: 1;
  }
`
