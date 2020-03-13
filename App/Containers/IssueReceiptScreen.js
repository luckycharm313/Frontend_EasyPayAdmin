import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Header from '../Components/Header'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/IssueReceiptScreenStyle'

class IssueReceiptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header leftButton='back' />
        <View style={[styles.mainPaddingContainer , {}]}>       
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

export default connect(mapStateToProps, mapDispatchToProps)(IssueReceiptScreen)
