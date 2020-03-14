import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Header from "../Components/Header"
// Styles
import { Metrics } from '../Themes/'
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={[styles.mainPaddingContainer , styles.vCenterContainer]}>
          <Button
            title='Process Payment'
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={[styles.buttonContainerStyle, { marginVertical: Metrics.section.xl }]}
            onPress={() => this.props.navigation.navigate('ProcessReceiptScreen')}
          />
          <Button
            title='Payment Status'
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={[styles.buttonContainerStyle, { marginVertical: Metrics.section.xl }]}
            onPress={() => this.props.navigation.navigate('StatusScreen')}
          />
          <Button
            title='Issue Refund'
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={[styles.buttonContainerStyle, { marginVertical: Metrics.section.xl }]}
            onPress={() => this.props.navigation.navigate('RefundScreen')}
          />
          <Button
            title='Records'
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={[styles.buttonContainerStyle, { marginVertical: Metrics.section.xl }]}
            onPress={() => this.props.navigation.navigate('StatusScreen')}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
