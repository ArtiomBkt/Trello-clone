import React, { useState } from 'react'
import { Draggable, Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

import { boardService } from 'services/board.service'
import { PropTypes } from 'types/prop-types'
import { BoardTypes } from 'types/board-types'

import { ListContentPreview, List, ListTasksWrapper } from './ListPreview.styled'
import { TaskComposerWrapper, TaskComposerToggler, TaskComposerIcon } from './task-composer/TaskComposer.styled'
import { DraggingPlaceholder } from 'components/task/TaskPreview.styled'

import ListHeader from './header/ListHeader'
import TaskComposer from './task-composer/TaskComposer'
import TaskPreview from 'components/task/TaskPreview'

const ListPreview = ({ list, index, placeholderProps, onLabelsUpdate, onArchiveItem, onListUpdate }: PropTypes.ListPreviewProps) => {
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

  const handleTaskArchive = (ev: React.MouseEvent, archivedTask: BoardTypes.task): void => {
    ev.preventDefault()

    const index = list.tasks.findIndex(task => task.id === archivedTask.id)
    if (index === -1) {
      throw new Error(`Task ${archivedTask.id} was not found`)
    }

    const newTasks = [...list.tasks]
    newTasks.splice(index, 1)

    const newList = {
      ...list,
      tasks: newTasks
    }

    const archivedItem: BoardTypes.archivedItem = {
      fromList: list.id,
      item: JSON.parse(JSON.stringify(archivedTask)),
      index
    }

    onArchiveItem(archivedItem, newList)
  }

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided, snapshot) => (
        <ListContentPreview {...provided.draggableProps} ref={provided.innerRef}>
          <List isDragging={snapshot.isDragging}>
            <ListHeader onListUpdate={onListUpdate} dragHandleProps={provided.dragHandleProps} list={list} />
            <Droppable droppableId={list.id} type="TASK">
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <ListTasksWrapper {...provided.droppableProps} ref={provided.innerRef}>
                  {list.tasks.map((task, index) => {
                    const taskPreviewProps = {
                      key: task.id,
                      task,
                      index,
                      onLabelsUpdate,
                      handleTaskEdit,
                      handleTaskArchive
                    }
                    return <TaskPreview {...taskPreviewProps} />
                  })}
                  {provided.placeholder}
                  {placeholderProps && Object.keys(placeholderProps).length > 0 && snapshot.isDraggingOver && (
                    <DraggingPlaceholder
                      style={{
                        top: placeholderProps.clientY,
                        left: placeholderProps.clientX,
                        width: placeholderProps.clientWidth,
                        height: placeholderProps.clientHeight
                      }}
                    />
                  )}
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
