import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: THEME.SPACING.VERTICAL,
  },
  iconContainer: {marginRight: THEME.SPACING.HORIZONTAL / 2},
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
