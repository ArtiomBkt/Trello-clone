import { BoardTypes } from 'types/board-types'

export declare module UserTypes {
  interface User extends BoardTypes.member {
    password: string
  }

  interface LoginCriteria {
    username: User['username']
    password: User['password']
  }

  type HidePasswordField<T> = {
    [Property in keyof T as Exclude<Property, 'password'>]: T[Property]
  }

  interface LoggedUser extends HidePasswordField<LoginCriteria> {
    id: User['id']
  }

  interface LoggedUserContext {
    loggedUserId?: User['id']
    setLoggedUser?: (userId: User['id'] | any) => void
  }
}
