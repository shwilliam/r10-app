import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Speaker, Schedule, About, Event, Faves, Map} from '../screens'
import {Icon} from '../components'

const ScheduleScreen = createStackNavigator({
  Schedule,
  Event: {
    screen: Event,
    navigationOptions: {headerBackTitleVisible: false},
  },
  Speaker,
})
const AboutScreen = createStackNavigator({About})
const FavesScreen = createStackNavigator({Faves})
const MapScreen = createStackNavigator({Map})

const Navigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon.Schedule color={tintColor} />
        ),
      },
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon.Map color={tintColor} />,
      },
    },
    Faves: {
      screen: FavesScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon.Favorite filled={true} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon.About color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Schedule',
  },
)

export default createAppContainer(Navigator)
