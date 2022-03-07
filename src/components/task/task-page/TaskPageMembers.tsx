import React from 'react'
import { BoardTypes } from 'types/board-types'
import MemberProfile from 'components/member/MemberProfile'
import { CardDetailsAddItem, CardDetailsAddItemIcon } from 'containers/task/TaskPage.styled'

type Props = {
  children: React.ReactNode
  members: BoardTypes.task['members']
}

// TODO: Members modal on add button click
// member mini profile on member click

const TaskPageMembers = ({ members, children }: Props) => {
  return (
    <>
      {children}
      <div style={{ display: 'flex' }}>
        {members && members.map(member => MemberProfile(member, '32'))}
        <CardDetailsAddItem style={{ borderRadius: '100%', marginLeft: '4px' }}>
          <CardDetailsAddItemIcon content="'\e901'" size="sm" />
        </CardDetailsAddItem>
      </div>
    </>
  )
}

export default TaskPageMembers
