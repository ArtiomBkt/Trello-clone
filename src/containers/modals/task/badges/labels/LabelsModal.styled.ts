import styled, { css } from 'styled-components'
import { Icon } from '../../../../../styled/Mixins.styled'
import { PropTypes } from '../../../../../types/prop-types'
import { labelColors } from '../../../../../components/labels/LabelPreview.styled'

export const LabelsModalsContainer = styled.div`
  margin-top: 12px;

  h4 {
    margin-top: 16px;
    color: #5e6c84;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
`

export const LabelsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
`

export const LabelPreviewContainer = styled.li`
  padding-right: 36px;
  position: relative;
`

export const LabelPreviewEditBtn = styled.span<PropTypes.StyledProps>`
  position: absolute;
  top: 0;
  right: 0;

  padding: 6px;
  border-radius: 3px;

  box-sizing: content-box;

  ${({ size }) => Icon(size)}

  &:before {
    ${({ content }) =>
      css`
        content: ${content};
      `}
  }
  -webkit-font-smoothing: antialiased;

  &:hover {
    background-color: #091e4214;
    color: #091e42;
    cursor: pointer;
  }
`

export const LabelPreview = styled.span<PropTypes.StyledProps>`
  display: block;
  position: relative;

  color: #fff;

  margin: 0 0 4px;
  padding: 6px 12px;
  min-height: 32px;

  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;

  transition: padding, margin, box-shadow 85ms ease-in;

  background-color: ${({ labelColor }) => labelColor && labelColors[labelColor].static};

  &:hover {
    margin-left: 4px;
    box-shadow: -8px 0 ${({ labelColor }) => labelColor && labelColors[labelColor].hover};
  }
`
