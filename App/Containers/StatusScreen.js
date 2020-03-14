import React, { Component } from 'react'
import { SafeAreaView, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'

import Header from "../Components/Header"
import Input from "../Components/Input"
// Styles
import { Colors } from '../Themes/'
import styles from './Styles/StatusScreenStyle'

class StatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tableHead: ['Date', 'Time', 'Receipt No', 'Payment Status'],
      tableData: [
        ['Mar.10 2020', '12:00pm', '4382999900', 0],
        ['Mar.10 2020', '12:00pm', '4382999900', 1],
        ['Mar.10 2020', '12:00pm', '4382999900', 2],
        ['Mar.10 2020', '12:00pm', '4382999900', 1],
        ['Mar.10 2020', '12:00pm', '4382999900', 0],
        ['Mar.10 2020', '12:00pm', '4382999900', 0],
      ]
    }
  }
  element = (data, index) =>
  {
    var text = ''
    var color = ''
    if( data === 0 ) {
      text = 'Pending'
      color = Colors.pending
    } else if ( data === 1 ) {
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

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header leftButton='back' navigation={this.props.navigation}/>
        <View style={styles.mainPaddingContainer}>
          <Input
            leftIcon={
              <Icon name="search" style={styles.searchIcon} />              
            }
            onChangeText={(search)=>this.setState({search})}
            placeholder='Search for transaction with Employee Id, name,date, receipt number'
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

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusScreen)
