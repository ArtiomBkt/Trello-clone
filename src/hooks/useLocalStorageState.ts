import { useState, useEffect, useRef } from 'react'
import { BoardTypes } from '../types/board-types/index'

const useLocalStorageState = (
  key: string,
  defaultValue: BoardTypes.board,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [state: BoardTypes.board, setState: React.Dispatch<any>] => {
  
  const [state, setState] = useState(() => {
    const valInStorage = window.localStorage.getItem(key)
    if (valInStorage) {
      return deserialize(valInStorage)
    }
    return defaultValue
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

export default useLocalStorageState
