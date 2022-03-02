import React from 'react'
import LoggedUserContext from './contexts/userLogin'
import Board from './containers/board/Board'
import AppHeader from './components/app-header/AppHeader'
import AppWrapper from './styled/App-wrapper.styled'
import { UserTypes } from './types/user-types'

const App = () => {
  const [loggedUserId, setLoggedUser] = React.useState<UserTypes.User['id'] | undefined>(() => {
    const user = sessionStorage.getItem('loggedUser')
    return user ? JSON.parse(user).id : undefined
  })

  return (
    <AppWrapper>
      <LoggedUserContext.Provider value={{ loggedUserId, setLoggedUser }}>
        <AppHeader />
        <Board />
      </LoggedUserContext.Provider>
    </AppWrapper>
  )
}

export default App
