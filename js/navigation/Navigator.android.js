import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Icon} from '../components'
import {
  ScheduleStack,
  AboutStack,
  FavesStack,
  MapStack,
} from './stacks'

ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => <Icon.Schedule color={tintColor} />,
}

MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => <Icon.Map color={tintColor} />,
}

FavesStack.navigationOptions = {
  drawerIcon: ({tintColor}) => <Icon.Favorite color={tintColor} />,
}

AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => <Icon.About color={tintColor} />,
}

const Navigator = createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
    initialRouteName: 'Schedule',
  },
)

export default Navigator
