import styled, { css } from 'styled-components'
import { LinkHover } from '../../../styled/Mixins.styled'
import { PropTypes } from '../../../types/prop-types'

export const NavLinkContainer = styled.button<PropTypes.StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  border: none;

  line-height: 32px;

  background-color: ${({ btnType }) => (btnType === 'Create' ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};

  ${({ btnType }) =>
    btnType !== 'Create'
      ? css`
          margin: 0 0 0 4px;
          padding: 6px 10px 6px 12px;
        `
      : css`
          margin: 0 4px 0 0;
          padding: 0;
        `}

  white-space: nowrap;

  @media screen and (min-width: 1100px) {
    padding: 6px 12px;
  }

  ${({ btnType }) =>
    btnType === 'board-views'
      ? css`
          box-sizing: border-box;
          padding-right: 5px;
          padding-left: 5px;

          margin: 0 4px 8px 0;

          line-height: 20px;

          white-space: nowrap;

          /* background-color: rgba(255, 255, 255, 0.2); */
          /* color: #fff; */
        `
      : null}

  &:hover,
  &.modal-open {
    ${LinkHover}
  }
`

export const HeaderCreateBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  margin: 0;
`

export const ArrowIconContainer = styled.span`
  display: inline-block;
  line-height: 0.6;
  white-space: nowrap;

  margin-left: 4px;
  min-width: 16px;
`

export const ArrowIcon = styled.span`
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 1;

  svg {
    width: 16px;
    height: 16px;
    line-height: 16px;
  }
`
