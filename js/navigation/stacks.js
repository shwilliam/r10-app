import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {Header} from '../components'
import {Schedule, About, Session, Faves, Map} from '../screens'
import Drawer from './Drawer'
import {isAndroid} from '../utils'
import THEME from '../theme'

const navigationOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontSize: THEME.FONT.SIZE.PARAGRAPH,
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
  Session: {
    screen: Session,
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
