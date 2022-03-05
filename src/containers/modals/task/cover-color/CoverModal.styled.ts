import styled from 'styled-components'
import { PropTypes } from 'types/prop-types'
import { taskColors } from 'components/task/TaskPreview.styled'

export const CoverModalTitle = styled.h4`
  margin: 0 0 4px 0;

  font-size: 12px;
  font-weight: 600;
  line-height: 16px;

  color: #536c84;

  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const CoverOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 4px;
  margin: 0 -4px;
  overflow-x: hidden;
`

export const TaskCoverTemplate = styled.div<PropTypes.StyledProps>`
  position: relative;
  cursor: pointer;

  margin: 0;
  height: 62px;
  width: 134px;
  border-radius: 3px;

  box-shadow: none;
  background-repeat: no-repeat;
  background-position: center;
  background: #fff;
  border: 1px solid rgba(9, 30, 66, 0.08);
  box-shadow: ${({ isFullCover }) => isFullCover && '0 0 0 2px #fff, 0 0 0 4px #0079bf'};

  &:not(:nth-of-type(1)) {
    background-color: ${({ styling }) => (styling?.background ? taskColors[styling.background].static : 'rgba(94, 108, 132, .3)')};
  }
`

export const HalfCoverStrip = styled.div<PropTypes.StyledProps>`
  height: 28px;
  border-radius: 3px 3px 0 0;

  background-color: ${({ styling }) => (styling?.background ? taskColors[styling.background].static : 'rgba(94, 108, 132, .3)')};
`

export const TaskContentIllustrator = styled.div`
  position: relative;
  padding: 6px 4px 4px 6px;
`

/** 
  This rule covers both long and shorter strips
 * */
export const IllustrationStripes = styled.div<PropTypes.StyledProps>`
  width: 122px;

  &,
  & + div {
    background: ${({ styling }) => (styling?.background ? '#6b778c' : 'rgba(94, 108, 132, .3)')};
    height: 4px;
    border-radius: 2px;
  }

  & + div {
    width: 98px;
    margin-top: 4px;
  }
`

export const IllustrationBlobs = styled.div<PropTypes.StyledProps>`
  display: flex;

  margin-top: 6px;

  & div {
    background: ${({ styling }) => (styling?.background ? '#6b778c' : 'rgba(94, 108, 132, .3)')};
  }

  & div:first-child,
  & div:nth-child(2) {
    width: 16px;
    height: 6px;
    border-radius: 2px;
    margin-right: 2px;
  }

  & div:last-child {
    position: absolute;
    right: 4px;
    bottom: 4px;

    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`

export const CoverRemoveBtn = styled.button`
  cursor: pointer;
  box-sizing: border-box;

  margin: 4px 0 0;
  width: 100%;

  background-color: #091e420a;
  text-align: center;

  border: none;

  &:hover {
    background-color: #091e4214;
  }
`

export const CoverColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 4px;
  margin: 0 -5px;
  overflow-x: hidden;
`

export const CoverColor = styled.button<PropTypes.StyledProps>`
  cursor: pointer;
  box-sizing: border-box;

  width: 50px;
  height: 32px;
  margin: 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  box-shadow: ${({ isSelectedColor }) => isSelectedColor && '0 0 0 2px #fff, 0 0 0 4px #0079bf'};

  &:hover {
    filter: saturate(85%) brightness(85%);
  }
`
