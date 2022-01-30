import styled from 'styled-components'

export const LabelsContainer = styled.div`
  overflow: auto;
  position: relative;
`

type LabelProps = {
  bgColor: string
}

export const Label = styled.span`
  display: block;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-radius: 4px;
  color: #fff;
  background-color: ${({ bgColor }: LabelProps) => bgColor || '#b3bac5'};
  
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
