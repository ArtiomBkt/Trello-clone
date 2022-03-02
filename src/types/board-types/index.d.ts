export declare module BoardTypes {
  type label = {
    id: string
    title?: string
    color: string
  }

  type todo = {
    id: string
    title: string
    isDone: boolean
  }

  type checklist = {
    id: string
    title: string
    todos?: todo[]
  }

  type comment = {
    id: string
    byMember: member
    content: any
    createdAt: number
  }

  interface member {
    id: string
    username: string
    fullname: string
    image?: string
    starredBoardsIds: board['id'][]
    watchList: board['id'][] | task['id'][] | list['id'][]
  }

  type list = {
    id: string
    title: string
    tasks: task[]
  }

  type task = {
    id: string
    title: string
    style: { background: string; fullCover: boolean }
    labels?: label[]
    members?: member[]
    description?: string
    startDate?: { timestamp?: number; isDone?: boolean }
    dueDate?: { timestamp?: number; isDone?: boolean }
    comments?: comment[]
    checklists?: checklist[]
    isArchived?: boolean
  }

  type archivedItem = {
    fromList?: BoardTypes.list['id']
    item: BoardTypes.task
    index: number
  }

  type board = {
    id: string
    title: string
    createdBy: member
    style: { background: string }
    members: member[]
    labels: label[]
    description?: string
    archive: archivedItem[]
    lists: list[]
  }
}
