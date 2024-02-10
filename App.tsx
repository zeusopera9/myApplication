import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import CreateUser from './src/screens/CreateUser'
import Realm from "realm";
import ViewUser from './src/screens/ViewUser'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page'}} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment Registration Page'}} />
        <Stack.Screen name="Add User" component={CreateUser} options={{ title: 'Create a New User'}} />
        <Stack.Screen name="View Users" component={ViewUser} options={{ title: 'View existing Users'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;