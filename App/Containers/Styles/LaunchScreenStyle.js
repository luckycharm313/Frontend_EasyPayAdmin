import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logoContainer: {
    alignItems: 'center',
    marginTop: Metrics.screenHeight * 0.1
  },
  btnGroupContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})
