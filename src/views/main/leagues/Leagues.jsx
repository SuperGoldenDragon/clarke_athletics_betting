import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native'; // Import StatusBar
import LeaguesHeader from '../../../assets/images/leagues-header.png';
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import leagueIcon from '../../../assets/images/icons/league_1.png';
import league_CA from "../../../assets/images/logos/league_CA.jpg";
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import global from '../../../styles/global';
import auth from '@react-native-firebase/auth';
import LeaguesMatchTypeBlock from './LeaguesMatchTypeBlock';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-linear-gradient';
const Leagues = () => {

    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const onToggleSidebar = () => {
        navigation.openDrawer();
    };
    return (
        <View style={styles.container}>
            <View style={[global.defaultPagePadding, global.defaultAppbarPadding, styles.appbar]}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={onToggleSidebar}>
                        <View style={{ padding: 7, marginRight: 5 }}>
                            <Image source={SidebarIcon} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>{auth().currentUser.displayName}</Text>
                    <View style={{ paddingVertical: 5, flexDirection: "row" }}>
                        <View style={{ marginRight: 7 }}>
                            <Text style={{ color: "white", textAlign: "right", fontSize: 8 }}>BALANCE</Text>
                            <Text style={{ color: "white", textAlign: "right", fontWeight: "600", marginTop: -3, fontSize: 12 }}>12.56</Text>
                        </View>
                        <View style={{ padding: 5, backgroundColor: '#333', borderRadius: 4, marginRight: 10, borderWidth: 2, borderColor: '#555', alignSelf: "flex-start" }}>
                            <Image source={WalletIcon} />
                        </View>
                        {/* <View style={{ paddingVertical: 3 }}>
                            <Image source={SearchIcon} />
                        </View> */}
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <View style={{}}>
                    <Image source={league_CA} style={{ width: 100, height: 100 }} />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                {/* <View style={{
                    flexDirection: 'row', justifyContent: 'center', margin: 20, height: '80%'
                }} > */}
                <View style={{ flex: 1, paddingHorizontal: 2 }}>
                    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="Standings">
                        <Tab.Screen name="Standings" component={WeeklyHistoryTab} />
                        <Tab.Screen name="Scoreboard" component={WeeklyHistoryTab} />
                        <Tab.Screen name="Badges" component={WeeklyHistoryTab} />
                        <Tab.Screen name="Parlay" component={WeeklyHistoryTab} />
                    </Tab.Navigator>
                </View>
            </View>
        </View>
    );
};
const WeeklyHistoryTab = () => {
    const tableData = [
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' },
    ];
    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            <View style={{ flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', paddingHorizontal: 2, }}>
                <View style={{ borderRightWidth: 1, backgroundColor: '#F7D068', borderColor: '#B9B9B9', height: 'auto', width: '50%' }}>
                    <TouchableOpacity >
                        <Text style={{ textAlign: 'center', fontSize: 15, paddingVertical: 3, color: 'black' }}>Field</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderLeftWidth: 1, backgroundColor: '#F7D068', borderColor: '#B9B9B9', height: 'auto', width: '50%' }}>
                    <TouchableOpacity >
                        <Text style={{ textAlign: 'center', fontSize: 15, paddingVertical: 3, color: 'black' }}>H2H</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {tableData.map((rowData, index) => (
                    <View key={index} style={styles.row}>

                    </View>
                ))}
            </View>
        </View>
    );
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <LinearGradient
            colors={['#22252A', '#4B4B4B']}
            start={{ x: 0, y: 0 }} // Vertical gradient, start from top
            end={{ x: 0, y: 1 }} // Vertical gradient, end at bottom
            style={{
                flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
                //  borderRadius: 5
            }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <Text style={{ color: isFocused ? '#F7D068' : 'white', paddingVertical: 10, borderBottomColor: "#F7D068", borderBottomWidth: isFocused ? 2 : 0 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    appbar: {
        backgroundColor: "#22252A"
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

export default Leagues;