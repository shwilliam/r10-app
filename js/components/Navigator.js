import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Speaker, Schedule, About, Event} from '../pages'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const ScheduleScreen = createStackNavigator({
  Schedule,
  Event,
  Speaker,
})
const AboutScreen = createStackNavigator({About})

const Navigator = createBottomTabNavigator(
  {
    Schedule: ScheduleScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Schedule',
  },
)

export default createAppContainer(Navigator)
