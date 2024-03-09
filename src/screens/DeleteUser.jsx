import React, {useState, useEffect} from "react";
import { Text, View, Button, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const DeleteUser = () => {
    const navigation = useNavigation();
    const [selectedUserId, setSelectedUserId] = useState('');
    const [users, setUsers] = useState([]);
    const [currentUserFamilyCode, setCurrentUserFamilyCode] = useState(null);

    useEffect(() => {
      const fetchFamilyCode = async () => {
        try {
          const userDoc = await firestore().collection('User').doc(auth().currentUser.uid).get();
          const userData = userDoc.data();
          if (userData) {
            setCurrentUserFamilyCode(userData.familyCode);
          }
        } catch (error) {
          console.error('Error fetching family code:', error);
        }
      };
  
      fetchFamilyCode();
    }, []);
  
    useEffect(() => {
      if (currentUserFamilyCode) {
        const fetchUsers = async () => {
          try {
            const querySnapshot = await firestore()
              .collection('User')
              .where('familyCode', '==', currentUserFamilyCode)
              .get();
            const fetchedUsers = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setUsers(fetchedUsers);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
  
        fetchUsers();
      }
    }, [currentUserFamilyCode]);

    const deleteUser = async () => {
      try {
          await firestore().collection('User').doc(selectedUserId).delete();
          console.log(`User with ID ${selectedUserId} has been deleted`);
          setSelectedUserId('');
          navigation.navigate("Home");
      } catch (error) {
          console.error("Error Deleting User: ", error);
      }
    };

    return(
        <View style={styles.container}>
          <View style={styles.deleteUserForm}>
            <Text style={styles.title}>Delete User</Text>
            {users.length === 0 ? (
                <Text>No Users to Delete !!!</Text>
            ) : (
                <View style={styles.userForm}>
                    <Picker
                        selectedValue={selectedUserId}
                        onValueChange={(itemValue, itemIndex) => setSelectedUserId(itemValue)}
                    >
                        <Picker.Item label="Select User" value="" />
                        {users.map(user => (
                        <Picker.Item key={user.id} label={user.firstName + ' ' + user.lastName} value={user.id} />
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