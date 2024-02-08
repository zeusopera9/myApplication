import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const ClickableButton = ({onPress}) => {
  return (
    <View>
      <Button
        title="Add an Expense" onPress={onPress}
      />
    </View>
  )
}

export default ClickableButton

const styles = StyleSheet.create({})