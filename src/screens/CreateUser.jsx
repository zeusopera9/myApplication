import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Touchable, TouchableOpacity } from 'react-native';
import { useRealm } from '@realm/react';
import User from '../models/User';
import ClickableButton from '../components/home/ClickableButton';

const CreateUser = ({navigation}) => {
  const realm = useRealm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [familyCode, setFamilyCode] = useState('');

  const createUser = () => {
    realm.write(() => {
      realm.create('User', {
        id: Date.now().toString(),
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
        familyCode: familyCode, // Include familyCode in the user object
      });
    });
    // Clear input fields after creating user
    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
    setEmail('');
    setFamilyCode('');
    navigation.navigate('Login')
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
          <ClickableButton onPress={createUser} title="Create User"/>
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
  touchableOpacity: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  }
});

export default CreateUser;
