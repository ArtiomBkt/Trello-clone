import React, { useEffect, useState } from 'react'
import { PropTypes } from '../../../../../types/prop-types'
import MemberProfile from '../../../../../components/member/MemberProfile'
import { MembersModalContainer, MembersModalTitle, MemberWrapper, MemberImgContainer, MemberNameContainer, SelectedMemberIcon } from './MemberModal.styled'

const MemberModal = ({ task, handleTaskMemberToggle }: PropTypes.MemberProps) => {
  const [boardMembers, setBoardMembers] = useState<PropTypes.board['members']>()

  useEffect(() => {
    setBoardMembers(getBoardMembers())
  }, [])

  function getBoardMembers() {
    const board: PropTypes.board = JSON.parse(localStorage.getItem('board') || '')
    if (board) {
      return board.members
    }
  }

  return (
    <MembersModalContainer>
      <MembersModalTitle>Board members</MembersModalTitle>
      <ul>
        {boardMembers &&
          boardMembers.map(member => (
            <li key={member.id}>
              <MemberWrapper onClick={() => handleTaskMemberToggle!(member)}>
                <MemberImgContainer>{MemberProfile(member)}</MemberImgContainer>
                <MemberNameContainer>
                  {member.fullname} ({member.username})
                </MemberNameContainer>
                {task.members?.find(taskMember => taskMember.id === member.id) && <SelectedMemberIcon content="'\e916'" size="sm" />}
              </MemberWrapper>
            </li>
          ))}
      </ul>
    </MembersModalContainer>
  )
}

export default MemberModal
