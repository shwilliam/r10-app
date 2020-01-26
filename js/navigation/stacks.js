import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {Header} from '../components'
import {Schedule, About, Event, Faves, Map} from '../screens'
import Drawer from './Drawer'
import {isAndroid} from '../utils'
import CONST from '../constants'

const navigationOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: CONST.FONT.FAMILY.REGULAR,
    fontSize: CONST.FONT.SIZE.PARAGRAPH,
  },
  headerLeft: isAndroid ? (
    <Drawer navigation={navigation} />
  ) : (
    undefined
  ),
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
