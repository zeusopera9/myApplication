import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const RegisterPaymentForm = () => {
  const [category, setCategory] = useState('Others');
  return (
    <View style={StyleSheet.safeArea}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Register a Payment Here</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Enter Details</Text>


        <Text style={styles.inputLabel}>Amount</Text>
        <TextInput placeholder='Enter Amount Here' style={styles.inputBox} />

        <Text style={styles.inputLabel}>Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={currentCategory => setCategory(currentCategory)}
        >
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Groceries" value="Groceries" />
          <Picker.Item label="Health Care" value="Health Care" />
          <Picker.Item label="Housing and Bills" value="Housing and Bills" />
          <Picker.Item label="Personal Care" value="Personal Care" />
          <Picker.Item label="Transportation Care" value="Transportation Cost" />
        </Picker>
        <Text>Selected: {category}</Text>
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
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    marginBottom: 40,
  },
  formContainer: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    margin: 0,
    padding: 30,
  },
  formHeading: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    // borderColor: 'black',
    // borderWidth: 2,
    paddingVertical: 0,
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
    width: 200, // Adjust width as needed
  }
})