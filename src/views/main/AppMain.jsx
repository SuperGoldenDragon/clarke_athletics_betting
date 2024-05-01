import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
const Drawer = createDrawerNavigator();

const CustomSidebar = props => {

    const { navigation, state } = props;

    return (<View style={{ flex: 1 }}>
        <Text>This is sidebar.</Text>
    </View>)
};

const AppMain = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomSidebar {...props} />}>
                <Drawer.Screen
                    name="Main"
                    component={BottomNavigation}
                    options={{
                        headerShown: false
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>);
};

export default AppMain;