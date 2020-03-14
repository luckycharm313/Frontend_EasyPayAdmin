import React, { Component } from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dash from 'react-native-dash'

import { Images, Metrics } from '../Themes/'
import styles from './Styles/SmallBillStyle'
export default class SmallBill extends Component {

  subRenderItem = (e) => {
    if(this.props.column) return null
    return (
      <View style={styles.orderItem}>
        <Text style={styles.orderLeft}>1 horse beer</Text>
        <Text style={styles.orderRight}>9.00</Text>
      </View>
    )
  }

  renderFooter = () => {
    return (
      <View style={{marginBottom: Metrics.section.large}}>
        <View style={[styles.orderItem, { marginTop: Metrics.section.large }]}>
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
        {
          this.props.column &&
            <View>
              <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }}/>
              <Text style={styles.splitText}>PAYMENT ONE</Text>
              <Text style={styles.splitCostText}>$14.5</Text>
            </View>
        }
        <View style={styles.qrContainer}>
          <Image
            source={Images.qr}
            style={{ width: Metrics.images.sQR, height: Metrics.images.sQR }}
          />
          <Text style={styles.qrText}>Scan to pay</Text>
        </View>        
      </View>
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.paperHeaderContainer}>
        <Text style={styles.textResName}>Tom's Cafe</Text>
        <Text style={styles.textAddressName}>(702)220-0000</Text>
        <Text style={styles.textAddressName}>111, your address</Text>
        <Text style={styles.textAddressName}>Denver, CO 80204</Text>
        <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }}/>
        {
          this.props.column && 
            <Text style={styles.splitText}>SPLIT CHECK</Text>
        }
        <View style={[styles.orderItem, { marginVertical: Metrics.section.tiny }]}>
          <Text style={[styles.totalLeft, { fontWeight: '800'} ]}>No</Text>
          <Text style={[styles.totalRight, { width: null, fontWeight: '800' }]}>0001</Text>
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
          data={[1,2,3,1,1,1,52,2,2,2,2]}
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
