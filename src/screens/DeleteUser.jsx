import React, {useState, useEffect} from "react";
import { Picker } from "@react-native-picker/picker";
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { RealmProvider, useRealm } from "@realm/react";
import User from "../models/User";

const DeleteUser = () => {
    const navigation = useNavigation();
    const realm = useRealm();
    const [selectedUserId, setSelectedUserId] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const allUsers = await realm.objects('User');
          setUsers(allUsers.map(user => ({ id: user.id, name: user.firstName + ' ' + user.lastName })));
        };

        fetchData();
    }, []);

    const deleteUser = () => {
        realm.write(() => {
          const userToDelete = realm.objectForPrimaryKey('User', selectedUserId);
          if (userToDelete) {
            realm.delete(userToDelete);
            console.log(`User with ID ${selectedUserId} has been deleted`);
          } else {
            console.log(`User with ID ${selectedUserId} not found`);
          }
        });
        setSelectedUserId('');
        navigation.navigate("Home");
      };

    return(
        <View style={styles.container}>
          <View style={styles.deleteUserForm}>

            <Text style={styles.title}>Delete User</Text>

            {users.length === 0 ? (
                <Text>No Users to Delete !!!</Text>
            ) : 
            (
                <View style={styles.userForm}>
                    <Picker
                        selectedValue={selectedUserId}
                        onValueChange={(itemValue, itemIndex) => setSelectedUserId(itemValue)}
                    >
                        <Picker.Item label="Select User" value="" />
                        {users.map(user => (
                        <Picker.Item key={user.id} label={user.name} value={user.id} />
                        ))}
                    </Picker>
                    <Button
                        title="Delete User"
                        onPress={deleteUser}
                    />
                </View>
            )}
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffb6c1',
    },
    title: {
      fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    },
    deleteUserForm: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      padding: 40,
      width: 350,
      margin: 10,
      backgroundColor: '#e0ffff',
    },
    userForm: {
      width: 300,
    }
  });

export default DeleteUser;