import React, { useEffect, useRef, useState } from 'react'
import ErrorBoundary, { FallbackProps } from 'containers/ErrorBoundary'
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
import TaskPageDetails from './TaskPageDetails'

type TaskPageState = {
  status: 'idle' | 'resolved' | 'pending' | 'rejected'
  task: BoardTypes.task | null
  error: string | null
}

const TaskPage = () => {
  const navigate = useNavigate()
  const { taskId } = useParams()
  const [board] = useOutletContext<[BoardTypes.board, React.Dispatch<BoardAction>]>()
  const [list, setList] = useState<BoardTypes.list>()
  const [{ status, task, error }, setState] = useState<TaskPageState>({
    status: taskId ? 'pending' : 'idle',
    task: null,
    error: null
  })
  const taskPageRef = useClickOutside(handleCloseTaskPage)
  const overlayRef = useRef<HTMLDivElement>(null!)

  // Dummy fetching for now
  const fetchTask = React.useCallback(async () => {
    return new Promise<BoardTypes.task | undefined>((resolve, reject) => {
      setTimeout(() => {
        resolve(getTask())
      }, 300)
    })
    function getTask() {
      for (let list of board.lists) {
        const task = list.tasks.find(task => (task.id === taskId ? (setList(list), task) : false))
        if (task) {
          return task
        }
      }
    }
  }, [board.lists, taskId])

  useEffect(() => {
    setState(state => ({ ...state, status: 'pending' }))
    fetchTask().then(
      task => {
        if (!task) {
          throw new Error(`Could not fetch task id ${taskId}`)
        }
        setState(state => ({ ...state, task, status: 'resolved' }))
      },
      error => {
        setState(state => ({ ...state, status: 'rejected', error }))
      }
    )
  }, [fetchTask, taskId])

  function handleCloseTaskPage(ev?: React.MouseEvent | React.KeyboardEvent) {
    if (ev && (ev as React.KeyboardEvent).key === 'Escape') {
      return navigate('/')
    }
    ;(ev?.target === overlayRef.current || !ev) && navigate('/')
  }

  if (status === 'idle') return <div>No task fetching</div>
  else if (status === 'pending') return <div>loading...</div>
  else if (status === 'rejected') throw error
  else if (status === 'resolved' && task)
    return (
      <TaskPageWindowOverlay ref={overlayRef} tabIndex={0} onClick={handleCloseTaskPage} onKeyUp={handleCloseTaskPage}>
        <TaskPageContainer>
          <TaskPageContentWrapper ref={taskPageRef}>
            <TaskPageCloseBtn to="/" styling={task.style} content="'\e91c'" size="md" />
            <TaskPageContent>
              <ErrorBoundary resetKeys={[taskId]} FallbackComponent={TaskFetchErrorFallback}>
                <TaskPageCover task={task} />
                <TaskPageTitle list={list} taskTitle={task.title} />
                <WindowTaskMainWrapperGrid>
                  <MainCol>
                    <TaskPageDetails task={task} />
                    {/* // TODO: Description and the rest go here */}
                  </MainCol>
                  <SideControlsCol></SideControlsCol>
                </WindowTaskMainWrapperGrid>
              </ErrorBoundary>
            </TaskPageContent>
          </TaskPageContentWrapper>
        </TaskPageContainer>
      </TaskPageWindowOverlay>
    )

  throw new Error('Something went wrong')
}

function TaskFetchErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      There was an error: <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default TaskPage
