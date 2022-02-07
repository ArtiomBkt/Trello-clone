import { BoardTypes } from '../board-types'

export declare module serviceTypes {
  export type valueArgs = BoardTypes.list | BoardTypes.task | BoardTypes.board
  export type typeArgs = 'task' | 'list' | 'board'

  export type dndTypes = {
    droppableId: string
    index: number
  }

  export type dragAndDropArgs = {
    board: BoardTypes.board
    draggableId: string
    destination: dndTypes
    source: dndTypes
  }

  export type saveArgs = {
    value: valueArgs
    type: typeArgs
  }

  export type getBoardById = (boardId?: BoardTypes.board['id']) => BoardTypes.board
  export type getEmptyTask = () => BoardTypes.task
  export type getEmptyList = () => BoardTypes.list
}
