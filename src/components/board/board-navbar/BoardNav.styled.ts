import styled, { css } from 'styled-components'
import { Icon } from '../../../styled/Mixins.styled'
import { PropTypes } from '../../../types/prop-types'

export const BoardNavContainer = styled.div`
  position: relative;
  padding: 8px 4px 4px 16px;
  height: auto;

  /* background-color: #0000003d; */
`

export const BoardViewsContainer = styled.div``

const HeaderBtn = css`
  position: relative;
  cursor: default;

  height: 32px;
  max-width: 400px;
  margin: 0 4px 4px 0;
  padding-left: 32px;

  font-size: 14px;
  line-height: 32px;

  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: #ffffff3d;
  color: #fff;
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
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-radius: 3px;

  font-size: 18px;
  font-weight: 700;
  line-height: 32px;

  margin: 0 4px 4px 0;
  max-width: calc(100% - 24px);
  height: 32px;

  background-color: #ffffff3d;
  color: #fff;

  cursor: default;

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
