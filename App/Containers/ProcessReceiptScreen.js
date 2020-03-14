import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dash from 'react-native-dash'
import Header from '../Components/Header'
import Input from '../Components/Input'
// Styles
import { Metrics, Fonts, Colors } from '../Themes/'
import styles from './Styles/ProcessReceiptScreenStyle'

class ProcessReceiptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardHeight: 0,
      item: '',
      quantity: 0,
      price: 0,
    }
  }

  renderItem = (e) => {
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderLeft}>1 horse beer</Text>
        <Text style={styles.orderRight}>9.00</Text>
        <TouchableOpacity
            style={[styles.iconPlus, { backgroundColor: Colors.transparent, aspectRatio: null}]}
            onPress={this.onAddHandle}
          >
          <Icon name='minus-circle' style={[styles.icon, { fontSize: Fonts.size.middle, color: Colors.ember }]} />
        </TouchableOpacity>
      </View>
    )
  }

  renderHeader = () => {
    return (
      <View style={[styles.orderItem, { marginVertical: Metrics.mainVertical }]}>
        <Text style={[styles.orderLeft, { fontWeight: '800' }]}>ITEM</Text>
        <Text style={[styles.orderRight, { fontWeight: '800' }]}>PRICE</Text>
      </View>
    )
  }

  onProgressHandle = () => {
    this.props.navigation.navigate('IssueReceiptScreen')
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header leftButton='back' navigation={this.props.navigation}/>
        <View style={[styles.mainPaddingContainer , {}]}>
          <Text style={styles.textTitle}>Add Menu Item</Text>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={(item)=>this.setState({item})}
              placeholder='Menu Item'
              inputContainer={{ width: '40%'}}
              value={this.state.item} />
            <Input
              onChangeText={(quantity)=>this.setState({quantity})}
              placeholder='Quantity'
              inputContainer={{ width: '20%'}}
              value={this.state.quantity} />
            <Input
              onChangeText={(price)=>this.setState({price})}
              placeholder='Price'
              inputContainer={{ width: '20%'}}
              value={this.state.price} />
            <TouchableOpacity
                style={styles.iconPlus}
                onPress={this.onAddHandle}
              >
              <Icon name='plus' style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }} dashColor='white' />
          <View style={styles.mainContainer}>
            <View style={styles.paperContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={[1,2,3,1,1,1,52,2,2,2,2]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                ListHeaderComponent={this.renderHeader}
              />
            </View>
            <View style={styles.mainRightContainer}>
              <View style={{marginBottom: Metrics.section.xl}}>
                <View style={[styles.orderItem, { marginTop: Metrics.section.medium }]}>
                  <Text style={styles.totalLeft}>Subtotal</Text>
                  <Text style={styles.totalRight}>14.00</Text>
                </View>
                <View style={styles.orderItem}>
                  <Text style={styles.totalLeft}>Tax</Text>
                  <Text style={styles.totalRight}>2.00</Text>
                </View>
                <View style={styles.orderItem}>
                  <Text style={[styles.totalLeft, { fontWeight: '800' }]}>Total</Text>
                  <Text style={[styles.totalRight, { fontWeight: '800' }]}>16.00</Text>
                </View>
              </View>
              <Button
                title='Preview Receipt'
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={[styles.buttonContainerStyle, { marginVertical: Metrics.section.xl }]}
                onPress={this.onProgressHandle}
              />
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProcessReceiptScreen)
