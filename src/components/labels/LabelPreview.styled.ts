import styled from 'styled-components'

type LabelProps = {
  bgColor: string
}

interface LabelsInterface {
  [key: string]: string
}

const labelColors: LabelsInterface = {
  green: '#61bd4f',
  yellow: '#f2d600',
  orange: '#ff9f1a',
  red: '#eb5a46',
  purple: '#c377e0',
  blue: '#0079bf',
  navy: '#344563'
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
  background-color: ${({ bgColor }: LabelProps) => labelColors[bgColor] || '#b3bac5'};
  
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
