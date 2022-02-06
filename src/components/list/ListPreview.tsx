import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import * as boardInterfaces from '../../interfaces/board.interface'
import { boardService } from '../../services/board.service'
import TaskPreview from '../task/TaskPreview'
import ListHeader from './header/ListHeader'
import TaskComposer from './task-composer/TaskComposer'
import { ListContentPreview, List, ListTasksWrapper } from './ListPreview.styled'
import { TaskComposerWrapper, TaskComposerToggler, TaskComposerIcon } from './task-composer/TaskComposer.styled'

type listProps = {
  list: boardInterfaces.list
  idx: number
  isDraggingOver: boolean
  onListUpdate: (list: listProps['list']) => void
}

const ListPreview = ({ list, idx, isDraggingOver, onListUpdate }: listProps) => {
  const [isComposerOpen, setIsComposerOpen] = useState(false)

  const handleComposerToggle = () => {
    setIsComposerOpen(false)
  }

  const handleTaskAdd = (taskTitle: string | null) => {
    const newTask = boardService.getEmptyTask()
    newTask.title = taskTitle!

    const newTasks = [...list.tasks]
    newTasks.push(newTask)

    const newList = {
      ...list,
      tasks: newTasks
    }
    
    onListUpdate(newList)
  }

  return (
    // TODO: add dnd ui
    <Draggable draggableId={list.id} index={idx}>
      {(provided, snapshot) => (
        <ListContentPreview {...provided.draggableProps} ref={provided.innerRef}>
          <List isDraggingOver={isDraggingOver} isDragging={snapshot.isDragging}>
            <ListHeader onListUpdate={onListUpdate} dragHandleProps={provided.dragHandleProps} list={list} />
            <Droppable droppableId={list.id} type="TASK">
              {(provided, { isDraggingOver }) => (
                <>
                  <ListTasksWrapper {...provided.droppableProps} ref={provided.innerRef}>
                    {list.tasks?.map((task, idx) => (
                      <TaskPreview isDraggingOver={isDraggingOver} key={task.id} task={task} idx={idx} />
                    ))}
                    {provided.placeholder}
                    {isComposerOpen && <TaskComposer handleTaskAdd={handleTaskAdd} handleComposerToggle={handleComposerToggle} />}
                  </ListTasksWrapper>
                </>
              )}
            </Droppable>
            {!isComposerOpen && <TaskComposerWrapper>
              <TaskComposerToggler onClick={()=>setIsComposerOpen(true)}>
                <TaskComposerIcon content="'\e901'" size="sm" />
                <span>Add a card</span>
              </TaskComposerToggler>
            </TaskComposerWrapper>}
          </List>
        </ListContentPreview>
      )}
    </Draggable>
  )
}

export default ListPreview

// {/* <TaskComposerWrapper>// TODO: add task compose functionality</TaskComposerWrapper> */}
