import React from 'react'
import { BoardOrgContainer, BoardNavDivider, BoardOrgBtn, BoardOrgBtnIcon } from './BoardNav.styled'

const BoardOrg = () => {
  return (
    <BoardOrgContainer>
      <BoardNavDivider />
      <BoardOrgBtn>
        <span>*username*'s Workspace</span>
      </BoardOrgBtn>
      <BoardNavDivider />
      <BoardOrgBtn style={{paddingLeft: '32px'}}>
        <BoardOrgBtnIcon content="'\e959'" size="sm" />
        <span>Private</span>
      </BoardOrgBtn>
    </BoardOrgContainer>
  )
}

export default BoardOrg
