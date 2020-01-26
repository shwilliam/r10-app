import React from 'react'
import {Text} from 'react-native'
import styles from './Subtitle.styles'

const Subtitle = ({children, variant = 'primary', ...props}) => (
  <Text
    style={
      variant === 'secondary'
        ? {...styles.subtitle, ...styles.subtitleSecondary}
        : variant === 'tertiary'
        ? {...styles.subtitle, ...styles.subtitleTertiary}
        : styles.subtitle
    }
    {...props}
  >
    {children}
  </Text>
)

export default Subtitle
