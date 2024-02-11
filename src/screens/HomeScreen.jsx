import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from '../components/home/Details'
import ClickableButton from '../components/home/ClickableButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({navigation}) => {
  const navigateToPayment = () => {
    navigation.navigate('Payment')
  }

  const navigateToAddUser = () => {
    navigation.navigate('Add User')
  }

  const navigateToViewUser = () => {
    navigation.navigate('View User')
  }

  const navigateToDeleteUser = () => {
    navigation.navigate('Delete User')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>This is Your Home Page !!!</Text>
          <Details 
            userName="Zaidali" 
            familyName="Merchant" 
          />
          <ClickableButton title="Add an Expense" onPress={navigateToPayment}/>
          <ClickableButton title="Add a User" onPress={navigateToAddUser}/>
          <ClickableButton title="View all Users" onPress={navigateToViewUser}/>
          <ClickableButton title="Delete a User" onPress={navigateToDeleteUser}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 20,
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
    color: 'black',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingVertical: 0,
    backgroundColor: '#ffb6c1',
  },
})