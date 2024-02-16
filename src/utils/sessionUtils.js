import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to clear session cookie
const clearSessionCookie = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error('Error clearing session cookie', error);
  }
};

export default clearSessionCookie;