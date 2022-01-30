import React, { useEffect, useState } from 'react'
import { boardService } from '../../services/board.service'

import * as boardInterfaces from '../../interfaces/board.interface'
import * as taskInterfaces from '../../interfaces/task.interface'

import { BoardContainer, BoardContentWrapper } from './Board.styled'

import BoardNav from '../../components/board-navbar/BoardNav'

import ListPreview from '../../components/list/ListPreview'
import { ListPreviewContainer } from '../../components/list/ListPreview.styled'

type boardProps = {
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
      <BoardContentWrapper>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0', overflowY: 'auto', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginRight: 0, position: 'relative' }}>
              <BoardNav />
              {/* dnd */}
              <div style={{flexGrow: 1, position: 'relative'}}>
                <ListPreviewContainer>
                  {board.lists?.map(list => (
                    <ListPreview key={list.id} list={list} />
                  ))}
                </ListPreviewContainer>
              </div>
              {/* dnd */}
            </div>
          </div>
        </div>
      </BoardContentWrapper>
    </BoardContainer>
  )
}

export default Board
