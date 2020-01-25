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
    color: CONST.FONT.COLOR.RED,
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
