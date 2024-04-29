import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import ChainHistoryIcon from '../../assets/images/icons/history-icon-1.png';
import MoneyHistoryIcon from '../../assets/images/icons/history-icon-2.png';
import ArrowLeftHistorySmallIcon from '../../assets/images/icons/history-icon-4.png';
import ArrowRightHistorySmallIcon from '../../assets/images/icons/history-icon-5.png';
import teamlogoIcon3 from '../../assets/images/logos/team-logo-3.png';
import teamlogoIcon4 from '../../assets/images/logos/team-logo-4.png';
import GlobalStyles from '../../styles/global';
import { LinearGradient } from 'react-native-linear-gradient';
import TeamLogo from '../../components/TeamLogo';

const Tab = createMaterialTopTabNavigator();
const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <LinearGradient
            colors={['#22252A', '#4B4B4B']}
            start={{ x: 0, y: 0 }} // Vertical gradient, start from top
            end={{ x: 0, y: 1 }} // Vertical gradient, end at bottom
            style={{
                flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderRadius: 5
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
const History = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: "white" }}>
            <View>
                <View style={[{ flexDirection: 'row', backgroundColor: '#22252A' }, GlobalStyles.appbar, GlobalStyles.defaultAppbarPadding, GlobalStyles.defaultPagePadding]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Image source={ArrowHistoryIcon} style={{ width: 19, height: 15, margin: 15 }} /></TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: 600, fontFamily: 'Roboto', color: '#FFFFFF', paddingTop: 10, paddingBottom: 10 }}>History</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FDF0D3' }}>
                    <View style={{ flexDirection: 'row', borderColor: '#B9B9B9', width: '50%', borderRightWidth: 1, }}>
                        <View style={{}}>
                            <Image style={{ borderColor: 'red', borderwidth: 2 }} source={ChainHistoryIcon}></Image>
                        </View>
                        <View style={{ paddingLeft: 5, display: "flex", alignSelf: "center" }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto', fontWeight: '400' }}>
                                BALANCE
                            </Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', color: '#3C3C3C' }}>
                                $12.56
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '50%', justifyContent: "flex-end" }}>
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto', fontWeight: '400' }}>
                                TOTAL EARNINGS
                            </Text>
                            <Text style={{ textAlign: 'right', fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', color: '#3C3C3C' }}>
                                +$501.16
                            </Text>
                        </View>
                        <View style={{ padding: 6, borderRadius: 5, backgroundColor: '#22252A', marginLeft: 5, display: "flex", alignSelf: "center" }}>
                            <Image source={MoneyHistoryIcon}></Image>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', margin: 20, height: '80%'
            }} >
                <Tab.Navigator
                    tabBar={props => <CustomTabBar {...props} />}
                    independent={true}
                >
                    <Tab.Screen name='WEEKLY HISTORY' component={WeeklyHistoryTab} />
                    <Tab.Screen name='TOTAL HISTORY' component={TotalHistoryTab} />
                </Tab.Navigator>
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
            <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                    <TouchableOpacity onPress={() => { console.log("LeftArray") }} style={{ flexDirection: "row" }}>
                        <View style={{ backgroundColor: '#3C3C3C', display: "flex", alignSelf: "center", paddingVertical: 4, paddingHorizontal: 5.6, borderRadius: 10 }}>
                            <Image source={ArrowLeftHistorySmallIcon} ></Image>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.text}>WEEK 25</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { console.log("LeftArray") }} style={{ flexDirection: "row" }}>
                        <View style={{ marginRight: 5 }}>
                            <Text style={styles.text}>WEEK 25</Text>
                        </View>
                        <View style={{ backgroundColor: '#3C3C3C', display: "flex", alignSelf: "center", paddingVertical: 4, paddingHorizontal: 5.6, borderRadius: 10 }}>
                            <Image source={ArrowRightHistorySmallIcon} ></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {tableData.map((rowData, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.name}</Text>
                        <Text style={[styles.cell, styles.text, { fontWeight: '600', fontSize: 12 }]}>{rowData.age}</Text>
                        <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const TotalHistoryTab = () => {
    return (
        <ScrollView style={{ paddingTop: 10, backgroundColor: "white" }}>
            <View style={{ borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 7, justifyContent: 'center', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#B9B9B9', paddingVertical: 10, borderRadius: 7, marginTop: 20 }}>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon4} style={{ width: 90, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Wizards</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1 }}>
                        <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', fontWeight: '700', fontSize: 12 }]} >NBA LEAUGE</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontSize: 12, color: '#B9B9B9' }]} >FINISHED</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20/11/2023</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20:18</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon4} style={{ width: 90, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Atlanta Hawks</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B9B9B9', paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text style={[styles.text, { paddingRight: 20, fontSize: 12, color: '#3C3C3C' }]}>MONEY LINE</Text>
                    <Text style={[styles.text, { paddingRight: 20, fontSize: 12, color: '#3C3C3C', fontWeight: '400' }]}>Spurs</Text>
                    <Text style={[styles.text, { paddingRight: 40, fontSize: 12, color: '#3C3C3C', fontWeight: '400' }]}>1.85</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: '#B9B9B9', paddingVertical: 10, paddingHorizontal: 40 }}>
                    <Text style={[styles.text, { fontSize: 12, color: '#3C3C3C' }]}>BET</Text>
                    <Text style={[styles.text, { marginLeft: 35, fontSize: 12, color: '#3C3C3C', fontWeight: '400' }]}>$10</Text>
                    <Text style={[styles.text, { paddingRight: 15, fontSize: 12, color: '#30E712', fontWeight: '400' }]}>+$1.85</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: '#22252A',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: '600'
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 10,
    },
});
export default History;