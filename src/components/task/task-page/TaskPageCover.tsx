import React from 'react'
import { BoardTypes } from 'types/board-types'

import { CardCoverBox, CardCoverIcon, CardCoverMenu, CardCoverMenuBtn } from 'containers/task/TaskPage.styled'

type TaskPageCoverProps = {
  task: BoardTypes.task
}

const TaskPageCover = ({ task }: TaskPageCoverProps) => {
  return (
    <CardCoverBox styling={task.style}>
      <CardCoverMenu>
        <CardCoverMenuBtn>
          <CardCoverIcon content="'\e914'" size="sm" /> Cover
        </CardCoverMenuBtn>
      </CardCoverMenu>
    </CardCoverBox>
  )
}

export default TaskPageCover
