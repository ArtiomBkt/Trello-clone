import React, { useLayoutEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { PropTypes } from '../../types/prop-types'
import TaskDetails from '../../containers/task/TaskDetails'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'
import { EditorTaskTextarea } from '../../containers/modals/task/QuickEdit.styled'
import TaskQuickEdit from '../../containers/modals/task/QuickEdit'

const TaskPreview = ({ task, idx }: PropTypes.TaskPreviewProps) => {
  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false)
  const [taskEditorPos, setTaskEditorPos] = useState({ top: 0, left: 0 })
  const taskRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (taskRef.current && isQuickEditOpen) {
      const { x, y } = taskRef.current.getBoundingClientRect()
      setTaskEditorPos({ top: y, left: x })
    }
  }, [isQuickEditOpen, taskRef])

  const handleQuickEditToggle = (ev: React.MouseEvent) => setIsQuickEditOpen(prevState => !prevState)

  const handleQuickEditChange = () => {}

  return (
    <Draggable draggableId={task.id} index={idx}>
      {provided => (
        <TaskPreviewContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={task?.style}
          to={`/${task?.id}`}
        >
          {!task?.style?.fullCover && task?.style?.background && <TaskCover style={task.style} />}
          <TaskEditIcon onClickCapture={handleQuickEditToggle} content="'\e928'" size="sm" />
          {isQuickEditOpen && (
            <TaskQuickEdit modalPos={taskEditorPos} isEditorOpen={isQuickEditOpen} onClose={handleQuickEditToggle}>
              <EditorTaskTextarea onChange={handleQuickEditChange} value={task.title} />
            </TaskQuickEdit>
          )}
          <TaskDetails taskRef={taskRef} task={task} />
        </TaskPreviewContainer>
      )}
    </Draggable>
  )
}

export default TaskPreview
