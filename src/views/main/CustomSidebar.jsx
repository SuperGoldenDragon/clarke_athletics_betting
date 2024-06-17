import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDrawer } from '../../components/DrawerContext';
const CustomSidebar = props => {
    const { drawerParams } = useDrawer();
    const { navigation, state } = props;
    const to = (route, params) => {
        navigation.navigate(route, params);
    };
    const parameter1 = drawerParams.param1;
    const parameter2 = drawerParams.param2;
    return (<View style={{ flex: 1, padding: 10 }}>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => to("My profile", { param1: parameter1, param2: parameter2 })}>
            <Text style={styles.button_text}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => to("Profile")}>
            <Text style={styles.button_text}>Pro settings</Text>
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