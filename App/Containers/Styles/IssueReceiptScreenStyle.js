import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  topBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  billContent: {
    width: '60%',
    height: '85%'
  },
  refreshContainer: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 500,
    padding: Metrics.mainVertical * 0.8,
    borderColor: Colors.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  refreshIcon: {
    aspectRatio: 1,
    fontSize: Fonts.size.h6,
    color: Colors.white,
    fontWeight: '700'
  },
})
