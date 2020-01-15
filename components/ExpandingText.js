import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useToggle} from '../hooks'

const ExpandingText = ({label, children, ...props}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <View {...props}>
      <TouchableOpacity onPress={toggleIsOpen}>
        <Text>{isOpen ? '-' : '+'}</Text>
        <Text>{label}</Text>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  )
}

export default ExpandingText
