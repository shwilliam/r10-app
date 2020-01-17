import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Speaker, Schedule, About, Event} from './index'

const Navigator = createStackNavigator(
  {
    Schedule,
    About,
    Speaker,
    Event,
  },
  {
    initialRouteName: 'Schedule',
  },
)

export default createAppContainer(Navigator)
