import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../Components/Header'
import SmallBill from '../Components/SmallBill'
import BigBill from '../Components/BigBill'
import ReceiptAction from '../Redux/ReceiptRedux'

// Styles
import { Metrics, Colors, Fonts } from '../Themes/'
import styles from './Styles/IssueReceiptScreenStyle'

class IssueReceiptScreen extends Component {
  constructor(props) {
    super(props);
    // const {navigation} = this.props
    // const { state : {params}} = navigation
    this.state = {
      isBillView: false,
      // receipt_id: params.receipt_id
      receipt_id: 4
    }
  }
  
  componentDidMount() {
    var params = {
      receipt_id: this.state.receipt_id
    }
    this.props.getReceipt(params)
  }

  onSplitHandle = () => {
    this.props.navigation.navigate('SplitScreen')
  }

  onPrintHandle = () => {
    
  }

  onClickPaperHandle = (e, isBillView) => {
    this.setState({isBillView})
  }

  render () {
    
    return (
      <SafeAreaView style={styles.container}>
        {
          this.state.isBillView ? 
            <BigBill onClickPaperHandle={() => this.onClickPaperHandle(null, false)}/>
          :
          <View style={{ flex: 1}}>
            <Header leftButton='back' navigation={this.props.navigation} />
            <View style={[styles.mainPaddingContainer , {}]}>
              <View style={styles.topBtnContainer}>
                <View style={{}}>
                  {/* <Button
                    icon={
                      <Icon
                        name="home"
                        size={Fonts.size.medium}
                        color={Colors.white}
                      />
                    }
                    title='Home'
                    titleStyle={[styles.buttonTitleStyle, { marginLeft: Metrics.section.small}]}
                    buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                    containerStyle={[styles.buttonContainerStyle, {alignItems: 'baseline'}]}
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                  /> */}
                  
                  <TouchableOpacity
                    style={styles.refreshContainer}
                    onPress={() => this.props.navigation.navigate('MainScreen')}
                  >
                    <Icon name="home" style={styles.refreshIcon} />
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Button
                    // icon={
                    //   <Icon
                    //     name="th-large"
                    //     size={Fonts.size.medium}
                    //     color={Colors.white}
                    //   />
                    // }
                    title='Split Bill'
                    titleStyle={[styles.buttonTitleStyle/*, { marginLeft: Metrics.section.small}*/]}
                    buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                    containerStyle={[styles.buttonContainerStyle, {alignItems: 'baseline'}]}
                    onPress={this.onSplitHandle}
                  />
                  {/* <Button
                    title='Print Bill'
                    titleStyle={[styles.buttonTitleStyle]}
                    buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                    containerStyle={[styles.buttonContainerStyle, {alignItems: 'baseline', marginLeft: Metrics.section.small}]}
                    onPress={this.onPrintHandle}
                  /> */}
                </View>
              </View>
              {
                Object.keys(this.props.scanData).length > 0 &&
                  <View style={styles.mainContent}>
                    <View style={styles.billContent}>
                      <SmallBill data={this.props.scanData} onClickPaperHandle={() => this.onClickPaperHandle(null, true)}/>
                    </View>
                  </View>
              }              
            </View>
          </View>
        }        
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({ receipt }) => {
  return {
    scanData: receipt.scanData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReceipt: (params) => dispatch(ReceiptAction.getReceipt(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueReceiptScreen)
