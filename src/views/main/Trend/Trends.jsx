import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import SortIcon from '../../../assets/images/icons/sort-icon.png';
import downloadIcon from '../../../assets/images/logos/down.png';
import WIcon from '../../../assets/images/logos/WIcon.png';
import LIcon from '../../../assets/images/logos/LIcon.png';
import WLIcon from '../../../assets/images/logos/WLIcon.png';
import LWIcon from '../../../assets/images/logos/LWIcon.png';
import UploadIcon from '../../../assets/images/logos/UploadIcon.png';
import UploadMinus from '../../../assets/images/logos/UploadMinus.png';
import UpDownload from '../../../assets/images/logos/UpDownload.png';
import MinusUpload from '../../../assets/images/logos/MinusUpload.png';
import Minus from '../../../assets/images/logos/Minus.png';
import MinusDownloadIcon from '../../../assets/images/logos/MinusDownloadIcon.png';
import DownUpIcon from '../../../assets/images/logos/DownUpIcon.png';
import DownMinusIcon from '../../../assets/images/logos/DownMinusIcon.png';
import DownIcon from '../../../assets/images/logos/DownIcon.png';
import global from '../../../styles/global';
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import Trend from '../../../assets/images/logos/Trends.jpg';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
const Trends = () => {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();
    const onSort = () => {
        console.log("sort")
    }
    const onToggleSidebar = () => {
        navigation.openDrawer();
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={[global.defaultPagePadding, global.defaultAppbarPadding, styles.appbar]}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={onToggleSidebar}>
                        <View style={{ padding: 7, marginRight: 5 }}>
                            <Image source={SidebarIcon} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>{auth().currentUser.displayName}</Text>
                    {/* <View style={{ paddingVertical: 5, flexDirection: "row" }}>
                        <View style={{ marginRight: 7 }}>
                            <Text style={{ color: "white", textAlign: "right", fontSize: 8 }}>BALANCE</Text>
                            <Text style={{ color: "white", textAlign: "right", fontWeight: "600", marginTop: -3, fontSize: 12 }}>12.56</Text>
                        </View>
                        <View style={{ padding: 5, backgroundColor: '#333', borderRadius: 4, marginRight: 10, borderWidth: 2, borderColor: '#555', alignSelf: "flex-start" }}>
                            <Image source={WalletIcon} />
                        </View>
                        <View style={{ paddingVertical: 3 }}>
                            <Image source={SearchIcon} />
                        </View>
                    </View> */}
                </View>
            </View>
            <View style={{ flexGrow: 1, backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 5 }}>

                    {/* <View style={{ marginTop: 5, marginHorizontal: 120 }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, paddingVertical: 3, color: 'black' }} >TRENDS</Text>
                    </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 135 }}>
                        <Image source={Trend} style={{ width: 100, height: 100 }} />
                    </View>
                    <View style={{ marginTop: 60, marginRight: 5 }}>
                        <TouchableOpacity style={{ borderColor: "#B9B9B9", backgroundColor: "white", borderWidth: 1, paddingHorizontal: 7, borderRadius: 3, paddingVertical: 5 }} onPress={() => onSort()}>
                            <View style={{ padding: 5 }}>
                                <Image source={SortIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 2, }}>
                    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="Standings">
                        <Tab.Screen name="HOME CT" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={WIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="Margin" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={LIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="Total" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={WLIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="LWIcon" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={LWIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="UploadIcon" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={UploadIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="UploadMinus" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={UploadMinus} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="UpDownload" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={UpDownload} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="MinusUpload" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={MinusUpload} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="Minus" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={Minus} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="MinusDownload" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={MinusDownloadIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="DownUp" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={DownUpIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="DownMinus" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={DownMinusIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                        <Tab.Screen name="Down" component={WeeklyHistoryTab} options={{
                            tabBarIcon: ({ focused }) => (
                                <Image
                                    source={DownIcon} // Make sure to use the correct path to your image
                                    style={{ width: 70, height: 25, marginVertical: 5 }}
                                />
                            ),
                            tabBarLabel: () => null, // This will hide the text label
                        }} />
                    </Tab.Navigator>
                </View>
                {/* </View> */}
                {/* <View style={{ borderWidth: 1, borderColor: '#B9B9B9', flexDirection: 'row', marginVertical: 6, marginHorizontal: 5, borderRadius: 10 }}>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                        <TouchableOpacity onPress={() => { Alert.alert("first") }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>HOME CT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%' }}>
                        <TouchableOpacity onPress={() => { Alert.alert("two") }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>Margin</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>Total</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>Athelete</Text>
                    </View>
                </View> */}
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
        <View style={{ width: "100%", flexDirection: 'row' }}>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}>
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
                        // Extract the tabBarIcon component
                        const Icon = options.tabBarIcon ? options.tabBarIcon({ focused: isFocused }) : null;
                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                style={{ flex: 1, alignItems: 'center', paddingHorizontal: 5, paddingVertical: 5 }}
                            >
                                {Icon}
                                {/* <Text style={{ color: isFocused ? '#F7D068' : 'white', paddingVertical: 1, borderBottomColor: "#F7D068", borderBottomWidth: isFocused ? 2 : 0, fontSize: 20 }}>
                            {label}
                        </Text> */}
                            </TouchableOpacity>
                        );
                    })}
                </LinearGradient>
            </ScrollView>
        </View>
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

export default Trends;