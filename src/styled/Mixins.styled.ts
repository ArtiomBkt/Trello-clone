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

export const Icon = (size: string | undefined) => css`
  ${size === 'sm'
    ? css`
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        width: 20px;
      `
    : size === 'md'
    ? css`
        font-size: 20px;
        height: 24px;
        line-height: 24px;
        width: 24px;
      `
    : css`
        font-size: 24px;
        height: 32px;
        line-height: 32px;
        width: 32px;
      `}

  display: inline-block;
  font-family: trellicons;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  vertical-align: bottom;
  color: #42526e;

  &:hover {
    color: #172b4d;
  }
`

export const PrimeBtn = (type: string | undefined) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 6px 12px;
  border-radius: 3px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  background-color: #091e420a;
  color: #172b4d;
  border: none;
  box-shadow: none;
  white-space: normal;

  transition-duration: 85ms;
  transition-property: background-color, color, border-color, box-shadow;
  transition-timing-function: ease;

  ${type === 'primary'
    ? css`
        margin-bottom: 0;
        margin-top: 0;
        vertical-align: top;
        background-color: #0079bf;
        color: #fff;

        &:hover {
          background-color: #026aa7;
        }
      `
    : ''}
`
