import { BoardTypes } from '../board-types'
import { DraggableProvided } from 'react-beautiful-dnd'

export declare module PropTypes {
  export type StyledProps = {
    task?: task
    style?: task['style']
    size?: string
    content?: string
    isDone?: boolean
    isDateBadge?: boolean
    isFullCover?: boolean
    isListAdd?: boolean
  }

  export type DndTypes = {
    isDragging: boolean
    isDraggingOver: boolean
  }

  export type ListPreviewProps = {
    list: BoardTypes.list
    idx: number
    isDraggingOver: boolean
    onListUpdate: (list: BoardTypes.list) => void
  }

  export type ListHeaderProps = {
    list: BoardTypes.list
    dragHandleProps?: DraggableProvided['dragHandleProps']
    onListUpdate: (list: BoardTypes.list) => void
  }

  export type TaskPreviewProps = {
    task: task
    idx: number
  }

  export type task = BoardTypes.task
  export type list = BoardTypes.list

  export type TaskComposerProps = {
    handleComposerToggle: () => void
    handleTaskAdd: (taskTitle: task['title']) => void
  }

  export type ListComposerProps = {
    onAddList: (listTitle: list['title']) => void
  }
}
