export declare module BoardTypes {
  export type label = {
    id: string
    title?: string
    color: string
  }

  export type todo = {
    id: string
    title: string
    isDone: boolean
  }

  export type checklist = {
    id: string
    title: string
    todos?: todo[]
  }

  export type comment = {
    id: string
    byMember: member
    content: any
    createdAt: number
  }

  export type member = {
    id: string
    username: string
    fullname: string
    image?: string
    starredBoards?: board[]
    watchList?: board[] | task[]
  }

  export type list = {
    id: string
    title: string
    tasks: task[]
  }

  export type task = {
    id: string
    title: string
    style?: { background: string; fullCover: boolean }
    labels?: label[]
    members?: member[]
    description?: string
    startDate?: { timestamp?: number; isDone?: boolean }
    dueDate?: { timestamp?: number; isDone?: boolean }
    comments?: comment[]
    checklists?: checklist[]
    isArchived?: boolean
  }

  export type board = {
    id: string
    title: string
    createdBy: member
    style: { background: string }
    members?: member[]
    labels: label[]
    description?: string
    archive?: task[]
    lists?: list[]
  }
}
