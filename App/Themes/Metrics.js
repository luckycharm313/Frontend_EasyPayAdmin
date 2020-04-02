import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')
// const scale = width < height ? height / 812 : height / 375 
const scale = width < height ? height / 812 : width / 812 
// Used via Metrics.baseMargin
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: ((Platform.OS === 'ios') ? 64 : 54 ) * scale,
  mainRadius: 4 * scale,
  mainHorizontal: 20 * scale,
  mainVertical: 10 * scale,  
  horizontalLineHeight: 1 * scale,
  section: {
    tiny: 5 * scale,
    small: 10 * scale,
    medium: 15 * scale,
    large: 20 * scale,
    xl: 25 * scale,
    doubleXl: 50 * scale,
  },
  icons: {
    tiny: 15 * scale,
    small: 20 * scale,
    middle: 25 * scale,
    medium: 30 * scale,
    large: 45 * scale,
    xl: 50 * scale
  },
  images: {
    small: 20 * scale,
    medium: 40 * scale,
    large: 60 * scale,
    logo: 200 * scale,
    sQR: 120 * scale,
    lQR: 280 * scale,
    main: 320 * scale,
  }
}

export default metrics
