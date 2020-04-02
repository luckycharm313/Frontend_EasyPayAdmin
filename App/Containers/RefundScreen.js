import React, { Component } from 'react'
import { SafeAreaView, View, Text, ScrollView, Keyboard, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Modal from 'react-native-modal'
import Toast from 'react-native-simple-toast'
import ReceiptAction from '../Redux/ReceiptRedux'
import Header from "../Components/Header"
import Input from "../Components/Input"
// Styles
import { Metrics } from '../Themes/'
import styles from './Styles/RefundScreenStyle'

class RefundScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      keyboardHeight: 0,
      receipt_id: 0,
      refund_amount: 0,
      employee_id: 0,
      pin: '',
    }
  }
  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
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

  onRefundHandle= () => {
    const { receipt_id, refund_amount } = this.state
    if( receipt_id === '') return Toast.show('Receipt No is empty.');
    if( refund_amount === '') return Toast.show('Amount is empty.');
    
    this.setState({ isOpen: true })
  }
  onGoHandle = () => {
    const { employee_id, pin, receipt_id, refund_amount } = this.state
    if( employee_id === '') return Toast.show('Manager ID is empty.');
    if( pin === '') return Toast.show('PIN is empty.');

    var params = {
      receipt_id,
      refund_amount,
      manager_id: employee_id,
      pin
    }
    this.props.refund(params)
    // this.setState({ isOpen: false })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          <Header leftButton='back' navigation={this.props.navigation}/>
          <View style={[styles.mainPaddingContainer, styles.vCenterContainer]}>
            <Input
              onChangeText={(receipt_id)=>this.setState({receipt_id})}
              placeholder='ENTER RECEIPT No. TO ISSUE REFUND'
              value={this.state.receipt_id} />
            <Input
              onChangeText={(refund_amount)=>this.setState({refund_amount})}
              placeholder='ENTER AMOUNT TO REFUND'
              keyboardType='phone-pad'
              value={this.state.refund_amount} />
            <Button
                title='ISSUE REFUND'
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={[styles.buttonContainerStyle, { marginTop: Metrics.section.xl}]}
                onPress={this.onRefundHandle}
              />
          </View>
        </ScrollView>
        <View style={{height: this.state.keyboardHeight}}/>
        <Modal
          isVisible={this.state.isOpen}
          onBackdropPress={() => this.setState({ isOpen: false })}
          >
          <View style={styles.modalContainer}>
            <Text style={styles.modalLabel}>WARNING!!! ONLY SUPERVISORS AND MANAGERS ARE ALLOWED TO OVERRIDE PAYMENTS</Text>
            <Input
              onChangeText={(employee_id)=>this.setState({employee_id})}
              placeholder='ENTER MANAGER OR SUPERVISOR EMPLOYEE ID'
              value={this.state.employee_id} />
            <Input
              onChangeText={(pin)=>this.setState({pin})}
              placeholder='ENTER OVERRIDE PIN TO VERIFY IDENTITY'
              value={this.state.pin} />
            <Button
              title='PROCEED'
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={[styles.buttonContainerStyle, { marginTop: Metrics.section.xl}]}
              onPress={this.onGoHandle}
            />
          </View>
        </Modal>
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
    refund: (params) => dispatch(ReceiptAction.refund(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RefundScreen)
