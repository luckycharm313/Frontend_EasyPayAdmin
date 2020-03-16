import React, { Component } from 'react'
import { SafeAreaView, View, Image, ScrollView, Keyboard, LayoutAnimation, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Toast from 'react-native-simple-toast'

import Input from '../Components/Input'
import EmployeeAction from '../Redux/EmployeeRedux'
// Styles
import { Images, Metrics } from '../Themes/'
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props
    const { state : {params}} = navigation
    this.state = {
      keyboardHeight: 0,
      biz_name: params.biz_name,
      biz_phone: params.biz_phone,
      biz_address: params.biz_address,
      tax: params.tax,
      manager_id: params.manager_id,
      manager_pin: params.manager_pin,
      password: params.password,
      self_id: '',
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
    const { biz_name, biz_phone, biz_address, tax, manager_id, manager_pin, password, self_id } = this.state;

    if( self_id === '') return Toast.show('Employee ID is empty.');
    var params = {
      biz_name,
      biz_phone,
      biz_address,
      tax,
      manager_id,
      manager_pin,
      password,
      self_id,
      company_id: 1
    }
    console.log({params})
    this.props.employeeLogin(params)
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
                onChangeText={(self_id)=>this.setState({self_id})}
                placeholder='EMPLOYEE ID'
                value={this.state.self_id} />
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
    employeeLogin: (params) => dispatch(EmployeeAction.employeeLogin(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
