import React, { Component } from "react";
import { connect } from 'react-redux'
import { AsyncStorage, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import styles from "./Styles/HeaderStyle";

class Header extends Component {

  onLogoutHandle = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('LaunchScreen');
  }

  render() {
    console.log(this.props.navigation)
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
          <Text style={styles.welcomeText}>Welcome,&nbsp;{this.props.self_id}</Text>
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
const mapStateToProps = ({ employee }) => {
  return {
    self_id: employee.employee.self_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)