import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import ClickableButton from '../components/home/ClickableButton'
import Hyperlink from 'react-native-hyperlink'


const LoginScreen = ({navigation}) => {
    const navigateToAddUser = () => {
        navigation.navigate('Add User')
      }
    return (
    <View style={styles.container}>
        <View style={styles.loginFormContainer}>
            <View>
                <Text style={styles.title}>Login Screen</Text>
            </View>
            <View>
                <TextInput 
                    placeholder='Email'
                    style={styles.inputBox}
                />

                <TextInput 
                    placeholder='Password'
                    style={styles.inputBox}
                    secureTextEntry={true}
                />

            </View>
            <ClickableButton title={"Login"}/>
            <View>
                <Text>
                    New Here ? Let's Create an Account !
                </Text>
                <TouchableWithoutFeedback onPress={navigateToAddUser}>
                    <View style={styles.registerTextContainer}>
                    <Text style={styles.registerText}>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb6c1'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
      },
      inputBox: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 200,
        margin: 10,
      },
      loginFormContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 40,
        width: 350,
        margin: 10,
        backgroundColor: '#e0ffff',
      },
      registerTextContainer: {
        alignItems: 'center',
        margin: 15,
      }
})