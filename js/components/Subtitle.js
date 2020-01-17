import React from 'react'
import {Text} from 'react-native'
import styles from './Subtitle.styles'

const Subtitle = ({children, ...props}) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
)

export default Subtitle
