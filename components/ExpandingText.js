import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const ExpandingText = ({label, children, ...props}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View {...props}>
      <TouchableOpacity onPress={() => setIsOpen(s => !s)}>
        <Text>{isOpen ? '-' : '+'}</Text>
        <Text>{label}</Text>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  )
}

export default ExpandingText
