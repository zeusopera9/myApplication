import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Alert } from 'react-native';
import React, { useState } from 'react';
import ClickableButton from '../components/home/ClickableButton';
import { useRealm } from '@realm/react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const verifyLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            // User authenticated successfully
            navigation.navigate('Home');
        } catch (error) {
            // Handle authentication errors
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                Alert.alert('Invalid Username or Password. Please try again.');
            } else {
                Alert.alert('An error occurred. Please try again later.');
                console.error(error);
            }
        }
    };

    const navigateToAddUser = () => {
        navigation.navigate('Add User');
    };

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
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.inputBox}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <ClickableButton title={"Login"} onPress={verifyLogin} />
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
    );
};

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
      },
      registerText: {
        color: 'blue',
        textDecorationLine: 'underline',
      }
})