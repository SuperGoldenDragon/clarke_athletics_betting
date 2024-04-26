import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../components/DefaultButton';

const SelectLoginMode = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Select login</Text>
            <DefaultButton>Continu With Gmail</DefaultButton>
            <DefaultButton onPress={() => { navigation.navigate("Login") }}>Continue with Email</DefaultButton>
        </View>
    );
};

export default SelectLoginMode;