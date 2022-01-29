import React, { useEffect, useState } from 'react'
import { boardService } from '../../services/board.service'
import * as boardInterfaces from '../../interfaces/board.interface'
import * as taskInterfaces from '../../interfaces/task.interface'
import ListPreview from '../../components/list/ListPreview'
import BoardContainer from './BoardContainer.styled'
import BoardNav from './BoardNav'

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
      {/* dnd */}
      <div style={{ position: 'relative', height: '40px' }}>
        {board.lists?.map(list => (
          <ListPreview key={list.id} list={list} />
        ))}
      </div>
      {/* dnd */}
    </BoardContainer>
  )
}

export default Board
