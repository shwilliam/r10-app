import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './Icon.styles'
import {isAndroid} from '../utils'

// TODO: DRY up icons (eg. handling md/ios prefix)
Icon.Favorite = ({color = '#c04534', filled}) => (
  <Icon
    name={
      isAndroid
        ? filled
          ? 'md-heart'
          : 'md-heart-empty'
        : filled
        ? 'ios-heart'
        : 'ios-heart-empty'
    }
    color={color}
    style={styles.icon}
  />
)

Icon.Schedule = ({color}) => (
  <Icon
    name={isAndroid ? 'md-calendar' : 'ios-calendar'}
    color={color}
    style={styles.icon}
  />
)

Icon.Map = ({color}) => (
  <Icon
    name={isAndroid ? 'md-map' : 'ios-map'}
    color={color}
    style={styles.icon}
  />
)

Icon.About = ({color}) => (
  <Icon
    name={
      isAndroid ? 'md-information-circle' : 'ios-information-circle'
    }
    color={color}
    style={styles.icon}
  />
)

Icon.Menu = ({color}) => (
  <Icon
    name={isAndroid ? 'md-menu' : 'ios-menu'}
    color={color}
    style={styles.icon}
  />
)

export default Icon
