import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  modal: {
    zIndex: 999,
    height: '100%',
    paddingVertical: CONST.SPACING.VERTICAL,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
  },
  buttonClose: {
    position: 'absolute',
    top: CONST.SPACING.VERTICAL * 0.5,
    left: CONST.SPACING.HORIZONTAL,
  },
  buttonCloseText: {
    fontFamily: CONST.FONT.FAMILY.LIGHT,
    fontSize: 27.5,
    color: '#fff',
  },
})

export default styles
