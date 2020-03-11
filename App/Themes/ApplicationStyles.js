import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    scrollContainer: {
      flexGrow: 1
    },
    container: {
      flex: 1,      
      backgroundColor: Colors.primary
    },
    lightBackground: {
      flex: 1,      
      backgroundColor: Colors.darkWhite
    },
    mainContainer: {
      flex: 1,      
      backgroundColor: Colors.primaryDark
    },
    mainPaddingContainer: {
      flex: 1,
      paddingHorizontal: Metrics.mainHorizontal,
      paddingVertical: Metrics.mainVertical,
    },
    topContainer: {
      position: 'relative',
      height: 120,
      paddingHorizontal: Metrics.mainHorizontal,
      backgroundColor: Colors.primary,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30
    },
    buttonStyle: {
      backgroundColor: Colors.primaryLight,
      borderRadius: Metrics.mainRadius,
      paddingVertical: Metrics.mainVertical * 1.2,
      borderColor: Colors.white,
      borderWidth: 1,
    },
    buttonTitleStyle: {
      fontSize: Fonts.size.medium,
      fontFamily: Fonts.type.bold,
    },
    buttonContainerStyle: {
      marginVertical: Metrics.mainVertical
    },
  }
}

export default ApplicationStyles
