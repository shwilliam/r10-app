import React from 'react'
import {View} from 'react-native'
import {Header as ReactHeader} from 'react-navigation-stack'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Header.styles'
import THEME from '../theme'

const Header = props => (
  <View style={styles.container}>
    <LinearGradient
      colors={[THEME.COLOR.RED, THEME.COLOR.PURPLE]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={styles.gradient}
    />
    <ReactHeader {...props} />
  </View>
)

export default Header
