import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ExpenseVerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Verification</Text>
      <View style={styles.smsContainer}>
        <Text>
            Text in Box
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 20,
    backgroundColor: '#F3D3BD',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
  },
  smsContainer: {
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    backgroundColor: '#FCFAF9',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  }
});

export default ExpenseVerificationScreen;
