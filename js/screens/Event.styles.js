import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: CONST.SPACING.VERTICAL,
  },
  sessionTime: {
    fontFamily: CONST.FONT.FAMILY.REGULAR,
    fontSize: CONST.FONT.SIZE.SUBTITLE,
    color: CONST.FONT.COLOR.RED,
    marginVertical: CONST.SPACING.VERTICAL / 2,
  },
  sessionSpeakerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: CONST.SPACING.VERTICAL,
    paddingBottom: CONST.SPACING.VERTICAL * 2.25,
    borderBottomWidth: 2,
    borderColor: CONST.COLOR.LIGHT_GREY,
  },
  sessionSpeakerCardTitle: {
    fontFamily: CONST.FONT.FAMILY.REGULAR,
    fontSize: CONST.FONT.SIZE.PARAGRAPH,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
  },
})

export default styles
