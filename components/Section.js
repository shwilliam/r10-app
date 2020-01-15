import React from 'react'
import {View, StyleSheet} from 'react-native'

const Section = ({children, ...props}) => (
  <View style={styles.section} {...props}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
  },
})

export default Section
