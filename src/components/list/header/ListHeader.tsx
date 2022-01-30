import React from 'react'
import * as boardInterfaces from '../../../interfaces/board.interface'
import { ListTitle, ListHeaderTarget, ListHeaderNameAssist, ListHeaderNameInput, ListHeaderOpts, HeaderOptsBtn } from './ListHeader.styled'

type Props = {
  list: boardInterfaces.list
}

const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
  console.log(target.value)
}

const ListHeader = ({ list }: Props) => {
  return (
    <ListTitle>
      <ListHeaderTarget />
      <ListHeaderNameAssist>{list.title}</ListHeaderNameAssist>
      <ListHeaderNameInput onChange={handleInputChange} value={list.title} />
      <ListHeaderOpts>
        <HeaderOptsBtn content="'\e952'" size="sm" />
      </ListHeaderOpts>
    </ListTitle>
  )
}

export default ListHeader
