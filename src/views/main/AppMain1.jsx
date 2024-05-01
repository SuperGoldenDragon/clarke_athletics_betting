import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Custom Sidebar Component
const Sidebar = ({ navigation }) => {
    return (
        <View style={styles.sidebar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

// Screen Components
const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>
        </View>
    );
};

const SettingsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Settings Screen</Text>
        </View>
    );
};

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer independent>
            <Drawer.Navigator
                drawerContent={(props) => <Sidebar {...props} />}
                drawerStyle={styles.drawer}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawer: {
        width: '80%',
    },
    sidebar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;