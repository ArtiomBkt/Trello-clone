import { useState, useCallback } from 'react'

type modalPos = {
  elemPosX: number
  elemPosY: number
}

type useModalPosProps = {
  target: EventTarget
}

const useModalPos = ({ target }: useModalPosProps) => {
  const [modalPos, setModalPos] = useState<modalPos>({ elemPosX: 0, elemPosY: 0 })
}

export default useModalPos
