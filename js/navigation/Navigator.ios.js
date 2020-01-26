import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Icon} from '../components'
import {
  ScheduleStack,
  AboutStack,
  FavesStack,
  MapStack,
} from './stacks'
import CONST from '../constants'

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
      style: {
        height: 60,
        backgroundColor: '#000',
        paddingTop: CONST.SPACING.HORIZONTAL / 2,
      },
      labelStyle: {
        fontSize: 15,
        paddingTop: CONST.SPACING.HORIZONTAL / 4,
      },
    },
  },
)

export default Navigator
