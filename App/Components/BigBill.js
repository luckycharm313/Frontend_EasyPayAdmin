import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dash from 'react-native-dash'

import { Images, Metrics, Fonts } from '../Themes/'
import styles from './Styles/BigBillStyle'

export default class BigBill extends Component {

  subLargeRenderItem = (e) => {
    return (
      <View style={[styles.orderItem, { marginVertical: Metrics.section.tiny}]}>
        <Text style={[styles.orderLeft, { fontSize: Fonts.size.small}]}>1 horse beer</Text>
        <Text style={[styles.orderRight, {fontSize: Fonts.size.small}]}>9.00</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={[styles.paperContainer, { margin: Metrics.section.small }]}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <Text style={[styles.textResName, { textAlign: 'center', fontSize: Fonts.size.input}]}>Tom's Cafe</Text>
          <View style={[styles.paperHeaderContainer, { flexDirection: 'row', alignItems: 'center', marginTop: Metrics.section.small}]}>
            <Text style={[styles.textAddressName, { fontSize: Fonts.size.small, marginRight: Metrics.section.small }]}>(702)220-0000</Text>
            <Text style={[styles.textAddressName, { fontSize: Fonts.size.small, marginRight: Metrics.section.small }]}>111, your address</Text>
            <Text style={[styles.textAddressName, { fontSize: Fonts.size.small }]}>Denver, CO 80204</Text>
          </View>
          <Dash style={{ width: '100%', height:1, marginVertical: Metrics.mainVertical }}/>          
          {
            this.props.column && 
              <Text style={styles.splitText}>SPLIT CHECK</Text>
          }
          <View style={[styles.orderItem, { marginVertical: Metrics.section.small }]}>
            <Text style={[styles.totalLeft, { fontWeight: '800', fontSize: Fonts.size.medium} ]}>Receipt No</Text>
            <Text style={[styles.totalRight, { width: null, fontWeight: '800', fontSize: Fonts.size.medium }]}>0001</Text>
          </View>
          {
            !this.props.column &&
              <FlatList
                showsVerticalScrollIndicator={false}
                data={[1,2,3,1,1,1,52]}
                listKey={(item, index) => index.toString()}
                renderItem={this.subLargeRenderItem}
              />
          }        
          <View style={{marginBottom: Metrics.section.xl * 1.2}}>
            <View style={[styles.orderItem, { marginTop: Metrics.section.large }]}>
              <Text style={[styles.totalLeft, { fontSize: Fonts.size.medium}]}>Subtotal</Text>
              <Text style={[styles.totalRight, { fontSize: Fonts.size.medium}]}>14.00</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={[styles.totalLeft, { fontSize: Fonts.size.medium}]}>Tax</Text>
              <Text style={[styles.totalRight, { fontSize: Fonts.size.medium}]}>2.00</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={[styles.totalLeft, { fontWeight: '800', fontSize: Fonts.size.popular }]}>Total</Text>
              <Text style={[styles.totalRight, { fontWeight: '800', fontSize: Fonts.size.popular }]}>16.00</Text>
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
                style={{ width: Metrics.images.lQR, height: Metrics.images.lQR }}
              />
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
