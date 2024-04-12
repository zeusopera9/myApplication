import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const ClickableButton = ({onPress, title}) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity 
        onPress={onPress}
        style={styles.touchableOpacity}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ClickableButton

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  touchableOpacity: {
    backgroundColor: '#333333',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    padding: 8,
    fontSize: 16,
    color: 'white',
  }
})