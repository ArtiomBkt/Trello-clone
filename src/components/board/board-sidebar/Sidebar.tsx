import React, { useState } from 'react'
import {
  BoardSidenavWrapper,
  BoardSidenavContainer,
  SidenavContent,
  SidenavHeaderContainer,
  SidenavHeaderContent,
  SidenavHeaderText,
  SidenavCloseBtn,
  SidenavBackBtn,
  SidenavDivider,
  SidenavBodyContainer
} from './Sidebar.styled'
import MainMenu from './sidebar-menus/MainMenu'

type SidenavProps = {
  isSidenavOpen: boolean
  onSidenavClose: () => void
}

const BoardSidebar = ({ onSidenavClose, isSidenavOpen }: SidenavProps) => {
  // const [currentMenu, setCurrentMenu] = useState('')

  return (
    <BoardSidenavWrapper isSidenavOpen={isSidenavOpen}>
      <BoardSidenavContainer>
        <SidenavContent>
          <SidenavHeaderContainer>
            <SidenavHeaderContent>
              <SidenavBackBtn content="'\e90a'" size="lg" />
              <SidenavHeaderText>Menu</SidenavHeaderText>
              <SidenavCloseBtn onClick={onSidenavClose} content="'\e91c'" size="lg" />
            </SidenavHeaderContent>
            <SidenavDivider />
          </SidenavHeaderContainer>
          <SidenavBodyContainer>
            <MainMenu />
          </SidenavBodyContainer>
        </SidenavContent>
      </BoardSidenavContainer>
    </BoardSidenavWrapper>
  )
}

export default BoardSidebar
