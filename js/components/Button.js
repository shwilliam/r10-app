import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import styles from './Button.styles'

const Button = ({onPress, children}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  </View>
)

export default Button
