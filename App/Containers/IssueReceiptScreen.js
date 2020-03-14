import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../Components/Header'
import SmallBill from '../Components/SmallBill'
import BigBill from '../Components/BigBill'

// Styles
import { Metrics, Colors, Fonts } from '../Themes/'
import styles from './Styles/IssueReceiptScreenStyle'

class IssueReceiptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBillView: false
    }
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
                  <Button
                    // icon={
                    //   <Icon
                    //     name="download"
                    //     size={Fonts.size.medium}
                    //     color={Colors.white}
                    //   />
                    // }
                    title='Print Bill'
                    titleStyle={[styles.buttonTitleStyle/*, { marginLeft: Metrics.section.small}*/]}
                    buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                    containerStyle={[styles.buttonContainerStyle, {alignItems: 'baseline', marginLeft: Metrics.section.small}]}
                    onPress={this.onPrintHandle}
                  />
                </View>
              </View>
              <View style={styles.mainContent}>
                <View style={styles.billContent}>
                  <SmallBill onClickPaperHandle={() => this.onClickPaperHandle(null, true)}/>
                </View>
              </View>
            </View>
          </View>
        }        
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

export default connect(mapStateToProps, mapDispatchToProps)(IssueReceiptScreen)
