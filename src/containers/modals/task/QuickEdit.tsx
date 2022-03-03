import React, { useState } from 'react'
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
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState<boolean>(false)
  const backgroundRef = React.useRef<HTMLDivElement>(null!)

  const handleEscKey = (ev: React.KeyboardEvent) => ev.key === 'Escape' && onClose!()

  const handleOutsideClick = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    ev.preventDefault()
    ev.target === backgroundRef.current && onClose!(ev)
  }

  const handleBadgeModalToggle = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    ev.preventDefault()
    setIsBadgeModalOpen(p => !p)
  }

  return createPortal(
    <QuickEditContainer tabIndex={0} ref={backgroundRef} onClick={isBadgeModalOpen ? undefined : handleOutsideClick} onKeyUp={handleEscKey}>
      <QuickEditCloseBtn onClick={onClose} content="'\e91c'" size="lg" />
      <div style={{ position: 'relative' }}>
        <TaskQuickEditorWrapper modalPos={modalPos}>
          <TaskQuickEditor>
            <>{children}</>
          </TaskQuickEditor>
          <TaskQuickEditorSave onClick={onChangeSubmit}>Save</TaskQuickEditorSave>
          <QuickEditControls
            handleBadgeModalToggle={handleBadgeModalToggle}
            handleTaskStyleChange={handleTaskStyleChange}
            handleTaskMemberToggle={handleTaskMemberToggle}
            handleTaskLabelChange={handleTaskLabelChange}
            handleTaskArchive={handleTaskArchive}
            onLabelsUpdate={onLabelsUpdate}
            task={task}
          />
        </TaskQuickEditorWrapper>
      </div>
    </QuickEditContainer>,
    document.body
  )
}

export default TaskQuickEdit
