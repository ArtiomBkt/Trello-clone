import React, { useEffect, useState } from 'react'
import { boardService } from '../../services/board.service'

import * as boardInterfaces from '../../interfaces/board.interface'
import * as taskInterfaces from '../../interfaces/task.interface'

import { BoardContainer, BoardContentWrapper } from './Board.styled'

import BoardNav from './BoardNav'

import ListPreview from '../../components/list/ListPreview'
import { ListPreviewContainer } from '../../components/list/ListPreview.styled'

interface boardProps {
  board: boardInterfaces.board
  lists: boardInterfaces.list[]
  tasks: taskInterfaces.task[]
}

const Board = () => {
  const [board, setBoard] = useState<boardProps['board'] | null>(null)

  useEffect(() => {
    const boardToLoad = boardService.getBoardById()
    setBoard(boardToLoad)
  }, [])

  if (!board) return <div>loading...</div>
  return (
    <BoardContainer>
      <BoardNav />
      <BoardContentWrapper>
        {/* dnd */}
        <ListPreviewContainer>
          {board.lists?.map(list => (
            <ListPreview key={list.id} list={list} />
          ))}
        </ListPreviewContainer>
        {/* dnd */}
      </BoardContentWrapper>
    </BoardContainer>
  )
}

export default Board
