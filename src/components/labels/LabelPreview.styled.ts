import styled from 'styled-components'

type LabelProps = {
  bgColor: string
}

interface LabelsInterface {
  [key: string]: { static: string; hover: string }
}

export const labelColors: LabelsInterface = {
  green: { static: '#61bd4f', hover: '#519839' },
  yellow: { static: '#f2d600', hover: '#d9b51c' },
  orange: { static: '#ff9f1a', hover: '#cd8313' },
  red: { static: '#eb5a46', hover: '#b04632' },
  purple: { static: '#c377e0', hover: '#89609e' },
  blue: { static: '#0079bf', hover: '#055a8c' },
  navy: { static: '#344563', hover: '#091e42' }
}

export const LabelsContainer = styled.div`
  overflow: auto;
  position: relative;
`

export const Label = styled.span`
  display: block;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-radius: 4px;
  color: #fff;
  background-color: ${({ bgColor }: LabelProps) => labelColors[bgColor].static || '#b3bac5'};

  &:hover {
    background-color: ${({ bgColor }: LabelProps) => labelColors[bgColor].hover};
  }

  float: left;

  height: 8px;
  min-width: 40px;
  width: auto;

  line-height: 100px;
  font-size: 12px;
  font-weight: 700;
  text-shadow: none;

  margin: 0 4px 4px 0;
  padding: 0;
`
