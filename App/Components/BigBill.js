import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dash from 'react-native-dash'
import QRCode from 'react-native-qrcode'

import { currencyFormat } from '../Services/Constant'
import { Colors, Metrics, Fonts } from '../Themes/'
import styles from './Styles/BigBillStyle'

export default class BigBill extends Component {

  subLargeRenderItem = ({ item }) => {
    return (
      <View style={[styles.orderItem, { marginVertical: Metrics.section.tiny}]}>
        <Text style={[styles.orderLeft, { fontSize: Fonts.size.small}]}>{item.quantity}&nbsp;{item.name}</Text>
        <Text style={[styles.orderRight, {fontSize: Fonts.size.small}]}>{currencyFormat(parseFloat(item.price) * parseInt(item.quantity))}</Text>
      </View>
    )
  }

  render () {
    let receipt = this.props.data.receipt
    let employee = this.props.data.employee
    let orders = this.props.data.orders
    
    let qr = {
      receipt_id: receipt.id,
      sub_receipt_id: 0
    }
    if(this.props.column) {
      qr = {
        receipt_id: receipt.id,
        sub_receipt_id: this.props.item.id
      }
    }

    return (
      <View style={[styles.paperContainer, { margin: Metrics.section.small }]}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <Text style={[styles.textResName, { textAlign: 'center', fontSize: Fonts.size.input}]}>{employee.biz_name}</Text>
          <View style={[styles.paperHeaderContainer, { flexDirection: 'row', alignItems: 'center', marginTop: Metrics.section.small}]}>
            <Text style={[styles.textAddressName, { fontSize: Fonts.size.small, marginRight: Metrics.section.small }]}>{employee.biz_phone}</Text>
            {/* <Text style={[styles.textAddressName, { fontSize: Fonts.size.small, marginRight: Metrics.section.small }]}>111, your address</Text> */}
            <Text style={[styles.textAddressName, { fontSize: Fonts.size.small }]}>{employee.biz_address}</Text>
          </View>
          <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }}/>          
          {
            this.props.column && 
              <Text style={styles.splitText}>SPLIT CHECK</Text>
          }
          <View style={[styles.orderItem, { marginVertical: Metrics.section.small }]}>
            <Text style={[styles.totalLeft, { fontWeight: '800', fontSize: Fonts.size.medium} ]}>Receipt No</Text>
            <Text style={[styles.totalRight, { width: null, fontWeight: '800', fontSize: Fonts.size.medium }]}>
              {receipt.id}{ this.props.column && '-'+this.props.item.id}
            </Text>
          </View>
          {
            !this.props.column &&
              <FlatList
                showsVerticalScrollIndicator={false}
                data={orders}
                listKey={(item, index) => index.toString()}
                renderItem={this.subLargeRenderItem}
              />
          }        
          <View style={{marginBottom: Metrics.section.xl * 1.2}}>
            <View style={[styles.orderItem, { marginTop: Metrics.section.large }]}>
              <Text style={[styles.totalLeft, { fontSize: Fonts.size.medium}]}>Subtotal</Text>
              <Text style={[styles.totalRight, { fontSize: Fonts.size.medium}]}>{currencyFormat(receipt.sub_total)}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={[styles.totalLeft, { fontSize: Fonts.size.medium}]}>Tax</Text>
              <Text style={[styles.totalRight, { fontSize: Fonts.size.medium}]}>{receipt.tax}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={[styles.totalLeft, { fontWeight: '800', fontSize: Fonts.size.popular }]}>Total</Text>
              <Text style={[styles.totalRight, { fontWeight: '800', fontSize: Fonts.size.popular }]}>{currencyFormat(receipt.total)}</Text>
            </View>
            {
              this.props.column &&
                <View>
                  <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }}/>
                  <Text style={styles.splitText}>PAYMENT ONE</Text>
                  <Text style={styles.splitCostText}>{currencyFormat(this.props.data.sub_receipts[0].cost)}</Text>
                </View>
            }
            <View style={styles.qrContainer}>
              {/* <Image
                source={Images.qr}
                style={{ width: Metrics.images.lQR, height: Metrics.images.lQR }}
              /> */}
              <QRCode
                value={JSON.stringify(qr)}
                size={Metrics.images.lQR}
                bgColor={Colors.black}
                fgColor={Colors.white}/>
              <Text style={styles.qrText}>Scan to pay</Text>
            </View>      
          </View>          
        </ScrollView>
        <TouchableOpacity
          style={styles.zoomContainer}
          onPress={() => this.props.onClickPaperHandle()}
        >
          <Icon name="search-minus" style={[styles.zoomOutIcon, {fontSize: Fonts.size.h3}]} />
        </TouchableOpacity>
      </View>      
    )
  }
}
