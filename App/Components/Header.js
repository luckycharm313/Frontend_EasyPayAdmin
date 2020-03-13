import React, { Component } from "react";
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import styles from "./Styles/HeaderStyle";
import { Images } from "../Themes";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.leftButton === "back" && (
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={() => this.props.nextScreen ? this.props.navigation.navigate(this.props.nextScreen): this.props.navigation.goBack()}
          >
            <Icon name="arrow-back" style={styles.iconBack} />
          </TouchableOpacity>
        )}
        <View style={styles.rightContainer}>
          <Text style={styles.welcomeText}>Welcome,&nbsp;123123{this.props.employeeId}</Text>
          <TouchableOpacity
              style={styles.iconRight}
              onPress={this.onLogoutHandle}
            >
            <LogoutIcon name="logout" style={styles.icon} />
          </TouchableOpacity>
        </View>        
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)