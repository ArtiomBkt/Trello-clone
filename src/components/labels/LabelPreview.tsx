import React, { useState } from 'react'
import { BoardTypes } from '../../types/board-types'
import { LabelsContainer, Label } from './LabelPreview.styled'

type labelProps = {
  labels: BoardTypes.label[]
}

const LabelsPreview = ({ labels }: labelProps) => {
  const [isLabelExpanded, setIsLabelExpanded] = useState(false)

  const toggleLabels = (ev: React.MouseEvent) => {
    ev.preventDefault()
    ev.stopPropagation()
    setIsLabelExpanded(p => !p)
  }

  return (
    <LabelsContainer onClick={toggleLabels}>
      {labels.map(label => (
        <Label isLabelExpanded={isLabelExpanded} key={label.id} bgColor={label.color}>
          {label.title}
        </Label>
      ))}
    </LabelsContainer>
  )
}

export default LabelsPreview
