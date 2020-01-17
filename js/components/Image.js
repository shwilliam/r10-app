import React from 'react'
import {Image as ReactImage} from 'react-native'
import styles from './Image.styles'

const Image = ({src, ...props}) => (
  <ReactImage
    source={{uri: src}}
    style={styles.circularImage}
    {...props}
  />
)

export default Image
