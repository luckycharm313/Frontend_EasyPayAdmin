import React, { useState } from "react";
import {
  Platform,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text
} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import styles from "./Styles/NavigationStyles";
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import ProcessReceiptScreen from '../Containers/ProcessReceiptScreen'
import IssueReceiptScreen from '../Containers/IssueReceiptScreen'
import { Colors, Metrics, Images } from "../Themes/";


const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    LoginScreen: { screen: LoginScreen },
    MainScreen: { screen: MainScreen },
    ProcessReceiptScreen: { screen: ProcessReceiptScreen },
    IssueReceiptScreen: { screen: IssueReceiptScreen },
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
