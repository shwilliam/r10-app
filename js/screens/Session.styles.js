import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: THEME.SPACING.VERTICAL,
  },
  sessionTime: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontSize: THEME.FONT.SIZE.SUBTITLE,
    color: THEME.FONT.COLOR.RED,
    marginVertical: THEME.SPACING.VERTICAL / 2,
  },
  sessionSpeakerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: THEME.SPACING.VERTICAL,
    paddingBottom: THEME.SPACING.VERTICAL * 2.25,
    borderBottomWidth: 2,
    borderColor: THEME.COLOR.LIGHT_GREY,
  },
  sessionSpeakerCardTitle: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontSize: THEME.FONT.SIZE.PARAGRAPH,
    paddingHorizontal: THEME.SPACING.HORIZONTAL,
  },
})

export default styles
