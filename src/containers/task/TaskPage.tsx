import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

import { BoardTypes } from 'types/board-types'
import { BoardAction } from 'reducers/useBoardReducer'
import useClickOutside from 'hooks/useClickOutside'

import {
  TaskPageWindowOverlay,
  TaskPageContainer,
  TaskPageContentWrapper,
  TaskPageCloseBtn,
  TaskPageContent,
  WindowTaskMainWrapperGrid,
  MainCol,
  SideControlsCol,
  CardDetailsItem,
  CardDetailsData
} from './TaskPage.styled'

import TaskPageCover from 'components/task/task-page/TaskPageCover'
import TaskPageTitle from 'components/task/task-page/TaskPageTitle'

const TaskPage = () => {
  const navigate = useNavigate()
  const { taskId } = useParams()
  const [board] = useOutletContext<[BoardTypes.board, React.Dispatch<BoardAction>]>()
  const [list, setList] = useState<BoardTypes.list>()
  const [task, setTask] = useState<BoardTypes.task>()
  const taskPageRef = useClickOutside(handleCloseTaskPage)
  const overlayRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    for (let list of board.lists) {
      const task = list.tasks.find(task => (task.id === taskId ? (setList(list), task) : false))
      return task && setTask(task)
    }
  }, [board, taskId])

  useEffect(() => {
    overlayRef.current.focus()
  }, [])

  function handleCloseTaskPage(ev?: React.MouseEvent | React.KeyboardEvent) {
    if (ev && (ev as React.KeyboardEvent).key === 'Escape') {
      return navigate('/')
    }
    ;(ev?.target === overlayRef.current || !ev) && navigate('/')
  }

  return (
    <TaskPageWindowOverlay ref={overlayRef} tabIndex={0} onClick={handleCloseTaskPage} onKeyUp={handleCloseTaskPage}>
      <TaskPageContainer>
        <TaskPageContentWrapper ref={taskPageRef}>
          <TaskPageCloseBtn to="/" content="'\e91c'" size="md" />
          <TaskPageContent>
            <TaskPageCover />
            {task && <TaskPageTitle list={list} taskTitle={task.title} />}
            <WindowTaskMainWrapperGrid>
              <MainCol>
                <CardDetailsData>
                  <CardDetailsItem>
                    <h3>Members</h3>
                  </CardDetailsItem>
                  <CardDetailsItem>
                    <h3>Labels</h3>
                  </CardDetailsItem>
                  <CardDetailsItem>
                    <h3>Start date</h3>
                  </CardDetailsItem>
                  <CardDetailsItem>
                    <h3>Due date</h3>
                  </CardDetailsItem>
                </CardDetailsData>
                {/* // TODO: Description and the rest go here */}
              </MainCol>
              <SideControlsCol></SideControlsCol>
            </WindowTaskMainWrapperGrid>
          </TaskPageContent>
        </TaskPageContentWrapper>
      </TaskPageContainer>
    </TaskPageWindowOverlay>
  )
}

export default TaskPage
