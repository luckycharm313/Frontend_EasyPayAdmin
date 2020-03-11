import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  mainRadius: 4,
  mainHorizontal: 20,
  mainVertical: 10,  
  horizontalLineHeight: 1,
  section: {
    tiny: 5,
    small: 10,
    medium: 15,
    large: 20,
    xl: 25,
    doubleXl: 50,
  },
  icons: {
    tiny: 15,
    small: 20,
    middle: 25,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
    main: 320,
  }
}

export default metrics
