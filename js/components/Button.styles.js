import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: CONST.SPACING.VERTICAL,
  },
  button: {
    borderRadius: 25,
    backgroundColor: CONST.COLOR.PURPLE,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
    paddingVertical: CONST.SPACING.VERTICAL / 2,
  },
  text: {
    color: CONST.FONT.COLOR.INVERTED,
  },
})

export default styles
