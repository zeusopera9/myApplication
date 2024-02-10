import React, {useState} from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { RealmProvider, useRealm } from "@realm/react";
import User from "../models/User";

const DeleteUser = () => {
    const realm = useRealm();
    const [userId, setUserId] = useState('')

    const deleteUser = () => {
        realm.write(() => {
            const UserToDelete = realm.objectForPrimaryKey('User', userId);
            if(UserToDelete) {
                realm.delete(UserToDelete);
                console.log("User with ID ${userId} has been deleted");
            } else {
                console.log("User with ID ${userId} not found");
            }
        });
        setUserId('');
    };

    return(
        <View>
            <Text>Delete User</Text>

            <TextInput
                onChangeText={setUserId}
                value={userId}
                placeholder="User ID to delete"
            />

            <Button
                title="Delete User"
                onPress={deleteUser}
            />
        </View>
    );
};

export default DeleteUser;