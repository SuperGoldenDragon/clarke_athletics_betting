import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArrayHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import ChainHistoryIcon from '../../assets/images/icons/history-icon-1.png';
import MoneyHistoryIcon from '../../assets/images/icons/history-icon-2.png';
import ArrawLeftHistorySmallIcon from '../../assets/images/icons/history-icon-4.png';
import ArrawRightHistorySmallIcon from '../../assets/images/icons/history-icon-5.png';
import teamlogoIcon3 from '../../assets/images/logos/team-logo-3.png';
import teamlogoIcon4 from '../../assets/images/logos/team-logo-4.png';

const Tab = createMaterialTopTabNavigator();
const History = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#22252A' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Image source={ArrayHistoryIcon} style={{ width: 19, height: 15, margin: 15 }} /></TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: 600, fontFamily: 'Roboto', color: '#FFFFFF', paddingTop: 10, paddingBottom: 10 }}>History</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 20, backgroundColor: '#FDF0D3' }}>
                    <View style={{ flexDirection: 'row', borderColor: '#B9B9B9', width: '50%', borderRightWidth: 1, }}>
                        <View style={{}}>
                            <Image style={{ borderColor: 'red', borderwidth: 2 }} source={ChainHistoryIcon}></Image>
                        </View>
                        <View style={{ paddingLeft: 5 }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto', fontWeight: '400' }}>
                                BALANCE
                            </Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', color: '#3C3C3C' }}>
                                $12.56
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: '50%' }}>
                        <View>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto', fontWeight: '400' }}>
                                TOTAL EARNINGS
                            </Text>
                            <Text style={{ textAlign: 'right', fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', color: '#3C3C3C' }}>
                                +$501.16
                            </Text>
                        </View>
                        <View style={{ padding: 5, borderRadius: 5, backgroundColor: '#22252A', marginLeft: 5 }}>
                            <Image source={MoneyHistoryIcon}></Image>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', margin: 20, height: '80%'
            }} >
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: '#4B4B4B' },
                        tabBarInactiveTintColor: '#FFFFFF',
                        tabBarActiveTintColor: '#F7D068',
                        tabBarIndicatorStyle: { backgroundColor: '#F7D068' },
                        tabBarLabelStyle: { fontSize: 12 },

                    }}


                    independent={true}
                >
                    <Tab.Screen name='WEEKLY HISTORY' component={HomeScreen} />
                    <Tab.Screen name='TOTAL HISTORY' component={ProfileScreen} />
                </Tab.Navigator>
            </View>
        </View>
    );
};
const HomeScreen = () => {
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#3C3C3C', borderRadius: 10, width: 16, height: 16, paddingTop: 4, paddingLeft: 4, }}>
                        <Image source={ArrawLeftHistorySmallIcon} ></Image>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={styles.text} onPress={() => { console.log("LeftArray") }}>WEEK 25</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginRight: 5 }}>
                        <Text style={styles.text} onPress={() => { console.log("LeftArray") }} >WEEK 25</Text>
                    </View>
                    <View style={{ backgroundColor: '#3C3C3C', borderRadius: 10, width: 16, height: 16, paddingTop: 4, paddingLeft: 4 }}>
                        <Image source={ArrawRightHistorySmallIcon}></Image>
                    </View>
                </View>
            </View>
            <View>
                {tableData.map((rowData, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3 }]}>{rowData.name}</Text>
                        <Text style={[styles.cell, styles.text, { fontWeight: '600', fontSize: 12 }]}>{rowData.age}</Text>
                        <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3 }]}>{rowData.location}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const ProfileScreen = () => {
    return (
        <ScrollView style={{ paddingTop: 10, }}>
            <View style={{ borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 7, justifyContent: 'center', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#B9B9B9', paddingVertical: 10, borderRadius: 7, marginTop: 20, width: '100%' }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={{ paddingBottom: 5 }}>
                            <Image source={teamlogoIcon4}></Image>
                        </View>
                        <View>
                            <Text style={[styles.text, { textAlign: 'center' }]} >
                                Wizards
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', fontWeight: '700', fontSize: 12 }]} >NBA LEAUGE</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontSize: 12, color: '#B9B9B9' }]} >FINISHED</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20/11/2023</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20:18</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={{ paddingBottom: 5 }}>
                            <Image source={teamlogoIcon3}></Image>
                        </View>
                        <View>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C' }]} >Atlanta</Text>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C' }]} >Hawks</Text>
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
            {/* <View style={{ borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 7, justifyContent: 'center', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#B9B9B9', paddingVertical: 10, borderRadius: 7, marginTop: 20, width: '100%' }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={{ paddingBottom: 5 }}>
                            <Image source={teamlogoIcon4}></Image>
                        </View>
                        <View>
                            <Text style={[styles.text, { textAlign: 'center' }]} >
                                Wizards
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                        <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', fontWeight: '700', fontSize: 12 }]} >NBA LEAUGE</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontSize: 12, color: '#B9B9B9' }]} >FINISHED</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20/11/2023</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20:18</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={{ paddingBottom: 5 }}>
                            <Image source={teamlogoIcon3}></Image>
                        </View>
                        <View>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C' }]} >Atlanta</Text>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C' }]} >Hawks</Text>
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
            </View> */}
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