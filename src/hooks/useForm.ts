import { useEffect, useState } from 'react'

type stateProps = {
  initialState: any
  cb?: any
}
// type stateProps = {
//   initialState: inputProps["value"];
//   cb?: (state: stateProps["initialState"]) => void;
// }

type registerInputType = {
  field: string | number
  type: string
}

interface inputProps {
  name: registerInputType['field']
  id: registerInputType['field']
  type: registerInputType['type']
  value: boolean | string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const useForm = (initialState: any, cb = (value?: any) => {}) => {
  const [fields, setFields] = useState(initialState)

  useEffect(() => {
    cb(fields)
  }, [fields, cb])

  const handleChange: inputProps['onChange'] = event => {
    const value = event.target.type === 'number' ? +event.target.value : event.target.value
    setFields(value)
  }

  const register = ({ field }: registerInputType, type = 'text'): inputProps => {
    return {
      name: field,
      id: field,
      type,
      value: fields,
      onChange: handleChange
    }
  }

  return [fields, handleChange, setFields, register]
}
