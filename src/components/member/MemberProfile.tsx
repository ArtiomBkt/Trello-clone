import React from 'react'
import Avatar from 'react-avatar'
import { PropTypes } from 'types/prop-types'

const MemberProfile = (member: PropTypes.MemberListProps['member'], size: string = '28') => {
  if (!member) return <div>loading</div>
  return <Avatar key={member.id} size={size} textSizeRatio={2} round={true} name={member.username} src={member.image} />
}

export default MemberProfile
