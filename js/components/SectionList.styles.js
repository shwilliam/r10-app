import {StyleSheet} from 'react-native'
import CONST from '../constants'

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: 'bold',
    paddingVertical: CONST.SPACING.VERTICAL / 2,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
    backgroundColor: CONST.COLOR.LIGHT_GREY,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: CONST.SPACING.VERTICAL,
    paddingHorizontal: CONST.SPACING.HORIZONTAL,
    borderTopWidth: 2,
    borderColor: CONST.COLOR.LIGHT_GREY,
  },
  itemContainerFirst: {
    borderTopWidth: 0,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    paddingVertical: CONST.SPACING.VERTICAL / 4,
  },
  itemAction: {alignSelf: 'flex-end'},
})

export default styles
