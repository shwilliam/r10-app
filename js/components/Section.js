import React from 'react'
import {View} from 'react-native'
import styles from './Section.styles'

const Section = ({centered = false, children}) => (
  <View
    style={
      centered
        ? {...styles.section, ...styles.sectionCentered}
        : styles.section
    }
  >
    {children}
  </View>
)

export default Section
