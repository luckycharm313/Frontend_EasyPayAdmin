import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')
const scale = width < height ? height / 812 : width / 812

const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38 * scale,
  h2: 34 * scale,
  h3: 24 * scale,
  h4: 26 * scale,
  h5: 20 * scale,
  h6: 19 * scale,
  input: 18 * scale,
  regular: 17 * scale,
  middle: 16 * scale,
  popular: 15 * scale,
  medium: 14 * scale,
  small: 12 * scale,
  xs: 11 * scale,
  tiny: 8.5 * scale
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
