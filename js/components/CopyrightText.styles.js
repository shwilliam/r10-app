import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: THEME.SPACING.VERTICAL / 2,
    paddingBottom: THEME.SPACING.VERTICAL,
    borderTopWidth: 2,
    borderColor: THEME.COLOR.LIGHT_GREY,
  },
})

export default styles
