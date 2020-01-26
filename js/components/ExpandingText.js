import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {useToggle} from '../hooks'
import {Subtitle} from './index'
import styles from './ExpandingText.styles'

const ExpandingText = ({label, children, ...props}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <View {...props}>
      <TouchableOpacity
        style={styles.container}
        onPress={toggleIsOpen}
      >
        <View style={styles.iconContainer}>
          <Subtitle variant="tertiary">{isOpen ? '-' : '+'}</Subtitle>
        </View>
        <Subtitle variant="tertiary">{label}</Subtitle>
      </TouchableOpacity>
      {isOpen ? children : null}
    </View>
  )
}

export default ExpandingText
