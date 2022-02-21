import React, { useState, useRef, useLayoutEffect } from 'react'
import { BoardTypes } from '../../../../../types/board-types'
import {
  LabelsModalsContainer,
  LabelsList,
  LabelPreviewContainer,
  LabelPreviewEditBtn,
  LabelPreview
} from './LabelsModal.styled'

const LabelsModal = () => {
  const [boardLabels, setBoardLabels] = useState(() => {
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
          <LabelPreviewContainer key={label.id}>
            <LabelPreviewEditBtn content="'\e928'" size="sm" />
            <LabelPreview labelColor={label.color}>{label.title && label.title}</LabelPreview>
          </LabelPreviewContainer>
        ))}
      </LabelsList>
    </LabelsModalsContainer>
  )
}

export default LabelsModal
