import React, { Component } from "react";
import { connect } from 'react-redux'
import { View, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./Styles/HeaderStyle";
import { Images } from "../Themes";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.leftButton === "back" ? (
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={() => this.props.nextScreen ? this.props.navigation.navigate(this.props.nextScreen): this.props.navigation.goBack()}
          >
            <Icon name="arrow-back" style={styles.iconBack} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={
              () => this.props.navigation.openDrawer()
            }
          >
            <Icon name="settings" style={styles.iconSetting} />
          </TouchableOpacity>
        )}
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