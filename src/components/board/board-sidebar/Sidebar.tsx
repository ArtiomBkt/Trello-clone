import React from 'react'
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
import { PropTypes } from '../../../types/prop-types'

const BoardSidebar = ({ board, isSidenavOpen, onSidenavClose }: PropTypes.SidenavProps) => {
  // const [currentMenu, setCurrentMenu] = useState('')

  // TODO: board sidebar, main page, more options page, board background page, labels page

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
            <MainMenu board={board} />
          </SidenavBodyContainer>
        </SidenavContent>
      </BoardSidenavContainer>
    </BoardSidenavWrapper>
  )
}

export default BoardSidebar
