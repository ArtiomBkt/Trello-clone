import React from 'react'
import { PropTypes } from '../../../types/prop-types'
import { MemberListContainer, BoardMemberInviteBtn, MemberInviteBtnIcon } from './BoardNav.styled'
import MemberProfile from '../../member/MemberProfile'

const BoardMembers = ({ members }: PropTypes.MemberListProps) => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <MemberListContainer>{members && members.map(member => MemberProfile(member))}</MemberListContainer>
      <BoardMemberInviteBtn>
        <MemberInviteBtnIcon content="'\e902'" size="sm" />
        <span>Invite</span>
      </BoardMemberInviteBtn>
    </div>
  )
}

export default BoardMembers
