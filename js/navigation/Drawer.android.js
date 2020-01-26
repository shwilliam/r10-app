import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Icon} from '../components'

const Drawer = ({navigation}) => (
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity
      onPress={
        navigation.isFirstRouteInParent()
          ? navigation.toggleDrawer
          : () => navigation.goBack() // HACK: pass as new fn to trigger
      }
    >
      {navigation.isFirstRouteInParent() ? (
        <Icon.Menu />
      ) : (
        <Icon.Back />
      )}
    </TouchableOpacity>
  </View>
)

export default Drawer
