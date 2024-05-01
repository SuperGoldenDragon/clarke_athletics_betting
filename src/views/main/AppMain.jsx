import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import NavigationContext from '../../components/NavigationContext';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomSidebar = props => {

    const { navigation, state } = props;

    return (<View style={{ flex: 1 }}>
        <Text>This is sidebar.</Text>
    </View>)
};

const AppMain = () => {
    const parentNavigation = useNavigation();

    const toParent = (route, params = {}) => {
        parentNavigation.navigate(route, params);
    };

    return (
        <NavigationContainer independent={true}>
            <NavigationContext.Provider value={{ parentNavigation, toParent }}>
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomSidebar {...props} />}>
                    <Drawer.Screen
                        name="Main"
                        component={BottomNavigation}
                        options={{
                            headerShown: false
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContext.Provider>
        </NavigationContainer>);
};

export default AppMain;