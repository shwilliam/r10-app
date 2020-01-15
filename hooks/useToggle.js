import {useState} from 'react'

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = () => setValue(s => !s)

  return [value, toggleValue]
}

export default useToggle
