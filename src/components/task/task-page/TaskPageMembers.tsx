import React from 'react'
import { BoardTypes } from 'types/board-types'
import MemberProfile from 'components/member/MemberProfile'

type Props = {
  children: React.ReactNode
  members: BoardTypes.task['members']
}

const TaskPageMembers = ({ members, children }: Props) => {
  return (
    <>
      {children}
      <div style={{ display: 'flex' }}>
        {members && members.map(member => MemberProfile(member, '32'))}
        <div>sdfsdf</div>
      </div>
    </>
  )
}

export default TaskPageMembers
