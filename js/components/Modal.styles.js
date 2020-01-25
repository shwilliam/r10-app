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
    color: '#fff',
  },
})

export default styles
