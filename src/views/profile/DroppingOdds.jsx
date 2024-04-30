import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'react-native-linear-gradient';
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import DropdownIcon from '../../assets/images/icons/drop-down-icon.png';
import teamlogoIcon4 from '../../assets/images/logos/team-logo-3.png';
import teamlogoIcon3 from '../../assets/images/logos/team-logo-4.png';
import TeamLogo from "../../components/TeamLogo";
import ArrowDownIcon from "../../assets/images/icons/arrowdown-icon.png";
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
const DroppingOdds = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#22252A', paddingVertical: 10, paddingHorizontal: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ paddingTop: 5, paddingHorizontal: 5 }}><Image source={ArrowHistoryIcon}></Image></TouchableOpacity>
                    <View style={{}}>
                        <Text style={[styles.text, { color: "#FFFFFF" }]}>Dropping Odds</Text>
                    </View>
                </View>
                <View style={{ padding: 5, flexDirection: "row", }}>
                    <SelectDropdown
                        data={[]}
                        onSelect={(item) => { }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.matchTypeDropdownButtonStyle, {}]}>
                                    <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, }]}>
                                        {selectedItem || 'NBA'}
                                    </Text>
                                    <View style={{ padding: 4 }}>
                                        <Image source={DropdownIcon} style={{ width: 8, height: 6.7 }} />
                                    </View>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.matchTypeDropdownItemStyle, ...(isSelected && { backgroundColor: '#000' }) }}>
                                    <Text style={styles.matchTypeDropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.matchTypeDropdownMenuStyle}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', margin: 20, height: '80%', flexGrow: 1,
            }} >
                <Tab.Navigator
                    tabBar={props => <CustomTabBar {...props} />}
                    independent={true}
                >
                    <Tab.Screen name='DROPPING ODDS' component={Dropping} />
                    <Tab.Screen name='TRENDING ODDS' component={Trendingods} />
                    <Tab.Screen name='HIGH VALUE STREAK' component={Highvaluestreak} />
                </Tab.Navigator>
            </View>
        </View>
    )
}
const Dropping = () => {
    return (
        <ScrollView style={{ paddingTop: 10, backgroundColor: "white" }}>
            <View style={{ borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 7, justifyContent: 'center', marginVertical: 10, marginHorizontal: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#B9B9B9', paddingVertical: 10, borderRadius: 7, marginHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon3} style={{ width: 50, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Wizards</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1 }}>
                        <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', fontWeight: '700', fontSize: 12 }]} >NBA LEAUGE</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontSize: 12, color: '#B9B9B9' }]} >FINISHED</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20:18</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon4} style={{ width: 50, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Atlanta Hawks</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B9B9B9', paddingHorizontal: 20, paddingVertical: 5 }}>
                    <View style={{ flexDirection: "row", }}>
                        <TeamLogo source={teamlogoIcon3} />
                        <View style={{ paddingHorizontal: 5 }}>
                            <View style={{}}>
                                <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 50, textTransform: "uppercase", paddingBottom: 10 }]}>Wizards Odds</Text>
                            </View>
                            <Text style={[styles.text, { fontSize: 10, color: '#22252A' }]}>1.90=52%</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 50, textTransform: "uppercase", textAlign: "center", paddingVertical: 5 }]}>Winning chance</Text>
                        <View style={{ padding: 5, backgroundColor: '#F3F6F6', borderRadius: 3 }}>
                            <Text style={[styles.text, { fontSize: 10, color: '#22252A', textAlign: "center" }]}>13%</Text>
                        </View>
                    </View>

                    <View style={{ marginRight: 40 }}>
                        <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 40, textAlign: "center", paddingVertical: 5 }]}>More Info</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => console.log('Altra')}>
                                <View style={{ backgroundColor: '#22252A', marginTop: 5, paddingHorizontal: 2, paddingVertical: 3, borderRadius: 50 }}>
                                    <Image source={ArrowDownIcon}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const Trendingods = () => {
    return (
        <ScrollView style={{ paddingTop: 10, backgroundColor: "white" }}>
            <View style={{ borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 7, justifyContent: 'center', marginVertical: 10, marginHorizontal: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#B9B9B9', paddingVertical: 10, borderRadius: 7, marginHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon3} style={{ width: 50, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Wizards</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1 }}>
                        <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', fontWeight: '700', fontSize: 12 }]} >NBA LEAUGE</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontSize: 12, color: '#B9B9B9' }]} >FINISHED</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20:18</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon4} style={{ width: 50, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Atlanta Hawks</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B9B9B9', paddingHorizontal: 20, paddingVertical: 5 }}>
                    <View style={{ flexDirection: "row", }}>
                        <TeamLogo source={teamlogoIcon3} />
                        <View style={{ paddingHorizontal: 5 }}>
                            <View style={{}}>
                                <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 50, textTransform: "uppercase", paddingBottom: 10 }]}>Wizards Odds</Text>
                            </View>
                            <Text style={[styles.text, { fontSize: 10, color: '#22252A' }]}>1.90=52%</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 50, textTransform: "uppercase", textAlign: "center", paddingVertical: 5 }]}>Winning chance</Text>
                        <View style={{ padding: 5, backgroundColor: '#F3F6F6', borderRadius: 3 }}>
                            <Text style={[styles.text, { fontSize: 10, color: '#22252A', textAlign: "center" }]}>13%</Text>
                        </View>
                    </View>

                    <View style={{ marginRight: 40 }}>
                        <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 40, textAlign: "center", paddingVertical: 5 }]}>More Info</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => console.log('Altra')}>
                                <View style={{ backgroundColor: '#22252A', marginTop: 5, paddingHorizontal: 2, paddingVertical: 3, borderRadius: 50 }}>
                                    <Image source={ArrowDownIcon}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const Highvaluestreak = () => {
    return (
        <ScrollView style={{ paddingTop: 10, backgroundColor: "white" }}>
            <View style={{ borderColor: '#B9B9B9', borderWidth: 1, borderRadius: 7, justifyContent: 'center', marginVertical: 10, marginHorizontal: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#B9B9B9', paddingVertical: 10, borderRadius: 7, marginHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon3} style={{ width: 50, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Wizards</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1 }}>
                        <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', fontWeight: '700', fontSize: 12 }]} >NBA LEAUGE</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontSize: 12, color: '#B9B9B9' }]} >FINISHED</Text>
                        <Text style={[styles.text, { textAlign: 'center', fontWeight: '500', color: '3C3C3C' }]} >20:18</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, flex: 1 }}>
                        <View style={{ paddingBottom: 5, flexDirection: "row", justifyContent: "center" }}>
                            <TeamLogo source={teamlogoIcon4} style={{ width: 50, height: 50 }}></TeamLogo>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.text, { textAlign: 'center', color: '#3C3C3C', maxWidth: 80 }]} >Atlanta Hawks</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#B9B9B9', paddingHorizontal: 20, paddingVertical: 5 }}>
                    <View style={{ flexDirection: "row", }}>
                        <TeamLogo source={teamlogoIcon3} />
                        <View style={{ paddingHorizontal: 5 }}>
                            <View style={{}}>
                                <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 50, textTransform: "uppercase", paddingBottom: 10 }]}>Wizards Odds</Text>
                            </View>
                            <Text style={[styles.text, { fontSize: 10, color: '#22252A' }]}>1.90=52%</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 50, textTransform: "uppercase", textAlign: "center", paddingVertical: 5 }]}>Winning chance</Text>
                        <View style={{ padding: 5, backgroundColor: '#F3F6F6', borderRadius: 3 }}>
                            <Text style={[styles.text, { fontSize: 10, color: '#22252A', textAlign: "center" }]}>13%</Text>
                        </View>
                    </View>

                    <View style={{ marginRight: 40 }}>
                        <Text style={[styles.text, { fontSize: 10, color: '#22252A', maxWidth: 40, textAlign: "center", paddingVertical: 5 }]}>More Info</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => console.log('Altra')}>
                                <View style={{ backgroundColor: '#22252A', marginTop: 5, paddingHorizontal: 2, paddingVertical: 3, borderRadius: 50 }}>
                                    <Image source={ArrowDownIcon}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default DroppingOdds;
const styles = StyleSheet.create({
    matchTypeDropdownButtonStyle: {
        backgroundColor: '#26272B',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 100,
        flexDirection: 'row',
        borderColor: "#F5F5F5",
        borderWidth: 1
    },
    matchTypeDropdownButtonTxtStyle: {
        fontSize: 12,
        fontWeight: '500',
        color: "white"
    },
    matchTypeDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    matchTypeDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    matchTypeDropdownMenuStyle: {
        backgroundColor: '#26272B',
        borderRadius: 8,
    },
    matchTypeDropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    matchTypeDropdownItemTxtStyle: {
        flex: 1,
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
    },
    matchTypeDropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },

    scheduleDropdownButtonStyle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
        flexDirection: 'row',
        borderColor: "#EDEDED",
        borderWidth: 1
    },
    scheduleDropdownButtonTxtStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: "#3C3C3C"
    },
    scheduleDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    scheduleDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    scheduleDropdownMenuStyle: {
        backgroundColor: '#eee',
        borderRadius: 8,
    },
    scheduleDropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    scheduleDropdownItemTxtStyle: {
        flex: 1,
        fontSize: 10,
        fontWeight: '500',
        color: '#3C3C3C',
    },
    scheduleDropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
})