import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Header from '../Components/Header'
import SmallBill from '../Components/SmallBill'
import BigBill from '../Components/BigBill'

// Styles
import styles from './Styles/SplitScreenStyle'
import { Metrics, Colors, Fonts } from '../Themes/'

class SplitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBillView: false,
      column: 0,
      data: []
    }
  }

  onSplitHandle = (e) => {
    if(e == 2) this.setState({data: [1, 2]})
    if(e == 3) this.setState({data: [1, 2, 3]})
    if(e == 5) this.setState({data: [1, 2, 3, 4, 5]})
    this.setState({column: e})
  }

  onClickPaperHandle = (e, isBillView) => {
    this.setState({isBillView})
  }

  renderItem= (e) => {
    return(
      <View style={styles.billContainer}>
        <SmallBill column={this.state.column} onClickPaperHandle={() => this.onClickPaperHandle(null, true)}/>
      </View>
    )
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        {
          this.state.isBillView ? 
            <BigBill column={this.state.column} onClickPaperHandle={() => this.onClickPaperHandle(null, false)}/>
          :
          <View style={{ flex: 1}}>
            <Header leftButton='back' navigation={this.props.navigation} />
            <View style={[styles.mainPaddingContainer , {}]}>
              {
                this.state.column === 0 &&
                  <View style={styles.introduceContainer}>
                    <Text style={{fontSize: Fonts.size.medium, fontWeight: '800', textAlign: 'center', marginBottom: Metrics.section.medium, color: Colors.fire}}>BILL SPLIT WARNING AND INSTRUCTIONS</Text>
                    <Text style={styles.introduceText}>
                      AS EACH PAYMENT COMPLETES EACH RECEIPT WILL DISSAPEAR.ONCE LAST PAYMENT IS SUCCESSFUL, IT’LL AUTOMATICALLY TAKE YOU BACK TO HOME PAGE. IF CARD PAYMENT DOESNT WORK. CLICK BACK TO HOME AND ADVICE CUSTOMER TO CHECK CARD ON FILE ON EASY PAY APP OR THEY CAN PAY CASH.
                    </Text>
                    <Text style={[styles.introduceText, {marginTop: Metrics.section.medium}]}>
                      ALWAYS CHECK PAYMENT STATUS TO MAKE SURE PAYMENT HAS GONE THROUGH.
                    </Text>
                  </View>
              }              
              <View style={styles.topBtnContainer}>
                <TouchableOpacity
                  style={styles.refreshContainer}
                  onPress={() => this.props.navigation.navigate('MainScreen')}
                >
                  <FontAwesome name="home" style={styles.refreshIcon} />
                </TouchableOpacity>
                <Button
                  title='50 / 50'
                  titleStyle={[styles.buttonTitleStyle]}
                  buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                  containerStyle={[styles.buttonContainerStyle, { width: '25%' }]}
                  onPress={() => this.onSplitHandle(2)}
                />
                <Button
                  title='3 Way Split'
                  titleStyle={[styles.buttonTitleStyle]}
                  buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                  containerStyle={[styles.buttonContainerStyle, { width: '25%' }]}
                  onPress={() => this.onSplitHandle(3)}
                />
                <Button
                  title='5 Way Split'
                  titleStyle={[styles.buttonTitleStyle]}
                  buttonStyle={[styles.buttonStyle, {paddingVertical: Metrics.mainVertical * 0.8, paddingHorizontal: Metrics.mainHorizontal}]}
                  containerStyle={[styles.buttonContainerStyle, { width: '25%' }]}
                  onPress={() => this.onSplitHandle(5)}
                />
                <TouchableOpacity
                  style={styles.refreshContainer}
                  onPress={() => this.onSplitHandle(0)}
                >
                  <FontAwesome name="refresh" style={styles.refreshIcon} />
                </TouchableOpacity>                
              </View>
              
              <View style={styles.mainContent}>
              {
                this.state.column > 0 &&
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.listContainer}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent:'space-between'}}
                    listKey={(item, index) => index.toString()}
                  />
              } 
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

export default connect(mapStateToProps, mapDispatchToProps)(SplitScreen)
