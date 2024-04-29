import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const DefaultButton = (props) => {

    const { children, onPress, style, ...rest } = props;

    let buttonStyle = [styles.button];
    if (Array.isArray(style)) {
        buttonStyle = buttonStyle.concat(style);
    } else {
        buttonStyle.push(style);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle} {...rest}>
            {children}
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#F7D068",
        color: "#3C3C3C",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10
    }
});

export default DefaultButton;