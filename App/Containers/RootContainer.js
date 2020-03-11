import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import Spinkit from '../Components/Spinkit'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    let maybeSpinkit = null

    if (this.props.isLoading) {
      maybeSpinkit = <Spinkit style={{position: 'absolute'}} />
    }

    return (
      <View style={styles.applicationView}>
        {maybeSpinkit}
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />        
      </View>
    )
  }
}

const mapStateToProps = ({startup}) => {
  return {
    isLoading : startup.isLoading,
  }
}
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
