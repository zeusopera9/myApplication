import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { useNavigation } from '@react-navigation/native';

const RegisterPaymentForm = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('Please Select Category');
  const [amount, setAmount] = useState('');
  const [isValidAmount, setIsValidAmount] = useState(true);

  const handleAmountChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const isValid = /^\d+$/.test(numericValue);
    setIsValidAmount(isValid);
    setAmount(numericValue);
  };

  const handleSubmit = async () => {
    if (!isValidAmount || category === 'Please Select Category') {
      return;
    }

    try {
      const uid = firebase.auth().currentUser.uid;
      const expenseRef = firestore().collection('Expense').doc(); // Create a new document reference with a unique ID
      await expenseRef.set({ // Set document data including UID
        uid: uid,
        amount: parseInt(amount),
        category: category,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        mode: 'Cash',
      });
      setAmount('');
      setCategory('Please Select Category');
      navigation.navigate("Home");
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Register a Payment</Text>
      </View>
      <View>
        <Text style={styles.formHeading}>Enter Details</Text>
        <Text style={styles.inputLabel}>Amount (₹)</Text>
        <TextInput 
          placeholder='Enter Amount Here' 
          style={[styles.inputBox, !isValidAmount && styles.inputBoxError]} 
          keyboardType='numeric'
          onChangeText={handleAmountChange}
          value={amount}
        />

        <Text style={styles.inputLabel}>Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={currentCategory => setCategory(currentCategory)}
          styles={styles.categoryBox}
        >
          {category === 'Please Select Category' && (
            <Picker.Item label="Please Select Category" value="Please Select Category" enabled={false} />
          )}
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Groceries" value="Groceries" />
          <Picker.Item label="Health Care" value="Health Care" />
          <Picker.Item label="Housing and Bills" value="Housing and Bills" />
          <Picker.Item label="Personal Care" value="Personal Care" />
          <Picker.Item label="Transportation Care" value="Transportation Cost" />
        </Picker>
        {category !== "Please Select Category" && (
          <Text>Selected: {category}</Text>
        )}
        <Button 
          title="Submit"
          color="#333333" 
          onPress={handleSubmit} 
        />
      </View>
    </View>
  )
}

export default RegisterPaymentForm

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  formHeading: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  safeArea: {
    justifyContent: 'center',
    padding: 8,
    paddingVertical: 0,
    width: 300,
},
  inputLabel: {
    fontSize: 14,
    color: 'black',
    marginTop: 15,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 200,
  },
})