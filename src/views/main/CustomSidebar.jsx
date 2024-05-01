import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomSidebar = props => {

    const { navigation, state } = props;

    const to = (route) => {
        navigation.navigate(route);
    };

    return (<View style={{ flex: 1, padding: 10 }}>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => to("Profile")}>
            <Text style={styles.button_text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => to("History")}>
            <Text style={styles.button_text}>History</Text>
        </TouchableOpacity>
    </View>)
};

const styles = StyleSheet.create({
    button_text: {
        paddingVertical: 5,
        textAlign: "center",
        backgroundColor: "#ddd",
        borderRadius: 7
    }
});

export default CustomSidebar;