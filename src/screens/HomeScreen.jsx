import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from '../components/Details'
import ClickableButton from '../components/ClickableButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Payment')
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
          <ClickableButton style={styles.containerButton} onPress={onPressHandler}/>
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
    // borderColor: 'black',
    // borderWidth: 2,
    paddingVertical: 0,
},
  containerButton: {
    
},
})