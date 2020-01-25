import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  subtitle: {
    fontSize: CONST.FONT.SIZE.SUBTITLE,
    color: CONST.FONT.COLOR.SECONDARY,
    paddingVertical: CONST.SPACING.VERTICAL / 4,
  },
  subtitleSecondary: {
    color: CONST.FONT.COLOR.ACCENT,
  },
})

export default styles
