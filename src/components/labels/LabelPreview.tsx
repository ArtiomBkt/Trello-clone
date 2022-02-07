import React from 'react'
import { BoardTypes } from '../../types/board-types'
import { LabelsContainer, Label } from './LabelPreview.styled'

type labelProps = {
  labels: BoardTypes.label[]
}

const LabelsPreview = ({ labels }: labelProps) => {
  return (
    <LabelsContainer>
      {labels.map(label => (
        <Label key={label.id} bgColor={label.color}>
          {label.title}
        </Label>
      ))}
    </LabelsContainer>
  )
}

export default LabelsPreview
