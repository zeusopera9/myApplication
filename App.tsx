import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import CreateUser from './src/screens/CreateUser'
import ViewUser from './src/screens/ViewUser'
import DeleteUser from './src/screens/DeleteUser'
import LoginScreen from './src/screens/LoginScreen'
import clearSessionCookie from './src/utils/sessionUtils'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page', headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{clearSessionCookie: clearSessionCookie}} options={{ title: 'Home Page', headerShown: false}} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment Registration Page', headerShown: false}} />
        <Stack.Screen name="Add User" component={CreateUser} options={{ title: 'Register a User', headerShown: false}} />
        <Stack.Screen name="View User" component={ViewUser} options={{ title: 'View existing Users', headerShown: false}} />
        <Stack.Screen name="Delete User" component={DeleteUser} options={{ title: 'Delete existing Users', headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;