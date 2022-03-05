import React from 'react'
import { CardCoverBox, CardCoverIcon, CardCoverMenu, CardCoverMenuBtn } from 'containers/task/TaskPage.styled'

const TaskPageCover = () => {
  return (
    <CardCoverBox>
      <CardCoverMenu>
        <CardCoverMenuBtn>
          <CardCoverIcon content="'\e914'" size="sm" /> Cover
        </CardCoverMenuBtn>
      </CardCoverMenu>
    </CardCoverBox>
  )
}

export default TaskPageCover
