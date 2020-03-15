import React, { Component } from 'react'
import { SafeAreaView, View, Image, ScrollView, Keyboard, LayoutAnimation, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Input from '../Components/Input'
// Styles
import styles from './Styles/LaunchScreenStyle'
import { Images, Metrics } from '../Themes/'
class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardHeight: 0,
      biz_name: '',
      manage_employee_id: '',
      manage_employee_pin: '',
      biz_phone: '',
      biz_address: '',
      password: '',
      cf_password: '',
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
    this.props.navigation.navigate('LoginScreen')
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
              <Text style={styles.textWelcome}>WELCOME TO EASY PAY ADMIN CONSOLE</Text>
            </View>
            <View style={styles.vCenterContainer}>
              <Input
                onChangeText={(biz_name)=>this.setState({biz_name})}
                placeholder='BUSINESS NAME'
                value={this.state.biz_name} />
              <View style={styles.rowItem}>
                <Input
                  inputContainer={{flex: 1, marginRight: Metrics.section.tiny}}
                  onChangeText={(manage_employee_id)=>this.setState({manage_employee_id})}
                  placeholder='MANAGER EMPLOYEE ID'
                  value={this.state.manage_employee_id} />
                <Input
                  inputContainer={{flex: 1, marginLeft: Metrics.section.tiny}}
                  onChangeText={(manage_employee_pin)=>this.setState({manage_employee_pin})}
                  placeholder='MANAGER EMPLOYEE PIN CODE'
                  value={this.state.manage_employee_pin} />
              </View>              
              <View style={styles.rowItem}>
                <Input
                  inputContainer={{flex: 1, marginRight: Metrics.section.tiny}}
                  onChangeText={(biz_phone)=>this.setState({biz_phone})}
                  placeholder='BUSINESS PHONE NUMBER'
                  value={this.state.biz_phone} />
                <Input
                  inputContainer={{flex: 1, marginLeft: Metrics.section.tiny}}
                  onChangeText={(biz_address)=>this.setState({biz_address})}
                  placeholder='BUSINESS ADDRESS'
                  value={this.state.biz_address} />
              </View>
              <View style={styles.rowItem}>
                <Input
                  inputContainer={{flex: 1, marginRight: Metrics.section.tiny}}
                  onChangeText={(password)=>this.setState({password})}
                  secureTextEntry
                  placeholder='OVERRIDE PASSWORD'
                  value={this.state.password} />
                <Input
                  inputContainer={{flex: 1, marginLeft: Metrics.section.tiny}}
                  onChangeText={(cf_password)=>this.setState({cf_password})}
                  secureTextEntry
                  placeholder='CONFIRM OVERRIDE PASSWORD'
                  value={this.state.cf_password} />
              </View>              
              <Text style={styles.textNote}>WARNING : OVERRIDE PASSWORD CAN ONLY BE CHANGED AND RETRIEVED BY 
                CONTACTING EASY PAY SUPPORT. PLEASE STORE AND KEEP INFO IN A SAFE PLACE.
              </Text>
              <Button
                title='BEGIN'
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

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
