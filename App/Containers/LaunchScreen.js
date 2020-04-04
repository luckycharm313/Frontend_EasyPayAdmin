import React, { Component } from 'react'
import { SafeAreaView, View, Image, ScrollView, Keyboard, LayoutAnimation, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Toast from 'react-native-simple-toast'
import SplashScreen from 'react-native-splash-screen'
import StartupAction from '../Redux/StartupRedux'
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
      tax: '',
      manager_id: '',
      manager_pin: '',
      biz_phone: '',
      biz_address: '',
      password: '',
      cf_password: '',
    }
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    this.props.isLogin();
    setTimeout(() => SplashScreen.hide(), 3000)
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
    const { biz_name, biz_phone, biz_address, tax, manager_id, manager_pin, password, cf_password } = this.state;

    let regNumber = /^\d+$/ ;

    if( biz_name === '') return Toast.show('Please fill in Business name.');
    if( biz_address === '') return Toast.show('Please fill in Business address.');
    if( biz_phone === '' ) return Toast.show('Please fill in Phone.');
    if( tax === '') return Toast.show('Please fill in Tax.');
    if( manager_id === '') return Toast.show('Please fill in Manager ID.');
    if( manager_pin === '') return Toast.show('Please fill in Manager PIN Code.');
    
    if(password === '' || cf_password === '' ) {      
      return Toast.show('Password or confirm password is empty.');
    } else {
      if(password !== cf_password ){
        return Toast.show("Password doesn't match confirm password.");
      }
    }

    this.props.navigation.navigate('LoginScreen', { biz_name, biz_address, biz_phone, tax, manager_id, manager_pin, password })
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
              <View style={styles.rowItem}>
                <Input
                  inputContainer={{flex: 1, marginRight: Metrics.section.tiny}}
                  onChangeText={(biz_name)=>this.setState({biz_name})}
                  placeholder='BUSINESS NAME'
                  value={this.state.biz_name} />
                <Input
                  inputContainer={{flex: 1, marginLeft: Metrics.section.tiny}}
                  onChangeText={(biz_address)=>this.setState({biz_address})}
                  placeholder='BUSINESS ADDRESS'
                  value={this.state.biz_address} />
              </View>
              <View style={styles.rowItem}>
                <Input
                  inputContainer={{flex: 1, marginRight: Metrics.section.tiny}}
                  onChangeText={(biz_phone)=>this.setState({biz_phone})}
                  placeholder='BUSINESS PHONE NUMBER'
                  keyboardType='phone-pad'
                  value={this.state.biz_phone} />
                <Input
                  inputContainer={{flex: 1, marginLeft: Metrics.section.tiny}}
                  onChangeText={(tax)=>this.setState({tax})}
                  placeholder='TAX'
                  keyboardType='phone-pad'
                  value={this.state.tax} />
              </View>
              <View style={styles.rowItem}>
                <Input
                  inputContainer={{flex: 1, marginRight: Metrics.section.tiny}}
                  onChangeText={(manager_id)=>this.setState({manager_id})}
                  placeholder='MANAGER ID'
                  value={this.state.manager_id} />
                <Input
                  inputContainer={{flex: 1, marginLeft: Metrics.section.tiny}}
                  onChangeText={(manager_pin)=>this.setState({manager_pin})}
                  secureTextEntry
                  placeholder='MANAGER PIN CODE'
                  value={this.state.manager_pin} />
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

const mapStateToProps = ({startup}) => {
  return {
    isLogged: startup.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: () => dispatch(StartupAction.isLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
