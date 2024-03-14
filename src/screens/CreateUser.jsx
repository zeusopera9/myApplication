import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import ClickableButton from '../components/home/ClickableButton';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const CreateUser = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [familyCode, setFamilyCode] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchToggleState = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('FamilyCodes')
          .where('familyCode', '==', familyCode)
          .get();

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setIsEnabled(data.allowJoining); // Set the state based on Firestore data
          if(!isEnabled) {
            // console.log('Not Allowed to join. Contact Family Head');
            Alert.alert(
              'Joining Disabled',
              'Joining this family is currently disabled. Please contact Family Head',
              [{ text: 'OK' }]
            );
          }
        } else {
          console.log('Family does not exist');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        setError('Error fetching document');
      }
    };

    if (familyCode) {
      fetchToggleState();
    }
  }, [familyCode]);

  const createUser = async () => {
    try {
      setLoading(true);
      if (isEnabled) {
        // Create user in Firebase Authentication
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        
        // Store user data in Firestore
        await firestore().collection('User').doc(userCredential.user.uid).set({
          firstName,
          lastName,
          username,
          password,
          email,
          familyCode,
          head: false,
        });
  
        // Clear input fields after creating user
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setEmail('');
        setFamilyCode('');
        
        // Navigate to login screen
        navigation.navigate('Login');
        
        console.log('User account created & signed in!');
      }
    } catch (error) {
      // Handle error
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.createUserContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create a User</Text>
        </View>
        <View>
          <TextInput
            onChangeText={setFirstName}
            value={firstName}
            style={styles.inputBox}
            placeholder="First Name"
          />
          <TextInput
            onChangeText={setLastName}
            value={lastName}
            style={styles.inputBox}
            placeholder="Last Name"
          />
          <TextInput
            onChangeText={setUsername}
            value={username}
            style={styles.inputBox}
            placeholder="Username"
          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            onChangeText={setEmail}
            value={email}
            style={styles.inputBox}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={setFamilyCode}
            value={familyCode}
            style={styles.inputBox}
            placeholder="Family Code"
          />
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <ClickableButton onPress={createUser} title="Create User"/>
          )}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingVertical: 0,
    backgroundColor: '#ffb6c1',
  },
  createUserContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 40,
    width: 350,
    margin: 10,
    backgroundColor: '#e0ffff',
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
  errorText: {
    color: 'red',
    marginTop: 10,
  }
});

export default CreateUser;
