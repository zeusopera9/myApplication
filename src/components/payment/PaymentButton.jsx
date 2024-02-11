import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ClickableButton from '../home/ClickableButton'

const PaymentButton = ({onPress}) => {
  return (
    <View>
      {/* <Text>PaymentButton</Text> */}
      <View style={styles.buttonContainer} >
        <ClickableButton title="Register Payment" onPress={onPress} />
      </View>
    </View>
  )
}

export default PaymentButton

const styles = StyleSheet.create({
  paymentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  paymentText: {
    color: 'white',
  },

})