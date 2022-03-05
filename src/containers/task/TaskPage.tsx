import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { BoardTypes } from 'types/board-types'
import { BoardAction } from 'reducers/useBoardReducer'
import {
  TaskPageWindowOverlay,
  TaskPageContainer,
  TaskPageContentWrapper,
  TaskPageCloseBtn,
  TaskPageContent,
  CardCoverBox,
  CardCoverMenu,
  CardCoverMenuBtn,
  CardCoverIcon,
  WindowTaskHeader,
  WindowTaskHeaderIcon,
  WindowTaskTitle,
  WindowTaskListIdentifier,
  ListIdentifierText,
  WindowTaskMainWrapperGrid,
  MainCol,
  SideControlsCol
} from './TaskPage.styled'

const DEFAULT_EVENTS = ['mousedown', 'touchstart']

const useClickOutside = <T extends HTMLElement = any>(handler: () => void, events?: string[] | null, nodes?: HTMLElement[]) => {
  const ref = useRef<T>()

  useEffect(() => {
    const listener = (event: any) => {
      if (Array.isArray(nodes)) {
        const shouldTrigger = nodes.every(node => !!node && !node.contains(event.target))
        shouldTrigger && handler()
      } else if (ref.current && !ref.current.contains(event.target)) {
        handler()
      }
    }

    ;(events || DEFAULT_EVENTS).forEach(fn => document.addEventListener(fn, listener))

    return () => {
      ;(events || DEFAULT_EVENTS).forEach(fn => document.removeEventListener(fn, listener))
    }
  }, [ref, handler, nodes, events])

  return ref
}

const TaskPage = () => {
  const navigate = useNavigate()
  const { taskId } = useParams()
  const [board] = useOutletContext<[BoardTypes.board, React.Dispatch<BoardAction>]>()
  const [task, setTask] = useState<BoardTypes.task>()
  const taskPageRef = useClickOutside(handleCloseTaskPage)
  const overlayRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    for (let list of board.lists) {
      const task = list.tasks.find(task => task.id === taskId)
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
          <Link to="/">
            <TaskPageCloseBtn content="'\e91c'" size="md" />
          </Link>
          <TaskPageContent>
            <CardCoverBox>
              <CardCoverMenu>
                <CardCoverMenuBtn>
                  <CardCoverIcon content="'\e914'" size="sm" /> Cover
                </CardCoverMenuBtn>
              </CardCoverMenu>
            </CardCoverBox>
            <WindowTaskHeader>
              <WindowTaskHeaderIcon content="'\e912'" size="lg" />
              <WindowTaskTitle>h2 and textarea</WindowTaskTitle>
              <WindowTaskListIdentifier>
                <ListIdentifierText>in list "list name"</ListIdentifierText>
              </WindowTaskListIdentifier>
            </WindowTaskHeader>
            <WindowTaskMainWrapperGrid>
              <MainCol></MainCol>
              <SideControlsCol></SideControlsCol>
            </WindowTaskMainWrapperGrid>
            grid
          </TaskPageContent>
        </TaskPageContentWrapper>
      </TaskPageContainer>
    </TaskPageWindowOverlay>
  )
}

export default TaskPage
