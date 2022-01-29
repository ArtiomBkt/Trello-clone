import styled from 'styled-components'
import { LinkHover } from '../../../styled/Mixins.styled'

export const NavLinkContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  border: none;

  line-height: 32px;
  /* height: 32px;  ????? */
  margin-left: 4px;
  padding: 6px 12px;
  padding-right: 10px;
  
  background-color: ${p => p.type === 'Create' ? 'rgba(0,0,0,.24)' : 'transparent'};
  white-space: nowrap;

  &:hover,
  &.modal-open {
    ${LinkHover}
  }
`

export const ArrowIconContainer = styled.span`
  display: inline-block;
  line-height: .6;
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