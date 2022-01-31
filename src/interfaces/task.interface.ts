import * as boardInterfaces from './board.interface'


// export interface tasks {
//   tasks: task[]
// }

// interface taskBadges {
  
// }

export interface task {
  id: string
  title: string
  style?: { background: string; fullCover: boolean }
  labels?: boardInterfaces.label[]
  members?: boardInterfaces.member[]
  description?: string
  startDate?: { timestamp: number }
  dueDate?: { timestamp: number, status: string }
  comments?: boardInterfaces.comment[]
  checklists?: boardInterfaces.checklist[]
}