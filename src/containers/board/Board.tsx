import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { boardService } from '../../services/board.service'

import * as boardInterfaces from '../../interfaces/board.interface'
import * as taskInterfaces from '../../interfaces/task.interface'

import { BoardContainer, BoardContentWrapper } from './Board.styled'

import BoardNav from '../../components/board-navbar/BoardNav'

import ListPreview from '../../components/list/ListPreview'
import { ListPreviewContainer } from '../../components/list/ListPreview.styled'
import styled, { css } from 'styled-components'

type boardProps = {
  board: boardInterfaces.board
  lists: boardInterfaces.list[]
  tasks: taskInterfaces.task[]
}

const Board = () => {
  const [board, setBoard] = useState<boardProps['board']>(() => boardService.getBoardById())
  // const [placeholderProps, setPlaceholderProps] = useState<{ clientY: number; clientX: number; clientHeight: number; clientWidth: number } | null>(null)

  // const queryAttr = 'data-rbd-drag-handle-draggable-id'
  // const destinationQueryAttr = 'data-rbd-droppable-id'

  // const getDraggedDom = (draggableId: any): Element | null => {
  //   const domQuery = `[${queryAttr}=${draggableId}]`
  //   const draggedDom = document.querySelector(domQuery)

  //   return draggedDom
  // }

  // const getDestinationDom = (droppableId: any): Element | null => {
  //   const domQuery = `[${queryAttr}=${droppableId}]`
  //   const destinationDom = document.querySelector(domQuery)

  //   return destinationDom
  // }

  const onDragEnd = (result: any): void => {
    // setPlaceholderProps(null)

    const { destination, source, type, draggableId } = result

    if (!board || !board.lists) return
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const args = { board, destination, draggableId, source }
    const newLists = type === 'LIST' ? boardService.handleListMove(args) : boardService.handleTaskMove(args)

    const newBoard = {
      ...board,
      lists: newLists
    }
    setBoard(newBoard)
  }

  // const onDragStart = (event: any): void => {
  //   const draggedDOM = getDraggedDom(event.draggableId)

  //   if (!draggedDOM || !draggedDOM.parentNode) return

  //   const { clientHeight, clientWidth } = draggedDOM

  //   const sourceIndex = event.source.index
  //   const clientY =
  //     (parseFloat(window.getComputedStyle(draggedDOM.parentNode as any).paddingTop) as any) +
  //     [...(draggedDOM.parentNode.children as any)].slice(0, sourceIndex).reduce((t, c) => {
  //       const style = c.currentStyle || window.getComputedStyle(c)
  //       const marginBottom = parseFloat(style.marginBottom)
  //       return t + c.clientHeight + marginBottom
  //     }, 0)
  //   setPlaceholderProps({
  //     clientHeight,
  //     clientWidth,
  //     clientY,
  //     clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode as any).paddingLeft)
  //   })
  // }

  // const onDragUpdate = (event: any): void => {
  //   if (!event.destination) return

  //   const draggedDOM = getDraggedDom(event.draggableId)

  //   if (!draggedDOM || !draggedDOM.parentNode) return

  //   const { clientHeight, clientWidth } = draggedDOM

  //   const destinationIdx = event.destination.index
  //   const sourceIndex = event.source.index

  //   const childrenArray = [...(draggedDOM.parentNode.children as any)]
  //   const movedItem = childrenArray[sourceIndex]
  //   childrenArray.splice(sourceIndex, 1)

  //   const droppedDom = getDestinationDom(event.destination.droppableId)
  //   const destinationChildrenArray = [...(droppedDom?.children as any)]
  //   let updatedArray
  //   if (draggedDOM.parentNode === droppedDom) {
  //     updatedArray = [...childrenArray.slice(0, destinationIdx), movedItem, ...childrenArray.slice(destinationIdx + 1)]
  //   } else {
  //     updatedArray = [...destinationChildrenArray.slice(0, destinationIdx), movedItem, ...destinationChildrenArray.slice(destinationIdx + 1)]
  //   }

  //   var clientY =
  //     parseFloat(window.getComputedStyle(draggedDOM.parentNode as any).paddingTop) +
  //     updatedArray.slice(0, destinationIdx).reduce((t, c) => {
  //       const style = c.currentStyle || window.getComputedStyle(c)
  //       const marginBottom = parseFloat(style.marginBottom)
  //       return t + c.clientHeight + marginBottom
  //     }, 0)

  //   setPlaceholderProps({
  //     clientHeight,
  //     clientWidth,
  //     clientY,
  //     clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode as any).paddingLeft)
  //   })
  // }

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
                          <ListPreview key={list.id} placeholder={provided.placeholder} isDraggingOver={snapshot.isDraggingOver} list={list} idx={idx} />
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

// {placeholderProps && snapshot.isDraggingOver && <Placeholder top={placeholderProps.clientY} left={placeholderProps.clientX} height={placeholderProps.clientHeight} width={placeholderProps.clientWidth} />}

// interface placeholderProps {
//   top: number
//   left: number
//   height: number
//   width: number
// }

// const Placeholder = styled.div<placeholderProps>`
//   background-color: #2c2c2c;
//   position: absolute;
//   border-radius: 3px;

//   ${props => css`
//     top: ${props.top};
//     left: ${props.left};
//     height: ${props.height}px;
//     width: ${props.width}px;
//   `}
// `
