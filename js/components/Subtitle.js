import React from 'react'
import {Text} from 'react-native'
import styles from './Subtitle.styles'

const Subtitle = ({children, variant = 'primary'}) => (
  <Text
    style={
      variant === 'secondary'
        ? {...styles.subtitle, ...styles.subtitleSecondary}
        : styles.subtitle
    }
  >
    {children}
  </Text>
)

export default Subtitle
