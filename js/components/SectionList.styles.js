import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: 'bold',
    paddingVertical: CONST.SPACING.VERTICAL / 2,
    paddingHorizontal: 5,
    backgroundColor: CONST.COLOR.LIGHT_GREY,
  },
  itemContainer: {
    paddingVertical: CONST.SPACING.VERTICAL,
    paddingHorizontal: 5,
    borderTopWidth: 2,
    borderColor: CONST.COLOR.LIGHT_GREY,
  },
  itemContainerFirst: {
    borderTopWidth: 0,
  },
  itemTitle: {
    fontWeight: 'bold',
    paddingVertical: CONST.SPACING.VERTICAL / 4,
  },
})

export default styles
