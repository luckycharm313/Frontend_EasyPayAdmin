import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'
export default StyleSheet.create({
  inputContainer: {
    marginVertical: Metrics.mainVertical,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: Metrics.mainRadius,
    paddingHorizontal: Metrics.mainHorizontal * 0.5,
    paddingVertical: Metrics.mainVertical,
  },
	input: {
    flex: 1,
    fontSize: Fonts.size.popular,
		textAlign: 'left',
    color: Colors.black,
  }
})
