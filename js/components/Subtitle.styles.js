import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  subtitle: {
    fontSize: THEME.FONT.SIZE.SUBTITLE,
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    color: THEME.FONT.COLOR.SECONDARY,
    paddingVertical: THEME.SPACING.VERTICAL / 4,
  },
  subtitleSecondary: {
    fontSize: THEME.FONT.SIZE.PARAGRAPH,
    color: THEME.FONT.COLOR.ACCENT,
  },
})

export default styles
