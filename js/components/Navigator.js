import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Schedule, About, Event, Faves, Map} from '../screens'
import {Header, Icon} from '../components'

const navigationOptions = {
  headerBackTitleVisible: false,
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
}

const ScheduleScreen = createStackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions,
  },
  Event: {
    screen: Event,
    navigationOptions,
  },
})
const AboutScreen = createStackNavigator({
  About: {
    screen: About,
    navigationOptions,
  },
})
const FavesScreen = createStackNavigator({
  Faves: {
    screen: Faves,
    navigationOptions,
  },
})
const MapScreen = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions,
  },
})

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
