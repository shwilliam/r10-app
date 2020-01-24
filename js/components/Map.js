import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import styles from './Map.styles'

const eventCoords = {
  latitude: 49.24966,
  longitude: -123.11934,
}

const mapOptions = {
  latitudeDelta: 0.025,
  longitudeDelta: 0.05,
}

const Map = ({children, coords = eventCoords}) => (
  <MapView style={styles.map} region={{...mapOptions, ...coords}}>
    {children}
  </MapView>
)

Map.Marker = ({
  image = require('../../assets/images/map_pin.png'),
  title,
  description,
  coordinate = eventCoords,
}) => (
  <Marker
    image={image}
    coordinate={coordinate}
    title={title}
    description={description}
  />
)

export default Map
