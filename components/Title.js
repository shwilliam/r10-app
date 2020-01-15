import React from 'react'
import {Text} from 'react-native'
import styles from './Title.styles'

const Title = ({children, ...props}) => (
  <Text style={styles.title} {...props}>
    {children}
  </Text>
)

export default Title
