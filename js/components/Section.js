import React from 'react'
import {View} from 'react-native'
import styles from './Section.styles'

const Section = ({centered = false, children, ...props}) => (
  <View
    style={
      centered
        ? {...styles.section, ...styles.sectionCentered}
        : styles.section
    }
    {...props}
  >
    {children}
  </View>
)

export default Section
