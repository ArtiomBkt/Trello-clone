import styled, { css } from 'styled-components'
import { PropTypes } from '../../../../../types/prop-types'
import { Icon } from '../../../../../styled/Mixins.styled'

export const MembersModalContainer = styled.div`
  margin-top: 12px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & * {
    box-sizing: content-box;
  }
`

export const MembersModalTitle = styled.h4`
  color: #536c84;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin-top: 16px;
`

export const MemberWrapper = styled.div`
  position: relative;

  padding: 4px;
  margin-bottom: 2px;

  height: 32px;
  line-height: 32px;

  border-radius: 3px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #091e420a;
  }
`

export const MemberImgContainer = styled.span`
  margin-right: 8px;
`

export const MemberNameContainer = styled.span`
  line-height: 32px;
`

export const SelectedMemberIcon = styled.span<PropTypes.StyledProps>`
  position: absolute;
  top: 0;
  right: 0;

  padding: 11px;

  background-clip: content-box;
  background-origin: content-box;

  ${({ size }) => Icon(size)};

  &:before {
    ${({ content }) => css`
      content: ${content};
    `}
  }
`
