import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  modalContainer: {
    backgroundColor: Colors.lightWhite,
    paddingHorizontal: Metrics.mainHorizontal,
    paddingVertical: Metrics.mainVertical,
    borderRadius: Metrics.mainRadius
  },
  modalLabel: {
    fontSize: Fonts.size.medium,
    color: Colors.ember,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: Metrics.mainVertical
  }
})
