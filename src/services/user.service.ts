import { BoardTypes } from 'types/board-types'
import { UserTypes } from 'types/user-types'

const KEY = 'loggedUser'

const getUserById = (userId: UserTypes.User['id'] | undefined): BoardTypes.member | undefined => {
  if (!userId) {
    return
  }

  const user = users.find(u => u.id === userId)
  if (!user) {
    throw new Error('User not found')
  }
  return user
}

const handleLogin = <T extends UserTypes.LoginCriteria['username' | 'password']>(username: T, enteredPassword: T): UserTypes.LoggedUser => {
  const user = getUserByUsername(username)
  if (!user || enteredPassword.normalize() !== user.password.normalize()) {
    throw new Error(`Username or password are incorrect`)
  }
  const loggedUser = {
    id: user.id,
    username: user.username
  }
  sessionStorage.setItem(KEY, JSON.stringify(loggedUser))
  return loggedUser
}

function getUserByUsername(username: string): UserTypes.User | undefined {
  const foundUser = users.find(u => u.username === username)
  return foundUser
}

const toBase64 = async (imgUrl: string) => {
  const res = await fetch(imgUrl, { mode: 'no-cors' })
  const blob = await res.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        resolve(reader.result)
      },
      false
    )
    reader.onerror = () => {
      return reject(this)
    }
    reader.readAsDataURL(blob)
  })
}

// TODO: Finish setting up along with cloudinary when starting up the backend
const getUserImg = () => {
  const base64Img = toBase64('https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg').then(url => console.log(url))
  console.log(base64Img)
}

export const userService = {
  getUserImg,
  handleLogin,
  getUserById
}

const users: UserTypes.User[] = [
  {
    id: 'user1',
    username: 'TestUser',
    fullname: 'User for testing',
    password: 'aaa12123',
    image: undefined,
    starredBoardsIds: [],
    watchList: []
  },
  {
    id: 'user2',
    username: 'TestUser2',
    fullname: 'User 2 for testing',
    password: 'bbb12123',
    image: 'https://i.pinimg.com/564x/b3/47/03/b347030375301a57c94dedc50b666a51.jpg',
    starredBoardsIds: ['b100'],
    watchList: ['t100', 't101', 'b100', 'g102']
  },
  {
    id: 'u100',
    username: 'ArtiomB',
    fullname: 'Artiom bkt',
    password: 'art12123',
    image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
    starredBoardsIds: ['b100'],
    watchList: []
  }
]
