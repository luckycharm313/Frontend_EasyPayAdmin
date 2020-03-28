import React, { Component } from 'react'
import { SafeAreaView, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'
import moment from 'moment'

import Header from "../Components/Header"
import Input from "../Components/Input"

import ReceiptAction from '../Redux/ReceiptRedux'

// Styles
import { Colors } from '../Themes/'
import styles from './Styles/StatusScreenStyle'

class StatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tableHead: ['Date', 'Time', 'Receipt No', 'Payment Status'],
      tableData: [],
      tableTempData: [],
    }
  }

  componentDidMount() {
    var params = {
      limit: 20
    }
    this.props.loadHistory(params);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoading !== this.props.isLoading && nextProps.isLoading === false){
      var tableData = []
      nextProps.receiptList.forEach(element => {
        var _date = moment.unix(element.paid_date).format('MMM DD YYYY')
        var _time = moment.unix(element.paid_date).format('HH : mm A ')
        var _no = ''
        if(element.is_sub_receipt === 1) {
          _no = element.p_id + '-' + element.id
        } else {
          _no = element.id
        }

        tableData.push([
          _date, _time, _no, element.status
        ])
      });
      console.log({tableData})
      this.setState({tableData, tableTempData: tableData})
    }
  }

  element = (data, index) =>
  {
    var text = ''
    var color = ''
    if( data === 0 ) {
      text = 'Pending'
      color = Colors.pending
    } else if ( data === 2 ) {
      text = 'Declined'
      color = Colors.declined
    } else {
      text = 'Success'
      color = Colors.success
    }

    return (
      <View style={styles.statusCell}>
        <Icon name="circle" style={[styles.rowIcon, {color} ]} />
        <Text style={styles.rowText}>{text}</Text>
      </View>
    )
  }

  onSearchHandle = ( search ) => {
    
    var temp = this.state.tableTempData
    var newArray = temp.filter(function (el) {
      return el[2].toString().search(search) > -1 ;
    });
    this.setState({ search, tableData: newArray });
    // this.props.searchHistory({ search, limit: 20 })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header leftButton='back' navigation={this.props.navigation}/>
        <View style={styles.mainPaddingContainer}>
          <Input
            leftIcon={
              <Icon name="search" style={styles.searchIcon} />              
            }
            onChangeText={(search)=> this.onSearchHandle( search )}
            placeholder='Search for transaction with receipt number'
            value={this.state.search} />
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={this.state.tableHead} style={styles.tableHead} textStyle={styles.tableText} />            
          </Table>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.tableContainer}>
            <Table borderStyle={{borderColor: 'transparent'}}>
              {/* <Row data={this.state.tableHead} style={styles.tableHead} textStyle={styles.tableText} /> */}
              {
                this.state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.tableRow}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 3 ? this.element(cellData, index) : cellData} textStyle={styles.rowText}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({receipt}) => {
  return {
    receiptList: receipt.receiptList,
    isLoading: receipt.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHistory: (params) => dispatch(ReceiptAction.loadHistory(params)),
    searchHistory: (params) => dispatch(ReceiptAction.searchHistory(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusScreen)
