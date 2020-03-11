import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors, ApplicationStyles} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  applicationView: {
    flex: 1,
    backgroundColor: Colors.primaryDark
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
