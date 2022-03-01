import React, { useContext } from 'react'
import LoggedUserContext from '../../../contexts/userLogin'
import Container from '../../../styled/Container.styled'
import { userService } from '../../../services/user.service'
import MemberProfile from '../../member/MemberProfile'

const RightChunk = () => {
  const [loginInputs, setLoginInputs] = React.useState({
    username: '',
    password: ''
  })
  const { loggedUserId, setLoggedUser } = useContext(LoggedUserContext)

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent): void => {
    if ((ev as React.KeyboardEvent).key !== 'Enter') {
      const { target } = ev as React.ChangeEvent<HTMLInputElement>
      ev.currentTarget.getAttribute('type') === 'text' ? setLoginInputs(p => ({ ...p, username: target.value })) : setLoginInputs(p => ({ ...p, password: target.value }))
    } else {
      handleLoginSubmit()
    }
  }

  const handleLoginSubmit = (ev?: React.MouseEvent) => {
    if (ev) {
      ev.preventDefault()
    }
    const { username, password } = loginInputs
    const loggedUser = userService.handleLogin(username, password)
    if (loggedUser) {
      setLoggedUser!(loggedUser.id)
    }
    // TODO: After submit, cleanup fields.
    // TODO: If login failed, mark the inputs with red borders.
  }

  const getUser = () => {
    const loggedUser = userService.getUserById(loggedUserId)
    if (!loggedUser) {
      return undefined
    }
    return loggedUser
  }

  return (
    <>
      <Container style={{ display: 'flex' }}>
        {!loggedUserId ? (
          <>
            <input type="text" value={loginInputs.username} onChange={handleOnChange} />
            <input type="password" value={loginInputs.password} onChange={handleOnChange} onKeyUp={handleOnChange} />
            <button onClick={handleLoginSubmit} style={{ color: 'white', cursor: 'pointer' }}>
              login
            </button>
          </>
        ) : (
          <MemberProfile member={getUser()} />
        )}
      </Container>
    </>
  )
}

export default RightChunk
