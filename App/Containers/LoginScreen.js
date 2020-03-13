import React, { Component } from 'react'
import { SafeAreaView, View, Image, ScrollView, Keyboard, LayoutAnimation, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Input from '../Components/Input'

// Styles
import { Images, Metrics } from '../Themes/'
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardHeight: 0,
      employee_id: '',
    }
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    // this.props.isLogin();
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }
  
  handleKeyboardDidShow = (event) => {
    LayoutAnimation.easeInEaseOut()
    const keyboardHeight = event.endCoordinates.height
    this.setState({keyboardHeight})
  }

  handleKeyboardDidHide = () => {
    this.setState({keyboardHeight: 0})
  }

  onBeginHandle = () => {
    this.props.navigation.navigate('MainScreen')
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          <View style={styles.mainPaddingContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={Images.logo}
                style={{ width: Metrics.images.logo, height: Metrics.images.logo }}
              />
            </View>
            <View style={styles.vCenterContainer}>
              <Input
                onChangeText={(employee_id)=>this.setState({employee_id})}
                placeholder='ENTER EMPLOYEE ID Or NAME TO PROCEED'
                value={this.state.employee_id} />
              <Button
                title='ENTER'
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={[styles.buttonContainerStyle, { marginTop: Metrics.section.xl}]}
                onPress={this.onBeginHandle}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{height: this.state.keyboardHeight}}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
