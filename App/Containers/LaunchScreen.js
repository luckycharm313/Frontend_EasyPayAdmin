import React, { Component } from 'react'
import { SafeAreaView, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
// Styles
import styles from './Styles/LaunchScreenStyle'
import { Images } from '../Themes/'
class LaunchScreen extends Component {
  onOneTimePaymentHandle = () => {

  }

  onSigninHandle = () => {
    this.props.navigation.navigate('SigninScreen')
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainPaddingContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={Images.logo}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={styles.btnGroupContainer}>
            <Button
              title='ONE TIME PAYMENT'
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainerStyle}
              onPress={this.onOneTimePaymentHandle}
            />
            <Button
              title='SIGN IN'
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={[styles.buttonContainerStyle, { marginTop: 40}]}
              onPress={this.onSigninHandle}
            />
            <Button
              title='SIGN UP'
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={[styles.buttonContainerStyle]}
              onPress={this.onSigninHandle}
            />
          </View>
        </View>        
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
