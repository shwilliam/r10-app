import {StyleSheet} from 'react-native'
import CONST from './constants'

const styles = StyleSheet.create({
  modal: {
    zIndex: 999,
    height: '100%',
    paddingVertical: CONST.SPACING.VERTICAL,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
    backgroundColor: '#fff',
  },
})

export default styles
