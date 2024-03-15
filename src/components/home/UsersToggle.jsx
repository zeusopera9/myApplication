import React, { useState, useEffect } from 'react';
import { View, Text, Switch, ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const UsersToggle = () => {
    const [isEnabled, setIsEnabled] = useState(null); // Change initial state to null
    const [currentUserFamilyCode, setCurrentUserFamilyCode] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    // Function to toggle the switch and update Firestore
    const toggleSwitch = async () => {
        try {
            // Toggling the current state
            const updatedState = !isEnabled;
            setIsEnabled(updatedState);
    
            // Update Firestore with the new state
            await firestore().collection('FamilyCodes').doc(currentUserFamilyCode).update({
                allowJoining: updatedState
            });
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    // Fetch user's family code from Firestore
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

    // Function to fetch the state of the toggle button from Firestore
    useEffect(() => {
        const fetchToggleState = async () => {
            try {
                const docSnapshot = await firestore()
                .collection('FamilyCodes')
                .doc(currentUserFamilyCode)
                .get();

                if (docSnapshot.exists) {
                    const data = docSnapshot.data();
                    setIsEnabled(data.allowJoining); // Set the state based on Firestore data
                } else {
                    console.log('No matching document found!');
                    setIsEnabled(false); // Set default state when no matching document is found
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            } finally {
                setLoading(false); // Update loading state once fetching is complete
            }
        };

        if (currentUserFamilyCode) {
            fetchToggleState();
        }
    }, [currentUserFamilyCode]);

    // Render loading indicator if data is still being fetched
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Render toggle switch once data is fetched
    return (
        <View>
            <Text style={styles.toggleText}>Allow Users to Join your Family</Text>
            <View style={styles.toggleContainer}>
                <Switch 
                    trackColor={{false: '#FF0000', true: '#00FF00'}}
                    thumbColor={isEnabled ? '#000000' : '#000000'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
};

export default UsersToggle;

const styles = StyleSheet.create({
    toggleText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
    },
    toggleContainer: {
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
