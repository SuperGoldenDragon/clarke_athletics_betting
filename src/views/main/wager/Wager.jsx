import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, FlatList } from "react-native";
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import DropdownIcon from '../../../assets/images/icons/drop-down-icon.png';
import SelectDropdown from "react-native-select-dropdown";
import WagerMatchCard from "./WagerMatchCard";
import GlobalStyle from "../../../styles/global";
import firestore from '@react-native-firebase/firestore';
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
    //fetch the firebase
    const saveDataToFirebase = (data) => {
        firestore()
            .collection('API')
            .doc('SChedules')
            .set({
                schedulearray: data,
            })
            .then(() => {
                console.log('Data saved to Firebase');
                // Trigger notification or update UI indicating data is updated
            })
            .catch((error) => {
                console.error('Error saving data to Firebase:', error);
            });
    }
    //fetch the data from the firebase;
    const fetchData = async () => {
        let doc_data = [];
        let doc_exist = null;
        let doc_Week = [];
        try {
            await firestore()
                .collection('API')
                .doc('SChedules')
                .get()
                .then(snapshot => {
                    doc_data = snapshot.exists ? snapshot.data().schedulearray : null;
                    doc_exist = snapshot.exists;
                })
            console.log("exist" + doc_exist);
            if (doc_exist) {
                doc_data.forEach(row => {
                    if (row.Date !== null) {
                        doc_Week.push(row.Week);
                    }
                });
                // console.log('Weeks from Firestore data:', doc_data);
                SetWagerData(doc_data ? doc_data : null);
                setWeek(doc_data ? [...new Set(doc_Week)] : null)
            } else {
                console.log('Document does not exist. Fetching data from API...');
                const response = await axios.get(`${BASE_URL}/SchedulesBasic/${currentYear}`, {
                    headers: {
                        'Ocp-Apim-Subscription-Key': API_KEY
                    }
                });
                const datadump = [];
                const Weekdump = [];

                response.data.forEach((row) => {
                    if (row.Date !== null) {
                        datadump.push(row);
                        Weekdump.push(row.Week);
                    }
                });
                const WeekArray = [...new Set(Weekdump)];
                saveDataToFirebase(datadump);
                SetWagerData(datadump);
                setWeek(WeekArray)

            }
        } catch (error) {
            console.error('Error getting country data:', error);
        }
    };
    //get the shedule
    useEffect(() => {
        fetchData();
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