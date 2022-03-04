import styled, { css } from 'styled-components'
import { PropTypes } from '../../types/prop-types'

export const ListPreviewContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 8px;
  padding: 0 0 8px 8px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    display: block;
    border-radius: 3px;
    background: #ffffff80;
  }
  &::-webkit-scrollbar-button {
    width: 24px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background: #00000026;
    margin: 0 20px;
  }
`

export const ListContentPreview = styled.div`
  display: inline-block;
  height: 100%;
  margin: 0 4px;
  vertical-align: top;
  white-space: nowrap;
  width: 272px;

  &:first-child {
    margin-left: 10px;
  }
`

export const List = styled.div<PropTypes.DndTypes>`
  display: flex;
  flex-direction: column;
  position: relative;

  max-height: 100%;
  width: 100%;
  white-space: normal;

  background-color: #ebecf0;
  border-radius: 3px;

  ${({ isDragging }) =>
    isDragging &&
    css`
      transform: rotate(3deg);
      transition: transform 0.5ms;
    `};
`

export const ListTasksWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0 4px;
  padding: 0 4px;
  min-height: 5px;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #00000026;
    display: block;
  }
  &::-webkit-scrollbar-track-piece {
    border-radius: 3px;
    background: #091e4214;
  }
`
