import styled, { css } from 'styled-components'
import { Icon } from '../../../styled/Mixins.styled'
import { PropTypes } from '../../../types/prop-types'

const HeaderBtn = css`
  position: relative;
  cursor: default;

  height: 32px;
  max-width: 400px;
  margin: 0 4px 4px 0;
  padding-left: 32px;

  font-size: 14px;
  line-height: 32px;
  border-radius: 3px;

  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: #ffffff3d;
  color: #fff;
`

const BoardHeaderIcon = css`
  background-clip: content-box;
  background-origin: content-box;
  position: absolute;
  left: 0;
  top: 0;
  padding: 6px;
  color: #fff;
`

export const BoardNavContainer = styled.div`
  display: flex;

  position: relative;
  padding: 8px 4px 4px 16px;
  height: auto;

  /* background-color: #0000003d; */
`

export const BoardViewBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-radius: 3px;
  border: none;
  box-shadow: none;

  padding: 6px 5px;
  margin-right: 4px;
  margin-bottom: 8px;

  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;

  white-space: nowrap;

  transition: background-color border-color box-shadow 85ms ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`

export const BoardViewsIconContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 2px;

  height: 20px;
  width: 100%;
  line-height: 1;

  &:last-child {
    margin-left: 4px;
  }
`

export const BoardViewsText = styled.span`
  display: inline-flex;
  height: 100%;
  width: 100%;
  padding: 0 0 0 2px;
`

export const BoardNameContainer = styled.div`
  ${HeaderBtn}
  white-space: nowrap;

  border-radius: 3px;
  padding: 0;

  font-weight: 700;

  &:hover {
    background-color: #ffffff52;
    cursor: pointer;
  }
`

export const BoardNamePlaceholder = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;

  margin: 0 0 12px;
  padding: 0 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const BoardNameInput = styled.input`
  background-color: #fff !important;

  font-size: 18px;
  font-weight: 700;
  line-height: 32px !important;

  margin: 0;
  padding: 0 12px !important;

  box-shadow: inset 0 0 0 2px #dfe1e6;
`

export const BoardStarredContainer = styled.a`
  ${HeaderBtn}
`

export const BoardStarredIcon = styled.span<PropTypes.StyledProps>`
  ${BoardHeaderIcon}
  ${({ size }) => Icon(size)}
  color: #f2d600; // change color according to starred/unstarred board
  box-sizing: content-box;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }

  &:hover {
    transform: scale(1.2);

    &:before {
      color: #f2d600;
      content: '\\e966';
    }
  }
`

export const BoardOrgContainer = styled.div`
  display: flex;
  position: relative;

  /** change display when features are ready
  display: none;
  **/
`

export const BoardNavDivider = styled.span`
  border-left: 1px solid #ffffff3d;
  height: 16px;
  margin: 8px 8px 12px 4px;
`

export const BoardOrgBtn = styled.a`
  ${HeaderBtn}

  max-width: 400px;
  padding-left: 12px;

  &:hover {
    background-color: #ffffff52;
    cursor: pointer;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 12px;
  }
`

export const BoardOrgBtnIcon = styled.span<PropTypes.StyledProps>`
  ${BoardHeaderIcon}
  ${({ size }) => Icon(size)}
  box-sizing: content-box;
  color: #fff;

  &:hover {
    color: #fff;
  }

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const BoardNavRightChunkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const MemberListContainer = styled.div`
  box-sizing: content-box;
  padding: 2px 0 0 2px;
  overflow: hidden;
`

export const BoardMemberInviteBtn = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  font-size: 14px;
  height: 32px;
  line-height: 32px;
  margin: 0 4px 4px 8px;
  padding-left: 28px;
  max-width: 400px;

  border-radius: 3px;

  background-color: #fff;
  color: #000; // colors can change according to background color

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 12px;
  }

  &:hover {
    background-color: #ffffffe6;
  }
`

export const MemberInviteBtnIcon = styled.span<PropTypes.StyledProps>`
  ${BoardHeaderIcon}
  ${({ size }) => Icon(size)}
  box-sizing: content-box;
  color: #42526e;

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const BoardWatcherBtn = styled.a`
  ${HeaderBtn}

  &:hover {
    background-color: #ffffff52;
    cursor: pointer;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 12px;
  }
`

export const BoardWatcherIcon = styled.span<PropTypes.StyledProps>`
  ${BoardHeaderIcon}
  ${({ size }) => Icon(size)}
  box-sizing: content-box;
  color: #fff;

  &:hover {
    color: #fff;
  }

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`

export const BoardSidebarBtn = styled.a`
  ${HeaderBtn}

  transition: .1s ease;

  &:hover {
    background-color: #ffffff52;
    cursor: pointer;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 12px;
  }
`

export const BoardSidebarIcon = styled.span<PropTypes.StyledProps>`
  ${BoardHeaderIcon}
  ${({ size }) => Icon(size)}
  box-sizing: content-box;
  color: #fff;

  &:hover {
    color: #fff;
  }

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
`
