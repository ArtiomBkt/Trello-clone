import React from 'react'
import { Link } from 'react-router-dom'
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

const TaskPage = () => {
  return (
    <TaskPageWindowOverlay>
      <TaskPageContainer>
        <TaskPageContentWrapper tabIndex={-1}>
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
