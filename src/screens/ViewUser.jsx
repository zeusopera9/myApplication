import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@realm/react';
import User from '../models/User';

const ViewUser = () => {

  const users = useQuery(User);

  const sortedUsers = useQuery(User, users => {
    return users.sorted('firstName', false);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Users</Text>
      <View style={styles.viewUserContainer}>
        {sortedUsers.length === 0 ?
          (<Text>No Users Found !!!</Text>): (
            sortedUsers.map(user => (
              <View key={user.id}>
                <Text style={styles.viewUserText}>{user.firstName}, User ID: {user.id}</Text>
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
    backgroundColor: '#ffb6c1'
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
    backgroundColor: '#e0ffff',
  },
  viewUserText: {
    color: 'black',
    fontSize: 16,
  }
});

export default ViewUser;
