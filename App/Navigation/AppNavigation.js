import {
  createStackNavigator,
} from "react-navigation";

import styles from "./Styles/NavigationStyles";
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import ProcessReceiptScreen from '../Containers/ProcessReceiptScreen'
import IssueReceiptScreen from '../Containers/IssueReceiptScreen'
import SplitScreen from '../Containers/SplitScreen'
import StatusScreen from '../Containers/StatusScreen'
import RefundScreen from '../Containers/RefundScreen'

const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    LoginScreen: { screen: LoginScreen },
    MainScreen: { screen: MainScreen },
    ProcessReceiptScreen: { screen: ProcessReceiptScreen },
    IssueReceiptScreen: { screen: IssueReceiptScreen },
    SplitScreen: { screen: SplitScreen },
    StatusScreen: { screen: StatusScreen },
    RefundScreen: { screen: RefundScreen },
  },
  {
    headerMode: "none",
    initialRouteName: "IssueReceiptScreen",
    navigationOptions: {
      headerStyle: styles.header,
      lazy: false
    },
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default PrimaryNav;
