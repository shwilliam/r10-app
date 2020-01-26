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
    paddingVertical: CONST.SPACING.VERTICAL,
    borderBottomWidth: 2,
    borderColor: CONST.COLOR.LIGHT_GREY,
  },
})

export default styles
