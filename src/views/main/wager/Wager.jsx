import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, FlatList } from "react-native";
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import DropdownIcon from '../../../assets/images/icons/drop-down-icon.png';
import SelectDropdown from "react-native-select-dropdown";
import WagerMatchCard from "./WagerMatchCard";
import GlobalStyle from "../../../styles/global";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../components/api";
import { BASE_URL } from "../../../components/api";
const Wager = () => {
    const currenDate = new Date();
    const currentYear = currenDate.getFullYear();
    const [Week, setWeek] = useState([]);
    const [WagerData, SetWagerData] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(null);
    const Weekdump = [];
    const datadump = [];
    //get the shedule
    useEffect(() => {
        axios.get(BASE_URL + '/SchedulesBasic/' + currentYear, {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY
            },
        }).then((response) => {
            // console.log(response);
            response.data.forEach((row) => {
                if (row.Date === null) {
                    return;
                } else {
                    console.log("-------------")
                    // console.log(row);
                    console.log("-----end-------0");
                    datadump.push(row);
                    Weekdump.push(row.Week);
                }

            })
            const WeekArray = [...new Set(Weekdump)];
            SetWagerData(datadump);
            setWeek(WeekArray);
        }
        ).catch(err => {
            console.log(err);
        });
    }, [])
    const navigation = useNavigation();
    return (<View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={[GlobalStyle.appbar]}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ padding: 7, marginRight: 5 }}>
                        <Image source={SidebarIcon} />
                    </View>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Wager</Text>
                <View style={{ padding: 5, flexDirection: "row" }}>
                    <SelectDropdown
                        data={[]}
                        onSelect={(item) => { }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.matchTypeDropdownButtonStyle]}>
                                    <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5 }]}>
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
        </View>
        <View style={[GlobalStyle.defaultPagePadding, { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }]}>
            <Text style={{ fontWeight: "800" }}>SCHEDULE</Text>
            <SelectDropdown
                data={Week}
                onSelect={(item) => { setSelectedWeek(item); }}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={[styles.scheduleDropdownButtonStyle]}>
                            <Text style={[styles.scheduleDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5 }]}>
                                {selectedItem !== null ? `Week ${selectedItem}` : 'Week 45'}
                            </Text>
                            <View style={{ padding: 4 }}>
                                <Image source={DropdownIcon} style={{ width: 8, height: 6.7 }} />
                            </View>
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.scheduleDropdownItemStyle, ...(isSelected && { backgroundColor: '#ddd' }) }}>
                            <Text style={styles.scheduleDropdownItemTxtStyle}>{item}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.scheduleDropdownMenuStyle}

            />
        </View>
        <View style={[{ flex: 1, paddingTop: 15 }]}>
            <ScrollView style={styles.defaultPadding}>
                {WagerData && (
                    <FlatList
                        data={selectedWeek !== null
                            ? WagerData.filter(item => item.Week === selectedWeek)
                            : WagerData}
                        renderItem={({ item }) => <WagerMatchCard key={item.id} odd={true} AwayTeam={item.AwayTeam} HomeTeam={item.HomeTeam} DateTime={item.DateTime} />}
                        showsHorizontalScrollIndicator={true}
                        scrollEnabled={false}
                    />
                )}

            </ScrollView>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    defaultPadding: {
        paddingHorizontal: 21
    },
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
});

export default Wager;