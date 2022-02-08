import React from 'react'
import Avatar from '@atlaskit/avatar'
import { PropTypes } from '../../../types/prop-types'
import { MemberListContainer, BoardMemberInviteBtn, MemberInviteBtnIcon } from './BoardNav.styled'

const BoardMembers = ({ members }: PropTypes.MemberListProps) => {
  return (
    <div style={{display: 'inline-flex'}}>
      <MemberListContainer>
        {members &&
          members.map(member => (
            <Avatar key={member.id} borderColor="none" size="small" appearance="circle" name={member.username} src={member.image} />
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
