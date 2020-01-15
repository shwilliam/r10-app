import React from 'react'
import {View} from 'react-native'
import styles from './Section.styles'

const Section = ({children, ...props}) => (
  <View style={styles.section} {...props}>
    {children}
  </View>
)

export default Section
