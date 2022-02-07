import { useState, useEffect } from 'react'

const useOutsideAlerter = (ref: any) => {
  const [outsideClick, setOutsideClick] = useState(false)

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutsideClick(true)
      } else setOutsideClick(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [ref])

  return outsideClick
}

export default useOutsideAlerter
