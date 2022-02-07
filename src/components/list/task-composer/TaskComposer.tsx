import React, { useState, useRef, useLayoutEffect } from 'react'
import { TaskComposerContainer, ComposingTask, ComposingTaskDetails, ComposingTaskTextarea, AddTaskBtn, DiscardTaskIcon } from './TaskComposer.styled'
import { PropTypes } from '../../../types/prop-types'

const TaskComposer = ({ handleComposerToggle, handleTaskAdd }: PropTypes.TaskComposerProps) => {
  const [taskTitle, setTaskTitle] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (textAreaRef.current) textAreaRef.current.focus()
  }, [])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskTitle(target.value)
  }

  const handleTaskSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'mousedown') || !taskTitle) return
    ev.preventDefault()
    handleTaskAdd(taskTitle)
    setTaskTitle('')
  }

  const handleDiscardTask = (): void => {
    setTaskTitle('')
    handleComposerToggle()
  }

  return (
    <TaskComposerContainer>
      <ComposingTask>
        <ComposingTaskDetails>
          <ComposingTaskTextarea
            ref={textAreaRef}
            value={taskTitle}
            // onBlur={handleDiscardTask}
            onKeyDown={handleTaskSubmit}
            onChange={handleInputChange}
            placeholder="Enter a title for this card..."
          />
        </ComposingTaskDetails>
      </ComposingTask>
      <div>
        <AddTaskBtn onMouseDown={handleTaskSubmit}>Add card</AddTaskBtn>
        <DiscardTaskIcon onClick={handleDiscardTask} content="'\e91c'" size="lg" />
      </div>
    </TaskComposerContainer>
  )
}

export default TaskComposer
