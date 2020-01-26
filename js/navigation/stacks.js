import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {Header} from '../components'
import {Schedule, About, Event, Faves, Map} from '../screens'
import Drawer from './Drawer'
import {isAndroid} from '../utils'

const navigationOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  // headerTitleStyle: {fontFamily: 'Montserrat'},
  headerLeft: isAndroid ? <Drawer navigation={navigation} /> : null,
})

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions,
  },
  Event: {
    screen: Event,
    navigationOptions,
  },
})

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions,
  },
})

const FavesStack = createStackNavigator({
  Faves: {
    screen: Faves,
    navigationOptions,
  },
})

const MapStack = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions,
  },
})

export {ScheduleStack, AboutStack, FavesStack, MapStack}
