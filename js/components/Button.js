import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Button.styles'
import THEME from '../theme'

const Button = ({onPress, children}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[THEME.COLOR.PURPLE, THEME.COLOR.BLUE]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.button}
      >
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
)

export default Button
