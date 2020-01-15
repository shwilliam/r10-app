import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Title = ({children, ...props}) => (
  <Text style={styles.title} {...props}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
})

export default Title
