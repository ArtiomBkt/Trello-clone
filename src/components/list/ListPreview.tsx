import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { PropTypes } from '../../types/prop-types'
import { boardService } from '../../services/board.service'
import TaskPreview from '../task/TaskPreview'
import ListHeader from './header/ListHeader'
import TaskComposer from './task-composer/TaskComposer'
import { ListContentPreview, List, ListTasksWrapper } from './ListPreview.styled'
import { TaskComposerWrapper, TaskComposerToggler, TaskComposerIcon } from './task-composer/TaskComposer.styled'
import { BoardTypes } from '../../types/board-types'

const ListPreview = ({ list, idx, isDraggingOver, onLabelsUpdate, onListUpdate }: PropTypes.ListPreviewProps) => {
  const [isComposerOpen, setIsComposerOpen] = useState(false)

  const handleComposerToggle = (): void => {
    setIsComposerOpen(p => !p)
  }

  const handleTaskAdd = (taskTitle: string): void => {
    const newTask = boardService.getEmptyTask()
    newTask.title = taskTitle

    const newTasks = [...list.tasks]
    newTasks.push(newTask)

    const newList = {
      ...list,
      tasks: newTasks
    }

    onListUpdate(newList)
  }

  const handleTaskEdit = (updatedTask: BoardTypes.task): void => {
    const idx = list.tasks.findIndex(task => task.id === updatedTask.id)
    if (idx === -1) {
      throw new Error(`Task ${updatedTask.id} was not found`)
    }

    const newTasks = [...list.tasks]
    newTasks.splice(idx, 1, updatedTask)

    const newList = {
      ...list,
      tasks: newTasks
    }

    onListUpdate(newList)
  }

  return (
    <Draggable draggableId={list.id} index={idx}>
      {(provided, snapshot) => (
        <ListContentPreview {...provided.draggableProps} ref={provided.innerRef}>
          <List isDraggingOver={isDraggingOver} isDragging={snapshot.isDragging}>
            <ListHeader onListUpdate={onListUpdate} dragHandleProps={provided.dragHandleProps} list={list} />
            <Droppable droppableId={list.id} type="TASK">
              {provided => (
                <ListTasksWrapper {...provided.droppableProps} ref={provided.innerRef}>
                  {list.tasks?.map((task, idx) => (
                    <TaskPreview onLabelsUpdate={onLabelsUpdate} handleTaskEdit={handleTaskEdit} key={task.id} task={task} idx={idx} />
                  ))}
                  {provided.placeholder}
                  {isComposerOpen && <TaskComposer handleTaskAdd={handleTaskAdd} handleComposerToggle={handleComposerToggle} />}
                </ListTasksWrapper>
              )}
            </Droppable>
            {!isComposerOpen && (
              <TaskComposerWrapper>
                <TaskComposerToggler onClick={() => setIsComposerOpen(true)}>
                  <TaskComposerIcon content="'\e901'" size="sm" />
                  <span>Add a card</span>
                </TaskComposerToggler>
              </TaskComposerWrapper>
            )}
          </List>
        </ListContentPreview>
      )}
    </Draggable>
  )
}

export default ListPreview
