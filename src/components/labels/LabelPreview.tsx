import React, { useContext } from 'react'
import { PropTypes } from '../../types/prop-types'
import labelsContext from '../../contexts/labelsToggle'
import { LabelActionType } from '../../reducers/useLabelReducer'

import { LabelsContainer, Label } from './LabelPreview.styled'

const LabelsPreview = ({ labels }: PropTypes.LabelsPreviewProps) => {
  const { labelState, labelsDispatch } = useContext(labelsContext)

  const toggleLabels = (ev: React.MouseEvent) => {
    ev.preventDefault()
    ev.stopPropagation()
    labelsDispatch({ type: LabelActionType.TOGGLE_LABEL_VIEW })
  }

  return (
    <LabelsContainer onClick={toggleLabels}>
      {labels.map(label => (
        <Label isLabelExpanded={labelState.isLabelsExpanded} key={label.id} labelColor={label.color}>
          {label.title}
        </Label>
      ))}
    </LabelsContainer>
  )
}

export default LabelsPreview
