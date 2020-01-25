import {StyleSheet, Dimensions} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: CONST.SPACING.VERTICAL * 2,
  },
  container: {
    paddingVertical: CONST.SPACING.VERTICAL,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
    backgroundColor: '#000',
    height: Dimensions.get('window').height,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: CONST.SPACING.VERTICAL,
    paddingVertical: CONST.SPACING.VERTICAL,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
  },
})

export default styles
