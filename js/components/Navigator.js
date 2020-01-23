import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Speaker, Schedule, About, Event, Faves, Map} from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'

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
          <Icon name="ios-calendar" color={tintColor} />
        ),
      },
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-map" color={tintColor} />
        ),
      },
    },
    Faves: {
      screen: FavesScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-heart" color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-information-circle" color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Schedule',
  },
)

export default createAppContainer(Navigator)
