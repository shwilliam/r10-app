import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: CONST.SPACING.VERTICAL * 2.5,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: CONST.SPACING.HORIZONTAL * 2,
    paddingVertical: CONST.SPACING.VERTICAL * 1.5,
  },
  text: {
    fontFamily: CONST.FONT.FAMILY.REGULAR,
    fontSize: CONST.FONT.SIZE.SUBTITLE,
    color: CONST.FONT.COLOR.INVERTED,
  },
})

export default styles
