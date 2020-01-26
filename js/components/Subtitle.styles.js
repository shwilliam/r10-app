import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  subtitle: {
    fontSize: CONST.FONT.SIZE.SUBTITLE,
    fontFamily: CONST.FONT.FAMILY.REGULAR,
    color: CONST.FONT.COLOR.SECONDARY,
    paddingVertical: CONST.SPACING.VERTICAL / 4,
  },
  subtitleSecondary: {
    color: CONST.FONT.COLOR.PRIMARY,
  },
  subtitleTertiary: {
    color: CONST.FONT.COLOR.ACCENT,
    fontSize: CONST.FONT.SIZE.PARAGRAPH,
  },
})

export default styles
