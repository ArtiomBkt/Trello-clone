import React from 'react'
import { createPortal } from 'react-dom'
import { QuickEditContainer, QuickEditCloseBtn, TaskQuickEditorWrapper, TaskQuickEditor, TaskQuickEditorSave } from './QuickEdit.styled'
import { PropTypes } from '../../../types/prop-types'
import QuickEditControls from './QuickEditControls'

const TaskQuickEdit = ({
  children,
  modalPos,
  task,
  handleTaskLabelChange,
  handleTaskMemberToggle,
  handleTaskStyleChange,
  handleTaskArchive,
  onChangeSubmit,
  onLabelsUpdate,
  onClose
}: PropTypes.QuickEditorProps) => {
  return createPortal(
    <QuickEditContainer>
      <QuickEditCloseBtn onClick={onClose} content="'\e91c'" size="lg" />
      <TaskQuickEditorWrapper modalPos={modalPos}>
        <TaskQuickEditor>
          <>{children}</>
        </TaskQuickEditor>
        <TaskQuickEditorSave onClick={onChangeSubmit}>Save</TaskQuickEditorSave>
        <QuickEditControls
          handleTaskStyleChange={handleTaskStyleChange}
          handleTaskMemberToggle={handleTaskMemberToggle}
          handleTaskLabelChange={handleTaskLabelChange}
          handleTaskArchive={handleTaskArchive}
          onLabelsUpdate={onLabelsUpdate}
          task={task}
        />
      </TaskQuickEditorWrapper>
    </QuickEditContainer>,
    document.body
  )
}

export default TaskQuickEdit
