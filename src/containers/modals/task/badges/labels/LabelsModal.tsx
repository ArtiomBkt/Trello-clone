import React, { useState } from 'react'
import { BoardTypes } from '../../../../../types/board-types'
import {
  LabelsModalsContainer,
  LabelsList,
  LabelPreviewContainer,
  LabelPreviewEditBtn,
  LabelPreview
} from './LabelsModal.styled'

type LabelProps = {
  label: BoardTypes.label
}

const Label = ({ label }: LabelProps) => {
  const [labelTitle, setLabelTitle] = useState(label.title)

  return (
    <LabelPreviewContainer>
      <LabelPreviewEditBtn content="'\e928'" size="sm" />
      <LabelPreview labelColor={label.color}>{label.title && label.title}</LabelPreview>
    </LabelPreviewContainer>
  )
}

const LabelsModal = () => {
  const [boardLabels] = useState(() => {
    const board: BoardTypes.board = JSON.parse(localStorage.getItem('board') || '')
    if (board) {
      return board.labels
    }
  })

  // TODO: label preview onclick, add label to task
  // TODO: label edit onclick, edit label title

  return (
    <LabelsModalsContainer>
      <h4>Labels</h4>
      <LabelsList>
        {boardLabels?.map(label => (
          <Label key={label.id} label={label} />
        ))}
      </LabelsList>
    </LabelsModalsContainer>
  )
}

export default LabelsModal
