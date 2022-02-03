import styled, { css } from 'styled-components'
import { LinkHover } from '../../../styled/Mixins.styled'

export const NavLinkContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  border: none;

  line-height: 32px;
  margin: ${p => (p.type !== 'Create' ? '0 0 0 4px' : '0 4px 0 0')};
  padding: ${p => (p.type !== 'Create' ? '6px 12px' : null)};
  padding-right: ${p => (p.type !== 'Create' ? '10px' : null)};

  background-color: ${p => (p.type === 'Create' ? 'rgba(0,0,0,.24)' : 'transparent')};
  white-space: nowrap;

  @media screen and (min-width: 1100px) {
    padding: 6px 12px;
  }

  ${p =>
    p.type === 'board-views'
      ? css`
          box-sizing: border-box;
          /* float: left; */
          padding-right: 5px;
          padding-left: 5px;

          margin: 0 4px 8px 0;

          line-height: 20px;

          white-space: nowrap;

          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        `
      : ''}

  &:hover,
  &.modal-open {
    ${LinkHover}
  }
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
