import React from 'react'
import {Image, View} from 'react-native'
import styles from './HeroLogo.styles'

const HeroLogo = props => (
  <View style={styles.logoContainer}>
    <Image
      source={require('../../assets/images/r10_logo.png')}
      {...props}
    />
  </View>
)

export default HeroLogo
