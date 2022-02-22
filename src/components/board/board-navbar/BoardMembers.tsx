import React from 'react'
import Avatar from 'react-avatar'
import { PropTypes } from '../../../types/prop-types'
import { MemberListContainer, BoardMemberInviteBtn, MemberInviteBtnIcon } from './BoardNav.styled'

const BoardMembers = ({ members }: PropTypes.MemberListProps) => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <MemberListContainer>
        {members &&
          members.map(member => (
            <Avatar
              key={member.id}
              size="28"
              textSizeRatio={2}
              round={true}
              name={member.username}
              src={member.image}
            />
          ))}
      </MemberListContainer>
      <BoardMemberInviteBtn>
        <MemberInviteBtnIcon content="'\e902'" size="sm" />
        <span>Invite</span>
      </BoardMemberInviteBtn>
    </div>
  )
}

export default BoardMembers
