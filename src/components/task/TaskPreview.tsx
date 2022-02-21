import React, { useLayoutEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { PropTypes } from '../../types/prop-types'
import TaskDetails from '../../containers/task/TaskDetails'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'
import { EditorTaskTextarea } from '../../containers/modals/task/QuickEdit.styled'
import TaskQuickEdit from '../../containers/modals/task/QuickEdit'

const TaskPreview = ({ task, idx, handleTaskEdit }: PropTypes.TaskPreviewProps) => {
  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false)
  const [taskEditorPos, setTaskEditorPos] = useState({ top: 0, left: 0 })
  const [taskTitle, setTaskTitle] = useState<string>(task.title)
  const taskRef = useRef<HTMLDivElement>(null)
  const taskTitleRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (taskTitleRef.current && isQuickEditOpen) {
      taskTitleRef.current.select()
    }
  }, [isQuickEditOpen])

  const handleQuickEditToggle = (ev?: React.MouseEvent): void => {
    if (ev && taskRef.current) {
      ev.stopPropagation()
      ev.preventDefault()

      const { x, y } = taskRef.current.getBoundingClientRect()
      setTaskEditorPos({ top: y, left: x })
    }
    setIsQuickEditOpen(prevState => !prevState)
  }

  const handleQuickEditChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskTitle(target.value)
  }

  const handleTaskTitleSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'click') || !taskTitle) return
    ev.preventDefault()

    const newTask = JSON.parse(JSON.stringify(task))
    newTask.title = taskTitle

    handleTaskEdit(newTask)
    handleQuickEditToggle()
  }

  return (
    <Draggable draggableId={task.id} index={idx}>
      {provided => (
        <TaskPreviewContainer
          href={`/${task.id}`}
          // to={`/${task?.id}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={task?.style}
        >
          {!task?.style?.fullCover && task?.style?.background && <TaskCover style={task.style} />}
          <TaskEditIcon onClick={handleQuickEditToggle} content="'\e928'" size="sm" />
          {isQuickEditOpen && (
            <TaskQuickEdit
              taskId={task.id}
              modalPos={taskEditorPos}
              onChangeSubmit={handleTaskTitleSubmit}
              onClose={handleQuickEditToggle}
            >
              <EditorTaskTextarea
                onKeyDown={handleTaskTitleSubmit}
                ref={taskTitleRef}
                onChange={handleQuickEditChange}
                value={taskTitle}
              />
            </TaskQuickEdit>
          )}
          <TaskDetails taskRef={taskRef} task={task} />
        </TaskPreviewContainer>
      )}
    </Draggable>
  )
}

export default TaskPreview
