import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  container: {
    position: "relative",
    height: Metrics.navBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    paddingHorizontal: Metrics.mainHorizontal
  },
  iconLeft: {
    paddingVertical: Metrics.section.tiny,
    paddingRight: Metrics.section.tiny,
    paddingLeft: 0,
  },
  iconRight: {
    paddingVertical: Metrics.section.tiny,
    paddingLeft: Metrics.section.tiny,
    paddingRight: 0,
  },
  icon: {
    color: Colors.lightWhite,
    fontSize: Fonts.size.h6
  },
  iconBack: {
    color: Colors.lightWhite,
    fontSize: Fonts.size.h6
  },
  iconSetting: {
    color: Colors.lightWhite,
    fontSize: Fonts.size.h5
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  welcomeText: {
    color: Colors.lightWhite,
    fontSize: Fonts.size.medium,
    fontWeight: '700',
    marginRight: Metrics.mainVertical
  }
});
