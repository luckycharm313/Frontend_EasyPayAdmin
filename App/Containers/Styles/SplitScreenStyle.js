import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  introduceContainer: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.mainRadius,
    padding: Metrics.section.medium,
    marginVertical: Metrics.section.large
  },
  introduceText: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    fontWeight: '500'
  },
  topBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainContent: {
    flex: 1,
    marginHorizontal: - Metrics.mainHorizontal* 0.5,    
  },
  billContainer: {
    flex:1,
    paddingHorizontal: Metrics.mainHorizontal * 0.5
  },
  refreshContainer: {
    // width: '5%',
    aspectRatio: 1,
    backgroundColor: Colors.primaryLight,
    borderRadius: 500,
    padding: Metrics.mainVertical * 0.8,
    borderColor: Colors.white,
    borderWidth: 1
  },
  refreshIcon: {
    fontSize: Fonts.size.h6,
    color: Colors.white,
    fontWeight: '700'
  },
})