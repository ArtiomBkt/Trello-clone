import { BoardTypes } from 'types/board-types'

export declare module ServiceTypes {
  type valueArgs = BoardTypes.list | BoardTypes.task | BoardTypes.board
  type typeArgs = 'task' | 'list' | 'board'

  type dndTypes = {
    droppableId: string
    index: number
  }

  type dragAndDropArgs = {
    board: BoardTypes.board
    draggableId: string
    destination: dndTypes
    source: dndTypes
  }

  type saveArgs = {
    value: valueArgs
    type: typeArgs
  }

  type getBoardById = (boardId?: BoardTypes.board['id']) => BoardTypes.board
  type getEmptyTask = () => BoardTypes.task
  type getEmptyList = () => BoardTypes.list
}
