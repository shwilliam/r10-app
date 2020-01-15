import {StyleSheet} from 'react-native'
import CONSTS from './constants'

const styles = StyleSheet.create({
  eventHeader: {
    fontWeight: 'bold',
    paddingVertical: CONSTS.SPACING.VERTICAL / 2,
    paddingHorizontal: 5,
    backgroundColor: CONSTS.COLOR.LIGHT_GREY,
  },
  eventContainer: {
    paddingVertical: CONSTS.SPACING.VERTICAL,
    paddingHorizontal: 5,
    borderTopWidth: 2,
    borderColor: CONSTS.COLOR.LIGHT_GREY,
  },
  eventContainerFirst: {
    borderTopWidth: 0,
  },
  eventTitle: {
    fontWeight: 'bold',
    paddingVertical: CONSTS.SPACING.VERTICAL / 4,
  },
  eventSubtitle: {
    color: CONSTS.FONT.COLOR.SECONDARY,
    paddingVertical: CONSTS.SPACING.VERTICAL / 4,
  },
})

export default styles
