import React, { useState } from 'react'
import { PropTypes } from '../../../../../types/prop-types'
import {
  LabelsModalsContainer,
  LabelsList,
  LabelPreviewContainer,
  LabelPreviewEditBtn,
  LabelPreview,
  LabelSelectedIcon
} from './LabelsModal.styled'

type LabelProps = {
  label?: PropTypes.label
  task: PropTypes.task
  handleTaskLabelChange: (label: PropTypes.label) => void
}

const Label = ({ task, handleTaskLabelChange, label }: LabelProps) => {
  // const [labelTitle, setLabelTitle] = useState(label.title)
  if (!label) return null

  return (
    <LabelPreviewContainer>
      <LabelPreviewEditBtn content="'\e928'" size="sm" />
      <LabelPreview onClick={() => handleTaskLabelChange(label)} labelColor={label.color}>
        {label.title}
        {task.labels!.find(taskLabel => taskLabel.id === label.id) && <LabelSelectedIcon content="'\e916'" size="sm" />}
      </LabelPreview>
    </LabelPreviewContainer>
  )
}

const LabelsModal = ({ task, handleTaskLabelChange }: LabelProps) => {
  const [boardLabels] = useState(() => {
    const board: PropTypes.board = JSON.parse(localStorage.getItem('board') || '')
    if (board) {
      return board.labels
    }
  })

  // TODO: label edit onclick, edit label title

  return (
    <LabelsModalsContainer>
      <h4>Labels</h4>
      <LabelsList>
        {boardLabels?.map(label => (
          <Label task={task} handleTaskLabelChange={handleTaskLabelChange} key={label.id} label={label} />
        ))}
      </LabelsList>
    </LabelsModalsContainer>
  )
}

export default LabelsModal
