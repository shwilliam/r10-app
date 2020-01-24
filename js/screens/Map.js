import React from 'react'
import {Layout, Map} from '../components'

const MapPage = () => (
  <Layout>
    <Map>
      <Map.Marker
        title="R10 Conference"
        description="King Edwards Concert Hall"
      />
    </Map>
  </Layout>
)

export default MapPage
