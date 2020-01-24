import React from 'react'
import {Layout} from '../components'
import MapView from 'react-native-maps'
import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

const mapOptions = {
  latitude: 49.24966,
  longitude: -123.11934,
  latitudeDelta: 0.025,
  longitudeDelta: 0.05,
}

const Map = () => (
  <Layout>
    <MapView style={styles.map} region={mapOptions} />
  </Layout>
)

export default Map
