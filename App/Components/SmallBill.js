import React, { Component } from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dash from 'react-native-dash'
import QRCode from 'react-native-qrcode'

import { currencyFormat } from '../Services/Constant'
import { Colors, Metrics } from '../Themes/'
import styles from './Styles/SmallBillStyle'
export default class SmallBill extends Component {

  subRenderItem = ({ item }) => {
    if(this.props.column) return null
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderLeft}>{item.quantity}&nbsp;{item.name}</Text>
        <Text style={styles.orderRight}>{currencyFormat(parseFloat(item.price) * parseInt(item.quantity))}</Text>
      </View>
    )
  }

  renderFooter = () => {
    let data = this.props.data.receipt
    let qr = {
      receipt_id: data.id,
      sub_receipt_id: 0
    }
    if(this.props.column) {
      qr = {
        receipt_id: data.id,
        sub_receipt_id: this.props.item.id
      }
    }

    return (
      <View style={{marginBottom: Metrics.section.xl}}>
        <View style={[styles.orderItem, { marginTop: Metrics.section.large }]}>
          <Text style={styles.totalLeft}>Subtotal</Text>
          <Text style={styles.totalRight}>{currencyFormat(data.sub_total)}</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={styles.totalLeft}>Tax</Text>
          <Text style={styles.totalRight}>{data.tax}</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={[styles.totalLeft, { fontWeight: '800' }]}>Total</Text>
          <Text style={[styles.totalRight, { fontWeight: '800' }]}>{currencyFormat(data.total)}</Text>
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
            style={{ width: Metrics.images.sQR, height: Metrics.images.sQR }}
          /> */}
          <QRCode
            value={JSON.stringify(qr)}
            size={Metrics.images.sQR}
            bgColor={Colors.black}
            fgColor={Colors.white}/>
          <Text style={styles.qrText}>Scan to pay</Text>
        </View>        
      </View>
    )
  }

  renderHeader = () => {
    let data = this.props.data.employee
    return (
      <View style={styles.paperHeaderContainer}>
        <Text style={styles.textResName}>{data.biz_name}</Text>
        <Text style={styles.textAddressName}>{data.biz_phone}</Text>
        <Text style={styles.textAddressName}>{data.biz_address}</Text>
        {/* <Text style={styles.textAddressName}>Denver, CO 80204</Text> */}
        <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }}/>
        {
          this.props.column && 
            <Text style={styles.splitText}>SPLIT CHECK</Text>
        }
        <View style={[styles.orderItem, { marginVertical: Metrics.section.tiny }]}>
          <Text style={[styles.totalLeft, { fontWeight: '800'} ]}>Receipt No</Text>
          <Text style={[styles.totalRight, { width: null, fontWeight: '800' }]}>
            {this.props.data.receipt.id}
            { this.props.column && '-'+this.props.item.id}
          </Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.payContainer}>
        <FlatList
          style={styles.paperContainer}
          showsVerticalScrollIndicator={false}
          data={this.props.data.orders}
          listKey={(item, index) => index.toString()}
          renderItem={this.subRenderItem}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
        <TouchableOpacity style={styles.zoomContainer} onPress={() => this.props.onClickPaperHandle()}>
          <Icon name="search-plus" style={styles.zoomOutIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}
