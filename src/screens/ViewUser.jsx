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
      {sortedUsers.map(user => (
        <View key={user.id}>
          <Text>{user.firstName} {user.lastName}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ViewUser;
