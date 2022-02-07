import styled, { css } from 'styled-components'
import { Icon, PrimeBtn } from '../../../styled/Mixins.styled'
import { PropTypes } from '../../../types/prop-types'

export const ListComposerContainer = styled.div<PropTypes.StyledProps>`
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  cursor: pointer;

  margin: 0 4px;
  margin-right: 8px;
  padding: 4px;
  width: 272px;
  min-height: 32px;
  height: auto;

  border-radius: 3px;

  transition: background 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;

  ${({ isListAdd }) =>
    isListAdd
      ? css`
          background-color: #ebecf0;
        `
      : css`
          background-color: #ffffff3d;
          &:hover {
            background-color: #ffffff52;
          }
        `}
`

export const ListComposerAnchor = styled.a``

export const ListComposerPlaceholder = styled.span<PropTypes.StyledProps>`
  display: ${({ isListAdd }) => (isListAdd ? 'none' : 'block')};
  color: #fff;
  padding: 6px 8px;
  transition: color 85ms ease-in;
`

export const AddListIcon = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}

  margin-right: 2px;
  color: #fff;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const ListComposerInput = styled.input<PropTypes.StyledProps>`
  ${({ isListAdd }) =>
    isListAdd
      ? css`
          background-color: #fff;
          box-shadow: inset 0 0 0 2px #0079bf;
          display: block;
          margin: 0;
          width: 100%;
          transition: margin background 85ms ease-in;
        `
      : css`
          background: none;
          border-color: #0000;
          box-shadow: none;
          cursor: pointer;
          display: none;
          margin: 0;
        `}
`

export const ListComposerControls = styled.div<PropTypes.StyledProps>`
  ${({ isListAdd }) =>
    isListAdd
      ? css`
          height: 32px;
          margin: 4px 0 0;
        `
      : css`
          height: 0;
          margin: 0;
        `};
  overflow: hidden;
  transition: margin height 85ms ease-in;
`

export const AddComposedListBtn = styled.button`
  ${PrimeBtn('primary')};
  margin-right: 4px;
`

export const DiscardListBtn = styled.a<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}
  color: #42526e;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`
