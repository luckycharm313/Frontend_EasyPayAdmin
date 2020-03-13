import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logoContainer: {
    alignItems: 'center',
    marginVertical: Metrics.mainVertical
  },
})
