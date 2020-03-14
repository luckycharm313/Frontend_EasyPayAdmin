import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  searchIcon: {
    fontSize: Fonts.size.xs,
    marginRight: Metrics.section.small,
    color: Colors.textHintColor
  },
  tableContainer: {
    marginBottom: Metrics.section.large,
    backgroundColor: Colors.white,
    borderBottomRightRadius: Metrics.mainRadius,
    borderBottomLeftRadius: Metrics.mainRadius
  },
  tableHead: {
    marginTop: Metrics.mainVertical,
    paddingVertical: Metrics.section.medium,
    paddingHorizontal: Metrics.section.small,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrics.mainRadius,
    borderTopRightRadius: Metrics.mainRadius,
  },
  tableText: {
    fontSize: Fonts.size.medium,
    color: Colors.black,
    fontWeight: '600'
  },
  rowText: {
    fontSize: Fonts.size.medium * 0.9,
    color: Colors.black
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.section.small,
    paddingVertical: Metrics.section.small,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
  statusCell: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowIcon: {
    fontSize: Fonts.size.tiny * 0.8,
    marginRight: Metrics.section.tiny
  }
})
