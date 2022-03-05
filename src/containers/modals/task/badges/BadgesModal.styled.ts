import styled, { css } from 'styled-components'
import { PropTypes } from '../../../../types/prop-types'
import { Icon } from '../../../../styled/Mixins.styled'

export const BadgesModalOverlay = styled.div<PropTypes.StyledProps>`
  display: ${({ title }) => (title ? 'block' : 'none')};
  position: absolute;

  inset: 0;

  outline: none;
  overflow: hidden;
  z-index: 60;
`

export const BadgesModalContainer = styled.div<PropTypes.StyledProps>`
  position: fixed; // TODO: Or absolute - needs testing with correct positioning

  ${({ modalPos }) =>
    modalPos &&
    css`
      left: ${modalPos.left}px;
      top: ${modalPos.top}px;
    `}

  width: 304px;

  border-radius: 3px;
  box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
  background: #fff;

  overflow: hidden;
  z-index: 70;
`

export const BadgesModalHeader = styled.div`
  position: relative;

  height: 40px;
  margin-bottom: 8px;

  text-align: center;
`

export const BadgesModalHeaderCloseBtn = styled.span<PropTypes.StyledProps>`
  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }

  position: absolute;
  top: 0;
  right: 0;
  box-sizing: content-box;

  padding: 10px 12px 10px 8px;

  cursor: pointer;
  z-index: 2;
`

export const BadgesModalHeaderTitle = styled.span`
  display: block;
  position: relative;

  margin: 0 12px;
  padding: 0 32px;
  line-height: 40px;

  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;

  border-bottom: 1px solid #091e4221;
  color: #5e6c84;

  z-index: 1;
`

export const BadgesModalBody = styled.div`
  max-height: 892px;

  overflow-x: hidden;
  overflow-y: auto;

  padding: 0 12px 12px;
`
