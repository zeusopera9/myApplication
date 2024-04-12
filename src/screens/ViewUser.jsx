import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ViewUser = () => {

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Users</Text>
      <View style={styles.viewUserContainer}>
        {users.length === 0 ?
          (<Text>No Users Found !!!</Text>
          ) : (
            users.map(user => (
              <View key={user.id}>
                <Text style={styles.viewUserText}>{user.firstName} {user.lastName}{"\n"}</Text>
              </View>
            ))
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3D3BD'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  viewUserContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    width: 350,
    margin: 10,
    backgroundColor: '#FCFAF9',
  },
  viewUserText: {
    color: 'black',
    fontSize: 16,
  }
});

export default ViewUser;
