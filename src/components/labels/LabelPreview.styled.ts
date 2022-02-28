import styled, { css, keyframes } from 'styled-components'
import { PropTypes } from '../../types/prop-types'

export const labelColors: PropTypes.LabelsInterface = {
  green: { static: '#61bd4f', hover: '#519839' },
  yellow: { static: '#f2d600', hover: '#d9b51c' },
  orange: { static: '#ff9f1a', hover: '#cd8313' },
  red: { static: '#eb5a46', hover: '#b04632' },
  purple: { static: '#c377e0', hover: '#89609e' },
  blue: { static: '#0079bf', hover: '#055a8c' },
  navy: { static: '#344563', hover: '#091e42' }
}

const labels_expand = keyframes`
  0% {
    color: #0000;
    height: 8px;
    width: 40px;
  }

  25% {
    height: 8px;
    padding-right: 10px;
    width: fit-content;
  }

  45% {
    height: 8px;
    padding-right: 9px;
  }

  53% {
    height: 8px;
    padding-right: 8px;
  }

  75% {
    color: #0000;
    height: 16px;
  }
  to {
    color: #0000;
    height: 16px;
    padding: 0 8px;
  }
`

const labels_shrink = keyframes`
  0% {
    height: 16px;
    line-height: 16px;
    padding: 0 8px;
    width: fit-content;
  }

  33% {
    color: #0000;
    height: 16px;
    line-height: 16px;
    width: fit-content;
  }

  66% {
    color: #0000;
    height: 8px;
    line-height: 100px;
    padding: 0 8px;
    width: fit-content;
  }

  to {
    color: #0000;
    padding: 0;
    width: 40px;
  }
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  position: relative;
`

export const Label = styled.span<PropTypes.StyledProps>`
  box-sizing: content-box;
  display: block;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-radius: 4px;
  color: #fff;
  background-color: ${({ labelColor }) => labelColors[labelColor!].static || '#b3bac5'};

  cursor: pointer;

  &:hover {
    background-color: ${({ labelColor }) => labelColors[labelColor!].hover};
  }

  min-width: 40px;

  font-size: 12px;
  font-weight: 700;
  text-shadow: none;

  margin: 0 4px 4px 0;

  &&& {
    ${({ isLabelExpanded }) =>
      isLabelExpanded
        ? css`
            animation: ${labels_expand} 0.45s ease-out backwards;
            height: 16px;
            line-height: 16px;
            max-width: 198px;
            margin: 0 4px 4px 0;
            padding: 0 8px;
          `
        : css`
            line-height: 100px;
            animation: ${labels_shrink} 0.45s ease-in backwards;
            height: 8px;
            max-width: 40px;
          `}
  }
`
