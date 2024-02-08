import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>
            Welcome {props.userName},{'\n'}
            Family: {props.familyName}
        </Text>
        <Text style={styles.descriptionText}>
            This app has been made to allow you to register your payments to populate the database.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        // borderColor: 'black',
        // borderWidth: 2,
        paddingVertical: 0,
    },
    container: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        paddingVertical: 10,
    },
    welcomeText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
    },
})

export default Details