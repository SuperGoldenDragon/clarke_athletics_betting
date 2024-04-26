import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../components/DefaultButton';

const Login = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Login Page</Text>
            <DefaultButton onPress={() => navigation.navigate("Main")}>Login</DefaultButton>
            <DefaultButton onPress={() => navigation.navigate("Sign up")}>Sign up</DefaultButton>
        </View>
    );
};

export default Login;