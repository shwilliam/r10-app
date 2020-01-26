import React from 'react'
import {Image as ReactImage} from 'react-native'
import styles from './Image.styles'

const Image = ({src, size = 'm', ...props}) => (
  <ReactImage
    source={{uri: src}}
    style={
      size === 's'
        ? {...styles.circularImage, ...styles.smallImage}
        : styles.circularImage
    }
    {...props}
  />
)

export default Image
