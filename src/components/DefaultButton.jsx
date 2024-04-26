import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const DefaultButton = (props) => {

    const { children, onPress, style, ...rest } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[style || {}, styles.button]} {...rest}>{children}</Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#F7D068",
        color: "#3C3C3C",
        fontWeight: "400",
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 5,
        textAlign: "center",
        fontSize: 12
    }
});

export default DefaultButton;