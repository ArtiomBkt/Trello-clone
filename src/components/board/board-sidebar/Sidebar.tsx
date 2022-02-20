import React from 'react'
import {
  BoardSidenavWrapper,
  BoardSidenavContainer,
  SidenavContent,
  SidenavHeaderContainer,
  SidenavHeaderContent
} from './Sidebar.styled'

type SidenavProps = {
  onSidenavClose: () => void
}

const BoardSidebar = ({ onSidenavClose }: SidenavProps) => {
  return (
    <BoardSidenavWrapper>
      <BoardSidenavContainer>
        <SidenavContent>
          <SidenavHeaderContainer>
            <SidenavHeaderContent>
              <span onClick={onSidenavClose}>X</span>
            </SidenavHeaderContent>
          </SidenavHeaderContainer>
        </SidenavContent>
      </BoardSidenavContainer>
    </BoardSidenavWrapper>
  )
}

export default BoardSidebar
