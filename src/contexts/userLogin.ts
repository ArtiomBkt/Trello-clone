import { createContext } from 'react'
import { UserTypes } from '../types/user-types'

const LoggedUserContext = createContext<UserTypes.LoggedUserContext>({
  loggedUserId: undefined,
  setLoggedUser: () => {}
})

export default LoggedUserContext
