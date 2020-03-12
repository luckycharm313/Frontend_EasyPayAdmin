import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logoContainer: {
    alignItems: 'center',
    marginVertical: Metrics.mainVertical
  },
  textNote: {
    fontSize: Fonts.size.popular,
    color: Colors.white,
    fontWeight: '400',
    marginVertical: Metrics.mainVertical
  },
  textWelcome: {
    fontSize: Fonts.size.h5,
    color: Colors.white,
    fontWeight: '600',
    marginTop: Metrics.mainVertical
  }
})
