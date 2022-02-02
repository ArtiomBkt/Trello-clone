import * as boardInterfaces from './board.interface'


export interface task {
  id: string
  title: string
  style?: { background: string; fullCover: boolean }
  labels?: boardInterfaces.label[]
  members?: boardInterfaces.member[]
  description?: string
  startDate?: { timestamp?: number, isDone?: boolean }
  dueDate?: { timestamp?: number, isDone?: boolean }
  comments?: boardInterfaces.comment[]
  checklists?: boardInterfaces.checklist[]
  isArchived?: boolean
}