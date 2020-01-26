import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  modal: {
    zIndex: 999,
    height: '100%',
    paddingVertical: THEME.SPACING.VERTICAL,
    paddingHorizontal: THEME.SPACING.HORIZONTAL,
  },
  buttonClose: {
    position: 'absolute',
    top: THEME.SPACING.VERTICAL * 0.5,
    left: THEME.SPACING.HORIZONTAL,
  },
  buttonCloseText: {
    fontFamily: THEME.FONT.FAMILY.LIGHT,
    fontSize: 27.5,
    color: '#fff',
  },
})

export default styles
