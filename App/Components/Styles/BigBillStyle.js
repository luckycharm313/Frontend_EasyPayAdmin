import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  payContainer: {
    width: '49%',
    justifyContent: 'center'
  },
  paperContainer: {
    flex: 1,
    marginTop: Metrics.section.xl,
    backgroundColor: Colors.white,
    borderRadius: Metrics.mainRadius * 3,
    padding: Metrics.mainHorizontal,
    position: 'relative'
  },
  paperHeaderContainer: {
    alignItems: 'center'
  },
  textResName: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    fontWeight: '700',
    marginBottom: Metrics.section.tiny * 0.8,
    marginTop: Metrics.section.small * 0.8
  },
  textAddressName: {
    fontSize: Fonts.size.tiny,
    color: Colors.black,
    letterSpacing: 0.5,
    marginVertical: Metrics.section.tiny * 0.3
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: Metrics.section.tiny * 0.3
  },
  orderLeft: {
    flex: 1,
    fontSize: Fonts.size.tiny,
    color: Colors.black,
    marginRight: Metrics.section.tiny * 0.3
  },
  orderRight: {
    fontSize: Fonts.size.tiny,
    color: Colors.black,
  },
  totalLeft: {
    fontSize: Fonts.size.small,
    color: Colors.black,
    flex: 1,
    marginRight: Metrics.section.small,
    textAlign: 'right'
  },
  totalRight: {
    textAlign: 'right',
    width: '30%',
    fontSize: Fonts.size.small,
    color: Colors.black,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: Metrics.section.large
  },
  qrText: {
    marginTop: Metrics.section.large,
    fontSize: Fonts.size.small,
    color: Colors.black,
    fontWeight: '600'
  },
  zoomContainer: {
    position: 'absolute',
    bottom: Metrics.mainHorizontal,
    right: Metrics.mainHorizontal,
  },
  zoomOutIcon: {
    fontSize: Fonts.size.h4,
    color:Colors.black
  },
  splitText: {
    marginTop: Metrics.section.large,
    marginBottom: Metrics.section.small,
    fontSize: Fonts.size.middle,
    color: Colors.black,
    fontWeight: '800',
    textAlign: 'center'
  },
  splitCostText: {
    textAlign: 'center',
    fontSize: Fonts.size.middle,
    color: Colors.error,
    fontWeight: '700',
    marginBottom: Metrics.section.medium
  }
})
