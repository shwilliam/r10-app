import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Icon} from '../components'
import {
  ScheduleStack,
  AboutStack,
  FavesStack,
  MapStack,
} from './stacks'

const Navigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon.Schedule color={tintColor} />
        ),
      },
    },
    Map: {
      screen: MapStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon.Map color={tintColor} />,
      },
    },
    Faves: {
      screen: FavesStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon.Favorite filled={true} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon.About color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Schedule',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999999',
      style: {height: 64, backgroundColor: '#000'},
      labelStyle: {fontSize: 12},
    },
  },
)

export default Navigator
