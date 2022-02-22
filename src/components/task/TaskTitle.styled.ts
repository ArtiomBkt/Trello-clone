import styled from 'styled-components'
import { PropTypes } from '../../types/prop-types'

export const TaskTitleContainer = styled.span<PropTypes.StyledProps>`
  display: block;
  clear: both;

  margin: 0 0 4px;

  word-wrap: break-word;
  text-decoration: none;
  color: #172b4d;

  ${({ isFullCover }) => (isFullCover ? 'font-size:16px; font-weight:500; line-height:20px; margin-bottom:0; padding-bottom:8px;' : '')};
`
