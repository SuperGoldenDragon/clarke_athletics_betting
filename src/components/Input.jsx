import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({ text, setText }) => {
    return (
        <TextInput
            value={text}
            onChangeText={setText}
            style={styles.textInput}
            placeholder="Enter message"
            placeholderTextColor="#F3F6F6"
        />
    );
};
const styles = StyleSheet.create({
    textInput: {
        width: '60%',
        height: 20,
        fontSize: 10,
        margin: 0,
        padding: 12,
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 17,
        letterSpacing: 0,
        color: '#ffa600',
        fontWeight: '600',
        borderRadius: 500,
        alignItems: 'center',
        backgroundColor: '#282a2d',
    },
});

export default Input;