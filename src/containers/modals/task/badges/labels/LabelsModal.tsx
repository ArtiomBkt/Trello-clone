import React, { useEffect, useState } from 'react'
import useLabelReducer from '../../../../../reducers/useLabelReducer'
import { PropTypes } from '../../../../../types/prop-types'
import { LabelsModalsContainer, LabelsList, LabelPreviewContainer, LabelPreviewEditBtn, LabelPreview, LabelSelectedIcon } from './LabelsModal.styled'

const Label = ({ task, handleTaskLabelChange, handleLabelChange, label }: PropTypes.LabelProps) => {
  const [state, dispatch] = useLabelReducer()

  const handleLabelTitleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_TITLE', payload: target.value })
  }

  const handleLabelChangeSubmit = (ev: React.FocusEvent | React.KeyboardEvent) => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'blur') || !label) {
      return
    }

    const newLabel = {
      ...label,
      title: state.labelTitle
    }

    handleLabelChange!(newLabel)
    dispatch({ type: 'SUBMIT_CHANGE' })
  }

  if (!label) return null
  // add ref to label title input, focus when is editing
  // fix input ui
  return (
    <LabelPreviewContainer>
      <LabelPreviewEditBtn onClick={() => dispatch({ type: 'TOGGLE_EDIT', payload: label.title })} content="'\e928'" size="sm" />
      {state.isEditMode ? (
        <LabelPreview labelColor={label.color}>
          <input type="text" value={state.labelTitle} onBlur={handleLabelChangeSubmit} onKeyDown={handleLabelChangeSubmit} onChange={handleLabelTitleChange} />
        </LabelPreview>
      ) : (
        <LabelPreview onClick={ev => handleTaskLabelChange(ev, label)} labelColor={label.color}>
          {label.title}
          {task.labels!.find(taskLabel => taskLabel.id === label.id) && <LabelSelectedIcon content="'\e916'" size="sm" />}
        </LabelPreview>
      )}
    </LabelPreviewContainer>
  )
}

const LabelsModal = ({ task, handleTaskLabelChange, onLabelsUpdate }: PropTypes.LabelProps) => {
  const [boardLabels, setBoardLabels] = useState<PropTypes.label[]>()

  useEffect(() => {
    const labels = getBoardLabels()
    setBoardLabels(labels)
  }, [])

  function getBoardLabels() {
    const board: PropTypes.board = JSON.parse(localStorage.getItem('board') || '')
    if (board) {
      return board.labels
    }
  }

  const handleLabelChange = (updatedLabel: PropTypes.label) => {
    const idx = boardLabels!.findIndex(label => label.id === updatedLabel.id)
    const newLabels = [...boardLabels!]

    if (idx !== -1) {
      newLabels.splice(idx, 1, updatedLabel)
    }

    onLabelsUpdate!(newLabels)
  }

  return (
    <LabelsModalsContainer>
      <h4>Labels</h4>
      <LabelsList>
        {boardLabels?.map(label => (
          <Label handleLabelChange={handleLabelChange} task={task} handleTaskLabelChange={handleTaskLabelChange} key={label.id} label={label} />
        ))}
      </LabelsList>
    </LabelsModalsContainer>
  )
}

export default LabelsModal
