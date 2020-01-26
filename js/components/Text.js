import React from 'react'
import {Text as ReactText} from 'react-native'
import styles from './Text.styles'

const Text = ({children}) => (
  <ReactText style={styles.text}>{children}</ReactText>
)

export default Text
