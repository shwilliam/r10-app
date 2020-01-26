import {StyleSheet, Dimensions} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: THEME.SPACING.VERTICAL * 2,
  },
  headerTitle: {
    fontSize: THEME.FONT.SIZE.PARAGRAPH,
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    color: THEME.FONT.COLOR.INVERTED,
    paddingTop: THEME.SPACING.VERTICAL / 2,
  },
  container: {
    backgroundColor: '#000',
    paddingVertical: THEME.SPACING.VERTICAL,
    paddingHorizontal: THEME.SPACING.HORIZONTAL,
    height: Dimensions.get('window').height,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: THEME.SPACING.VERTICAL,
    paddingVertical: THEME.SPACING.VERTICAL,
    paddingHorizontal: THEME.SPACING.HORIZONTAL / 2,
  },
})

export default styles
