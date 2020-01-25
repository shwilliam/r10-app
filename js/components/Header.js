import React from 'react'
import {Header as ReactHeader} from 'react-navigation-stack'
import {View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CONST from '../constants'
import styles from './Header.styles'

const Header = props => (
  <View style={styles.container}>
    <LinearGradient
      colors={[CONST.COLOR.RED, CONST.COLOR.PURPLE]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={styles.gradient}
    />
    <ReactHeader {...props} />
  </View>
)

export default Header
