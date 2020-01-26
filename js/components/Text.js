import React from 'react'
import {Text as ReactText} from 'react-native'
import styles from './Text.styles'

const Text = ({children, ...props}) => (
  <ReactText style={styles.text} {...props}>
    {children}
  </ReactText>
)

export default Text
