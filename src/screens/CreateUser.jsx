import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useRealm } from '@realm/react';
import User from '../models/User';

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
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Create User Screen</Text>
      <TextInput
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={setFamilyCode}
        value={familyCode}
        placeholder="Family Code"
      />

      <Button
        title="Create User"
        onPress={createUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CreateUser;
