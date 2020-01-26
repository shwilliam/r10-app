import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: THEME.SPACING.VERTICAL * 2.5,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: THEME.SPACING.HORIZONTAL * 2,
    paddingVertical: THEME.SPACING.VERTICAL * 1.5,
  },
  text: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontSize: THEME.FONT.SIZE.SUBTITLE,
    color: THEME.FONT.COLOR.INVERTED,
  },
})

export default styles
