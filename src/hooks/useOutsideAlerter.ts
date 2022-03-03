import { useState, useEffect, RefObject } from 'react'

const useOutsideAlerter = (ref: RefObject<HTMLDivElement>) => {
  const [outsideClick, setOutsideClick] = useState(false)

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      ev.stopImmediatePropagation()
      ev.preventDefault()
      setOutsideClick(false)
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        setOutsideClick(true)
      } else {
        setOutsideClick(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return outsideClick
}

export default useOutsideAlerter
