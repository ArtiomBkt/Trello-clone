import React, { useContext } from 'react'
import { PropTypes } from '../../types/prop-types'
import labelsContext from '../../contexts/labelsToggle'
import { LabelsContainer, Label } from './LabelPreview.styled'

const LabelsPreview = ({ labels }: PropTypes.LabelsPreviewProps) => {
  const { isLabelsExpanded, setIsLabelsExpanded } = useContext(labelsContext)

  const toggleLabels = (ev: React.MouseEvent) => {
    ev.preventDefault()
    ev.stopPropagation()
    setIsLabelsExpanded(!isLabelsExpanded)
  }

  return (
    <LabelsContainer onClick={toggleLabels}>
      {labels!.map(label => (
        <Label isLabelExpanded={isLabelsExpanded} key={label.id} labelColor={label.color}>
          {label.title}
        </Label>
      ))}
    </LabelsContainer>
  )
}

export default LabelsPreview
