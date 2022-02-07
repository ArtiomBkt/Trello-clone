import React from 'react'
import { useLocalStorageState } from '../../hooks/useLocalStorageState'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { BoardTypes } from '../../types/board-types/index'
import { boardService } from '../../services/board.service'
import { BoardContainer, BoardContentWrapper } from './Board.styled'
import BoardNav from '../../components/board-navbar/BoardNav'
import ListPreview from '../../components/list/ListPreview'
import { ListPreviewContainer } from '../../components/list/ListPreview.styled'

const Board = () => {
  const [board, setBoard] = useLocalStorageState('board', boardService.getBoardById())

  const onDragEnd = (result: any): void => {
    const { destination, source, type, draggableId } = result

    if (!board || !board.lists || !destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const args = { board, destination, draggableId, source }
    const newLists = type === 'LIST' ? boardService.handleListMove(args) : boardService.handleTaskMove(args)

    const newBoard = {
      ...board,
      lists: newLists
    }
    setBoard(newBoard)
  }

  const onListUpdate = (newList: BoardTypes.list): void => {
    const idx = board.lists!.findIndex((list: BoardTypes.list) => list.id === newList.id)

    const newLists = [...board.lists!]
    newLists.splice(idx, 1, newList)

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
                        {board.lists?.map((list: BoardTypes.list, idx: number) => (
                          <ListPreview onListUpdate={onListUpdate} key={list.id} isDraggingOver={snapshot.isDraggingOver} list={list} idx={idx} />
                        ))}
                        {provided.placeholder}
                      </ListPreviewContainer>
                    )}
                  </Droppable>
                  asd
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
