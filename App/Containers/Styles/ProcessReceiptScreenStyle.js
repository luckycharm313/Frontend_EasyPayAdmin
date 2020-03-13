import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textTitle: {
    marginTop: Metrics.mainVertical,
    color: Colors.white,
    fontSize: Fonts.size.h6,
    fontWeight: '600'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Metrics.mainVertical,
  },
  iconPlus: {
    aspectRatio: 1,
    padding: Metrics.section.small,
    backgroundColor: Colors.primaryLight,
    borderRadius: 200
  },
  icon: {
    color: Colors.white,
    fontSize: Fonts.size.h6,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  paperContainer: {
    width: '60%',
    marginRight: Metrics.section.xl
  },
  mainRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Metrics.section.doubleXl
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: Metrics.section.small
  },
  orderLeft: {
    fontSize: Fonts.size.middle,
    color: Colors.white,
    flex: 1,
    marginRight: Metrics.section.small
  },
  orderRight: {
    fontSize: Fonts.size.middle,
    color: Colors.white,
    marginRight: Metrics.section.xl
  },
  totalLeft: {
    fontSize: Fonts.size.middle,
    color: Colors.white,
    flex: 1,
    marginRight: Metrics.mainHorizontal,
    textAlign: 'right'
  },
  totalRight: {
    textAlign: 'right',
    width: '30%',
    fontSize: Fonts.size.middle,
    color: Colors.white,
  }
})
