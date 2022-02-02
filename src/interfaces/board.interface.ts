import * as taskInterfaces from './task.interface'


export interface label {
  id: string
  title?: string
  color: string
}

export interface todo {
  id: string
  title: string
  isDone: boolean
}

export interface checklist {
  id: string
  title: string
  todos?: todo[]
}

export interface comment {
  id: string
  byMember: member
  content: any
  createdAt: number
}


export interface member {
  id: string
  username: string
  fullname: string
  image?: string
  starredBoards?: board[]
  watchList?: board[] | taskInterfaces.task[]
}

export interface list {
  id: string
  title: string
  tasks: taskInterfaces.task[]
}

export interface board {
  id: string
  title: string
  createdBy: member
  style: { background: string }
  members?: member[]
  labels: label[]
  description?: string
  archive?: taskInterfaces.task[]
  lists?: list[]
}