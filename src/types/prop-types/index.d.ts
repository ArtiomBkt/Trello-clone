import { BoardTypes } from '../board-types'
import { DraggableProvided } from 'react-beautiful-dnd'

export declare module PropTypes {
  type StyledProps = {
    btnType?: string
    task?: task
    styling?: task['style']
    size?: string
    content?: string
    title?: string
    isDone?: boolean
    dueStatus?: string
    isDateBadge?: boolean
    isFullCover?: boolean
    isSelectedColor?: boolean
    isListAdd?: boolean
    isEditBoardTitle?: boolean
    isSidenavOpen?: boolean
    modalPos?: modalPos
    isQuickEdit?: boolean
    labelColor?: string
    isLabelExpanded?: boolean
    isDragging?: boolean
    placeholderProps?: PlaceholderProps
  }

  type DndTypes = {
    isDragging?: boolean
    isDraggingOver?: boolean
  }

  type PlaceholderProps = {
    clientY: number
    clientX: number
    clientHeight: number
    clientWidth: number
  }

  interface modalPos {
    top: number
    left: number
  }

  interface ChildrenProp {
    children: React.ReactNode
  }

  type ListPreviewProps = {
    list: BoardTypes.list
    index: number
    placeholderProps?: PlaceholderProps
    onListUpdate: (list: BoardTypes.list) => void
    onLabelsUpdate: (labels: BoardTypes.label[]) => void
    onArchiveItem: (archivedItem: BoardTypes.archivedItem, updatingList: BoardTypes.list) => void
  }

  type ListHeaderProps = {
    list: BoardTypes.list
    dragHandleProps?: DraggableProvided['dragHandleProps']
    onListUpdate: (list: BoardTypes.list) => void
  }

  type TaskPreviewProps = {
    task: task
    index: number
    handleTaskEdit: (task: PropTypes.task) => void
    onLabelsUpdate: (labels: BoardTypes.label[]) => void
    handleTaskArchive: (ev: React.MouseEvent, task: PropTypes.task) => void
  }

  type BoardNavCmp = {
    board: BoardTypes.board
    onBoardUpdate: (board: BoardTypes.board) => void
    onSidenavOpen: () => void
    onUserToggleStar: (ev: React.MouseEvent) => void
  }

  type MemberListProps = {
    members?: BoardTypes.member[]
    member?: BoardTypes.member
  }

  interface ContainersProps {
    board?: board
    list?: list
    task?: task
    labels?: label[]
  }

  type board = BoardTypes.board
  type list = BoardTypes.list
  type task = BoardTypes.task
  type label = BoardTypes.label

  type LabelsPreviewProps = {
    labels: label[]
    isQuickEditOpen?: boolean
  }

  type TaskComposerProps = {
    handleComposerToggle: () => void
    handleTaskAdd: (taskTitle: task['title']) => void
  }

  type ListComposerProps = {
    onAddList: (listTitle: list['title']) => void
  }

  type ComposerProps = {
    handleInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
    handleListSubmit: (ev: React.MouseEvent | React.KeyboardEvent) => void
    handleDiscardList: () => void
    isListAdd: boolean
    listTitle: string
  }

  type QuickEditorProps = {
    children?: React.ReactNode
    modalPos?: modalPos
    task: PropTypes.task
    handleBadgeModalToggle?: (ev: React.MouseEvent) => void
    handleTaskLabelChange: (ev: React.MouseEvent, label: PropTypes.label) => void
    handleTaskMemberToggle: (ev: React.MouseEvent, member: BoardTypes.member) => void
    handleTaskStyleChange: (newStyle: task['style']) => void
    handleTaskArchive?: (ev: React.MouseEvent, task: PropTypes.task) => void
    onChangeSubmit?: (ev: React.MouseEvent) => void
    onClose?: (ev?: React.MouseEvent) => void
    onLabelsUpdate?: (labels: PropTypes.label[], ev?: React.MouseEvent) => void
  }

  type BadgesModalProps = {
    title: string
    children?: React.ReactNode
    modalPos?: modalPos
    modalWrapperRef?: React.RefObject<HTMLDivElement>
    onClose: (ev: React.MouseEvent) => void
  }

  type LabelProps = {
    label?: PropTypes.label
    task: PropTypes.task
    handleTaskLabelChange: (ev: React.MouseEvent, label: PropTypes.label) => void
    onLabelsUpdate?: (labels: PropTypes.label[], ev?: React.MouseEvent) => void
    handleLabelChange?: (label: PropTypes.label) => void
  }

  type DateProps = {
    task: PropTypes.task
  }

  type MemberProps = {
    task: PropTypes.task
    members?: MemberListProps['members']
    handleTaskMemberToggle?: (ev: React.MouseEvent, memberId: BoardTypes.member) => void
  }

  type TaskColorProps = {
    task: PropTypes.task
    handleTaskStyleChange: (newStyle: task['style']) => void
  }

  type HeaderModalProps = {
    onClose: (ev?: React.MouseEvent) => void
    children: React.ReactNode
    title: string
    modalPos: modalPos
  }

  type LinkProps = {
    children: React.ReactNode
    type: string
    isInModal?: boolean
    handleMenuToggle?: (ev: React.MouseEvent) => void
  }

  type NavLinksProps = {
    windowWidth: number
    isMenuOpen: boolean
    modalPos: modalPos
    handleMenuToggle: (ev?: React.MouseEvent) => void
  }

  interface TaskCmps {
    task: PropTypes.task
    taskRef?: React.RefObject<HTMLDivElement>
    isQuickEditOpen?: boolean
    taskTitle?: string
    handleTaskTitleChange?: (ev: React.ChangeEvent<HTMLTextAreaElement> | React.KeyboardEvent) => void
    handleTaskDueToggle?: (ev: React.MouseEvent) => void
  }

  interface LabelsInterface {
    [key: string]: { static: string; hover: string }
  }

  interface TaskColorsInterface extends LabelsInterface {}

  type SidenavProps = {
    board: PropTypes.board
    isSidenavOpen: boolean
    onSidenavClose: () => void
    onUnarchiveItem: (archivedItem: BoardTypes.archivedItem) => void
    onArchiveItemRemove: (archivedItem: BoardTypes.archivedItem) => void
  }

  type SidebarMenusProps = {
    children?: React.ReactNode
    board: PropTypes.board
    onUnarchiveItem?: (archivedItem: BoardTypes.archivedItem) => void
    onArchiveItemRemove?: (archivedItem: BoardTypes.archivedItem) => void
  }

  type LabelsContext = {
    isLabelsExpanded: boolean
    setIsLabelsExpanded: (isExpanded: boolean) => void
  }
}
