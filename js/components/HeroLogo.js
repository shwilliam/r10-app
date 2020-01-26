import React from 'react'
import {Image, View} from 'react-native'
import styles from './HeroLogo.styles'

const HeroLogo = () => (
  <View style={styles.logoContainer}>
    <Image source={require('../../assets/images/r10_logo.png')} />
  </View>
)

export default HeroLogo
