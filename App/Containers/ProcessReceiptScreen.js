import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dash from 'react-native-dash'
import Toast from 'react-native-simple-toast'

import Header from '../Components/Header'
import Input from '../Components/Input'
import { currencyFormat } from '../Services/Constant'
import ReceiptAction from '../Redux/ReceiptRedux'
// Styles
import { Metrics, Fonts, Colors } from '../Themes/'
import styles from './Styles/ProcessReceiptScreenStyle'

class ProcessReceiptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardHeight: 0,
      name: '',
      quantity: '',
      price: '',
      orders: [],
      subTotal: 0
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderLeft}>{item.quantity}&nbsp;{item.name}</Text>
        <Text style={styles.orderRight}>{currencyFormat(parseFloat(item.price) * parseInt(item.quantity))}</Text>
        <TouchableOpacity
            style={[styles.iconPlus, { backgroundColor: Colors.transparent, aspectRatio: null}]}
            onPress={() => this.ondeleteHandle(item)}
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

  onAddHandle = () => {
    const {name, quantity, price} = this.state
    let regNumber = /^\d+$/ ;
    let decimal=  /^[-+]?[0-9]+\.[0-9]+$/;
    if( name === '') return Toast.show('Menu Item is empty.');
    if( quantity === '' || regNumber.test(quantity) === false || quantity === 0 ) return Toast.show('Quantity is not correct.');
    if( price === 0 || price.match(decimal) === false) return Toast.show('Price is not correct.');

    let _orders = [...this.state.orders]
    let orders = []
    let isNew = 1;
    _orders.forEach(e => {
      if ( e.price === price && e.name === name) {
        orders.push({
          iid: e.iid,
          name,
          quantity: parseInt(e.quantity) + parseInt(quantity),
          price
        })
        isNew = 0;
      } else {
        orders.push(e)
      }
    })
    if(isNew === 1) {
      orders.push({
        iid: Date.now(),
        name,
        quantity,
        price
      })
    }    
    
    let subTotal = this.getSubTotal(orders);

    this.setState({ orders, subTotal, name: '', quantity: 0, price: 0 })
  }
  
  ondeleteHandle = (item) => {
    const { iid } = item

    let _orders = [...this.state.orders]
    let orders = []
    _orders.forEach(e => {
      if ( e.iid !== iid ) {
        orders.push(e)
      }
    })

    let subTotal = this.getSubTotal(orders);

    this.setState({ orders, subTotal })
  }

  onClearHandle = () => {
    this.setState({ orders: [] })
  }

  getSubTotal = ( orders ) => {
    let subTotal = 0;
    orders.forEach(element => {
      subTotal += parseInt(element.quantity) * parseFloat(element.price);
    });
    return subTotal;
  }

  onProgressHandle = () => {
    const { orders, subTotal } = this.state
    if(subTotal === 0 ) return Toast.show('Menu is empty.')
    var params = {
      orders,
      sub_total: subTotal,
      total: parseFloat(this.state.subTotal) * ( 100 + parseFloat(this.props.tax)) / 100,
      tax: parseFloat(this.props.tax),      
    }

    this.props.sendOrders(params)
  }

  render () {
    
    return (
      <SafeAreaView style={styles.container}>
        <Header leftButton='back' navigation={this.props.navigation}/>
        <View style={[styles.mainPaddingContainer , {}]}>
          <Text style={styles.textTitle}>Add Menu Item</Text>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={(name)=>this.setState({name})}
              placeholder='Menu Item'
              inputContainer={{ width: '40%'}}
              value={this.state.name} />
            <Input
              onChangeText={(quantity)=>this.setState({quantity})}
              placeholder='Quantity'
              keyboardType='phone-pad'
              inputContainer={{ width: '20%'}}
              value={this.state.quantity} />
            <Input
              onChangeText={(price)=>this.setState({price})}
              placeholder='Price'
              keyboardType='phone-pad'
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
                data={this.state.orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                ListHeaderComponent={this.renderHeader}
              />
            </View>
            <View style={styles.mainRightContainer}>
              <View style={{marginBottom: Metrics.section.xl}}>
                <View style={[styles.orderItem, { marginTop: Metrics.section.medium }]}>
                  <Text style={styles.totalLeft}>Subtotal</Text>
                  <Text style={styles.totalRight}>{currencyFormat(this.state.subTotal)}</Text>
                </View>
                <View style={styles.orderItem}>
                  <Text style={styles.totalLeft}>Tax</Text>
                  <Text style={styles.totalRight}>{this.props.tax}</Text>
                </View>
                <View style={styles.orderItem}>
                  <Text style={[styles.totalLeft, { fontWeight: '800' }]}>Total</Text>
                  <Text style={[styles.totalRight, { fontWeight: '800' }]}>{currencyFormat(parseFloat(this.state.subTotal) * ( 100 + parseFloat(this.props.tax)) / 100 )}</Text>
                </View>
              </View>
              <Button
                title='Preview Receipt'
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={[styles.buttonContainerStyle, { marginTop: Metrics.section.xl }]}
                onPress={this.onProgressHandle}
              />
              <Button
                title='Clear All Items'
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                containerStyle={[styles.buttonContainerStyle, { marginBottom: Metrics.section.xl}]}
                onPress={this.onClearHandle}
              />
            </View>
          </View>          
        </View>        
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({employee}) => {
  return {
    tax: employee.employee.tax
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendOrders: (params) => dispatch(ReceiptAction.sendOrders(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessReceiptScreen)
