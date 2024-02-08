import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const PaymentButton = ({onPress}) => {
  return (
    <View>
      {/* <Text>PaymentButton</Text> */}
      <View >
      <Pressable style={styles.paymentButton} onPress={onPress} >
        <Text style={styles.paymentText}>Proceed to Register Payment</Text>
      </Pressable>
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
  }

})