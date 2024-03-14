import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Details from '../components/home/Details'
import ClickableButton from '../components/home/ClickableButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, BackHandler } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import UsersToggle from '../components/home/UsersToggle'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isHead, setIsHead] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigateToPayment = () => {
    navigation.navigate('Payment')
  }

  const navigateToViewUser = () => {
    navigation.navigate('View User')
  }

  const navigateToDeleteUser = () => {
    navigation.navigate('Delete User')
  }

  const handleLogout = () => {
    auth().signOut().then(() => {
      console.log('User signed out!');
      navigation.navigate('Login');
    });
  }

  useEffect(() => {
    const unsubscribe = firestore().collection('User').doc(auth().currentUser.uid)
      .onSnapshot(snapshot => {
        const userData = snapshot.data();
        if (userData) {
          setUserData(userData);
          if(userData && userData.head === true) {
            setIsHead(true);
          } else {
            setIsHead(false);
          }
        } else {
          setUserData(null);
        }
      });

    return () => unsubscribe();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit',
          'Do you want to exit the app?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Exit',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          { cancelable: false }
        );
        return true;
      };

      // Add event listener for hardware back button
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove event listener when component is unmounted
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>This is Your Home Page !!!</Text>
          {userData && <Details 
            userName={userData.firstName}
            familyName={userData.familyCode}
          />}
          <UsersToggle />
          <View style={styles.buttonContainer}>
            <ClickableButton title="Add an Expense" onPress={navigateToPayment} />
            <ClickableButton title="View all Users" onPress={navigateToViewUser} />
            {isHead && <ClickableButton title="Delete a User" onPress={navigateToDeleteUser} />}
            <ClickableButton title="Logout" onPress={handleLogout} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 20,
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20,
    color: 'black',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingVertical: 0,
    backgroundColor: '#ffb6c1',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
})
