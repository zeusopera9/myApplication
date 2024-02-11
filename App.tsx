import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import CreateUser from './src/screens/CreateUser'
import ViewUser from './src/screens/ViewUser'
import DeleteUser from './src/screens/DeleteUser'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page'}} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment Registration Page'}} />
        <Stack.Screen name="Add User" component={CreateUser} options={{ title: 'Create a New User'}} />
        <Stack.Screen name="View User" component={ViewUser} options={{ title: 'View existing Users'}} />
        <Stack.Screen name="Delete User" component={DeleteUser} options={{ title: 'Delete existing Users'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;