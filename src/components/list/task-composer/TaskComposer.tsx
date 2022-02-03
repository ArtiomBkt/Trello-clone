import React from 'react'
import { TaskComposerWrapper, TaskComposerToggler, TaskComposerIcon } from './TaskComposer.styled'

const TaskComposer = () => {
  return (
    <TaskComposerWrapper>
      <TaskComposerToggler>
        <TaskComposerIcon content="'\e901'" size="sm" />
        <span>Add a card</span>
      </TaskComposerToggler>
    </TaskComposerWrapper>
  )
}

export default TaskComposer
