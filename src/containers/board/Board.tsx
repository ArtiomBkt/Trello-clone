import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

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
  const [board, setBoard] = useState<boardProps['board']>(() => boardService.getBoardById())

  const onDragEnd = (result: any): void => {
    const { destination, source, type, draggableId } = result

    if (!board || !board.lists || destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const args = { board, destination, draggableId, source }
    const newLists = type === 'LIST' ? boardService.handleListMove(args) : boardService.handleTaskMove(args)

    const newBoard = {
      ...board,
      lists: newLists
    }
    setBoard(newBoard)
  }

  if (!board) return <div>loading...</div>
  return (
    <BoardContainer>
      <BoardContentWrapper>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0', overflowY: 'auto', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginRight: 0, position: 'relative' }}>
              <BoardNav />
              <div style={{ flexGrow: 1, position: 'relative' }}>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable direction="horizontal" droppableId={board.id} type="LIST">
                    {(provided, snapshot) => (
                      <ListPreviewContainer {...provided.droppableProps} ref={provided.innerRef}>
                        {board.lists?.map((list, idx) => (
                          <ListPreview key={list.id} isDraggingOver={snapshot.isDraggingOver} list={list} idx={idx} />
                        ))}
                        {provided.placeholder}
                      </ListPreviewContainer>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
          </div>
        </div>
      </BoardContentWrapper>
    </BoardContainer>
  )
}

export default Board
