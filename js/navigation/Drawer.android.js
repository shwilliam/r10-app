import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Icon} from '../components'

const Drawer = ({navigation}) => (
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      <Icon.Menu />
    </TouchableOpacity>
  </View>
)

export default Drawer
