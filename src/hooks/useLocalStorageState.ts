import { useState, useEffect, useRef } from 'react'
import { BoardTypes } from '../types/board-types/index'

export function useLocalStorageState(
  key: string,
  defaultValue: BoardTypes.board,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
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
