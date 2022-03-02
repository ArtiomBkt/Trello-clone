import React from 'react'
import LoggedUserContext from './contexts/userLogin'
import Board from './containers/board/Board'
import AppHeader from './components/app-header/AppHeader'
import AppWrapper from './styled/App-wrapper.styled'
import { UserTypes } from './types/user-types'

const App = () => {
  // const [loggedUserId, setLoggedUser] = React.useState(() => {
  //   const user: UserTypes.User['id'] = JSON.parse(sessionStorage.getItem('loggedUser') || '').id
  //   return user
  // })

  return (
    <AppWrapper>
      {/* <LoggedUserContext.Provider value={{ loggedUserId, setLoggedUser }}> */}
      <AppHeader />
      <Board />
      {/* </LoggedUserContext.Provider> */}
    </AppWrapper>
  )
}

export default App
