import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterPaymentForm from '../components/RegisterPaymentForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import PaymentButton from '../components/PaymentButton'

const PaymentScreen = ({navigation}) => {
  const onPress = () => {
    navigation.navigate("Home")
    // Change this to payment confirmation
    // After adding Verification feature
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
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
    padding: 8,
    paddingVertical: 0,
    marginTop: 15,
  },
})