import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
  iconHPadded: {
    paddingHorizontal: THEME.SPACING.HORIZONTAL * 1.5,
  },
  iconWhite: {
    color: '#fff',
  },
})

export default styles
