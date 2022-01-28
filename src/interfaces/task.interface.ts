import * as boardInterfaces from './board.interface'


// export interface tasks {
//   tasks: task[]
// }

export interface task {
  id: string
  title: string
  description?: string
  style?: { background: string; fullCover: boolean }
  members?: boardInterfaces.member[]
  labels?: boardInterfaces.label[]
  startDate?: { timestamp: number }
  dueDate?: { timestamp: number, status: string }
  comments?: boardInterfaces.comment[]
  checklists?: boardInterfaces.checklist[]
}