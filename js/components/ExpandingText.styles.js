import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: CONST.SPACING.VERTICAL,
  },
  iconContainer: {marginRight: CONST.SPACING.HORIZONTAL / 2},
  contentContainer: {
    overflow: 'hidden',
  },
  contentContainerGhost: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
  },
})

export default styles
