import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterPaymentForm from '../components/payment/RegisterPaymentForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import PaymentButton from '../components/payment/PaymentButton'

const PaymentScreen = ({navigation}) => {
  const onPress = () => {
    navigation.navigate("Home")
    // Change this to payment confirmation
    // After adding Verification feature
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.paymentComponentsContainer}>
        <RegisterPaymentForm />
        <PaymentButton onPress={onPress} />
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingVertical: 0,
    marginTop: 5,
  },
  paymentComponentsContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    width: 350,
    margin: 10,
  }
})