import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/InputStyle'
import { Colors } from '../Themes'

export default class Input extends Component {

  render () {
    return (
      <View style={[styles.inputContainer, this.props.inputContainer]}>
        {/* label view  */}
        <View style={[styles.inputWrapper, this.props.inputWrapper]}>
          { this.props.leftIcon && this.props.leftIcon }
          <TextInput
            style={[styles.input, this.props.textStyle]}
            onChangeText={this.props.onChangeText}
            secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
            autoFocus={this.props.autoFocus ? this.props.autoFocus : false }
            placeholder={this.props.placeholder ? this.props.placeholder : ''}
            placeholderTextColor={this.props.textHintColor ? this.props.textHintColor : Colors.textHintColor}
            defaultValue={this.props.defaultValue ? this.props.defaultValue : ''}
            underlineColorAndroid = {Colors.transparent}
            autoCapitalize = 'none'
            autoCorrect = {false}
            returnKeyType = 'go'
            keyboardType={this.props.keyboardType && this.props.keyboardType}
            maxLength={this.props.maxLength && this.props.maxLength}
            onFocus={this.props.onFocus}
            value={this.props.value}            
          />
          { this.props.rightIcon && this.props.rightIcon }
        </View>				
			</View>
    )
  }
}
