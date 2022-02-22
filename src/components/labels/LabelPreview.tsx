import React, { useState } from 'react'
import { PropTypes } from '../../types/prop-types'
import { LabelsContainer, Label } from './LabelPreview.styled'

const LabelsPreview = ({ labels }: PropTypes.ContainersProps) => {
  const [isLabelExpanded, setIsLabelExpanded] = useState(false)
  // context could be a better solution here

  const toggleLabels = (ev: React.MouseEvent) => {
    ev.preventDefault()
    ev.stopPropagation()
    setIsLabelExpanded(p => !p)
  }

  return (
    <LabelsContainer onClick={toggleLabels}>
      {labels!.map(label => (
        <Label isLabelExpanded={isLabelExpanded} key={label.id} labelColor={label.color}>
          {label.title}
        </Label>
      ))}
    </LabelsContainer>
  )
}

export default LabelsPreview
