import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import styles from './Spinner.styles'

const Spinner = ({size = 'large', color = 'grey'}) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
)

export default Spinner
