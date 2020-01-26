import {StyleSheet} from 'react-native'
import THEME from '../theme'

const styles = StyleSheet.create({
  sectionHeader: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontWeight: 'bold',
    paddingVertical: THEME.SPACING.VERTICAL / 2,
    paddingHorizontal: THEME.SPACING.HORIZONTAL,
    backgroundColor: THEME.COLOR.LIGHT_GREY,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: THEME.SPACING.VERTICAL,
    paddingHorizontal: THEME.SPACING.HORIZONTAL,
    borderTopWidth: 2,
    borderColor: THEME.COLOR.LIGHT_GREY,
  },
  itemContainerFirst: {
    borderTopWidth: 0,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontSize: THEME.FONT.SIZE.SUBTITLE,
    fontWeight: 'bold',
    paddingVertical: THEME.SPACING.VERTICAL / 4,
  },
  itemSubtitle: {
    fontFamily: THEME.FONT.FAMILY.REGULAR,
    fontSize: THEME.FONT.SIZE.INFO,
    color: THEME.FONT.COLOR.SECONDARY,
    paddingVertical: THEME.SPACING.VERTICAL / 4,
  },
  itemAction: {alignSelf: 'flex-end'},
})

export default styles
