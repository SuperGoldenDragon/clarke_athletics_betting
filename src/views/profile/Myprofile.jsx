import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { format, addDays, subDays, startOfWeek } from 'date-fns';
import { useState } from 'react';
import { Alert } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ArrowLeftHistorySmallIcon from '../../assets/images/icons/history-icon-4.png';
import ArrowRightHistorySmallIcon from '../../assets/images/icons/history-icon-5.png';
import DropdownIcon from '../../assets/images/icons/login-vector.png';
import canlender from '../../assets/images/calender.png';
import images from '../../assets/images/images.png';
import TeamLogo from '../../components/TeamLogo';
import teamlogoIcon4 from '../../assets/images/logos/team-logo-4.png';
import GlobalStyles from '../../styles/global';
const Myprofile = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { param1, param2, owner, email, imageUrl } = route.params || {};
    const [data, setData] = useState(1);
    const [currentDate, setCurrentDate] = useState(new Date());
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const selectedData = ['Record', 'H2H Record', 'Earnings', 'Badges']
    const getWeekDays = (date) => {
        // const start = startOfWeek(date, { weekStartsOn: 1 }); // Monday as the first day of the week
        return Array.from({ length: 1 }).map((_, index) =>
            format(addDays(date, index), 'EEE, MMM d')
        );
    };
    const handleNext = () => {
        setCurrentDate(addDays(currentDate, 1));
    };

    const handlePrevious = () => {
        setCurrentDate(subDays(currentDate, 1));
    };
    // const renderContent = () => {
    //     switch (currentDayIndex) {
    //         case 0:
    //             return (
    //                 <View style={{ marginTop: 30 }}>
    //                     <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Starters</Text>
    //                     {tableData.map((rowData, index) => (
    //                         <View key={index} style={styles.row}>
    //                             <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.age}
    //                             </Text>
    //                             <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.location}
    //                             </Text>
    //                         </View>
    //                     ))}
    //                 </View>
    //             );
    //         case 1:
    //             return (
    //                 <View>
    //                     <View>
    //                         <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Starters</Text>
    //                     </View>
    //                     <View>
    //                         {tableData.map((rowData, index) => (
    //                             <View key={index} style={styles.row}>
    //                                 <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
    //                                 <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
    //                             </View>
    //                         ))}
    //                     </View>
    //                     <View style={{ marginTop: 30, }}>
    //                         <View>
    //                             <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                         </View>
    //                         <View>
    //                             {tableData.map((rowData, index) => (
    //                                 <View key={index} style={styles.row}>
    //                                     <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
    //                                     <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
    //                                 </View>
    //                             ))}
    //                         </View>
    //                     </View>
    //                 </View>
    //             );
    //         case 2:
    //             return (
    //                 <View style={{ marginTop: 30 }}>
    //                     <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                     {tableData.map((rowData, index) => (
    //                         <View key={index} style={styles.row}>
    //                             <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.age}
    //                             </Text>
    //                             <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.location}
    //                             </Text>
    //                         </View>
    //                     ))}
    //                 </View>
    //             );
    //         case 3:
    //             return (
    //                 <View style={{ marginTop: 30 }}>
    //                     <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                     {tableData.map((rowData, index) => (
    //                         <View key={index} style={styles.row}>
    //                             <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.age}
    //                             </Text>
    //                             <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.location}
    //                             </Text>
    //                         </View>
    //                     ))}
    //                 </View>
    //             );
    //         case 4:
    //             return (
    //                 <View>
    //                     <View>
    //                         <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Starters</Text>
    //                     </View>
    //                     <View>
    //                         {tableData.map((rowData, index) => (
    //                             <View key={index} style={styles.row}>
    //                                 <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
    //                                 <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
    //                             </View>
    //                         ))}
    //                     </View>
    //                     <View style={{ marginTop: 30, }}>
    //                         <View>
    //                             <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                         </View>
    //                         <View>
    //                             {tableData.map((rowData, index) => (
    //                                 <View key={index} style={styles.row}>
    //                                     <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
    //                                     <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
    //                                 </View>
    //                             ))}
    //                         </View>
    //                     </View>
    //                 </View>
    //             );
    //         case 5:
    //             return (
    //                 <View style={{ marginTop: 30 }}>
    //                     <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                     {tableData.map((rowData, index) => (
    //                         <View key={index} style={styles.row}>
    //                             <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.age}
    //                             </Text>
    //                             <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.location}
    //                             </Text>
    //                         </View>
    //                     ))}
    //                 </View>
    //             );
    //         case 6:
    //             return (
    //                 <View>
    //                     <View>
    //                         <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Starters</Text>
    //                     </View>
    //                     <View>
    //                         {tableData.map((rowData, index) => (
    //                             <View key={index} style={styles.row}>
    //                                 <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
    //                                 <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
    //                             </View>
    //                         ))}
    //                     </View>
    //                     <View style={{ marginTop: 30, }}>
    //                         <View>
    //                             <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                         </View>
    //                         <View>
    //                             {tableData.map((rowData, index) => (
    //                                 <View key={index} style={styles.row}>
    //                                     <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
    //                                     <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
    //                                 </View>
    //                             ))}
    //                         </View>
    //                     </View>
    //                 </View>
    //             );
    //         case 7:
    //             return (
    //                 <View style={{ marginTop: 30 }}>
    //                     <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
    //                     {tableData.map((rowData, index) => (
    //                         <View key={index} style={styles.row}>
    //                             <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.age}
    //                             </Text>
    //                             <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>
    //                                 {rowData.location}
    //                             </Text>
    //                         </View>
    //                     ))}
    //                 </View>
    //             );
    //         // Add more cases for other days as needed
    //         default:
    //             return null;
    //     }
    // };
    const daysOfWeek = getWeekDays(currentDate);
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 30, paddingVertical: 3, color: 'black' }} >{(param1 ? param1 : owner).toUpperCase()}</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#B9B9B9', flexDirection: 'row', marginVertical: 6, marginHorizontal: 5, borderRadius: 10 }}>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                        <TouchableOpacity onPress={() => { Alert.alert("first") }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>First</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%' }}>
                        <TouchableOpacity onPress={() => { Alert.alert("two") }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>Two</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>Three</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '25%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: 'black' }}>Four</Text>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 30 }}>
                    <View style={[styles.avatar_container, { paddingVertical: 10 }]}>
                        <Image source={{ uri: imageUrl }} style={styles.avatar} />
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={[styles.nameContainer, {}]}>
                            <Text style={[styles.infoLabel, { color: 'black' }]}>Record</Text>
                            {/* <Text style={[styles.name, { color: 'black' }]}>Alex</Text> */}
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={[styles.infoLabel, { color: 'black' }]}>H2H Record</Text>
                            {/* <SelectDropdown
                                data={selectedData}
                                onSelect={(item) => { }}
                                renderButton={(selectedItem, isOpened) => {
                                    return (
                                        <View style={[styles.matchTypeDropdownButtonStyle, { width: 150, height: 35, borderRadius: 3 }]}>
                                            <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, marginTop: 2 }]}>
                                                {selectedItem || 'Badges'}
                                            </Text>
                                            <View style={{ marginTop: 6, padding: 4 }}>
                                                <Image source={DropdownIcon} style={{ width: 8, height: 8, }} />
                                            </View>
                                        </View>
                                    );
                                }}
                                renderItem={(item, index, isSelected) => {
                                    return (
                                        <View style={{ ...styles.scheduleDropdownItemStyle, ...(isSelected && { backgroundColor: '#FDF0D3' }) }}>
                                            <Text style={styles.matchTypeDropdownItemTxtStyle}>{item}</Text>
                                        </View>
                                    );
                                }}
                                showsVerticalScrollIndicator={false}
                                dropdownStyle={styles.matchTypeDropdownMenuStyle}
                            /> */}
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={[styles.infoLabel, { color: 'black', }]}>Earnings</Text>
                        </View>
                        <View style={[styles.infoContainer, { marginBottom: 10 }]}>
                            <Text style={[styles.infoLabel, { color: 'black', }]}>Badges</Text>
                        </View>
                        {/* <View style={[styles.infoContainer, { marginBottom: 20 }]}>
                            <Text style={[styles.infoLabel, { color: 'black', }]}>CTRY: USA</Text>
                        </View> */}
                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderColor: '#B9B9B9', flexDirection: 'row', marginVertical: 4, paddingHorizontal: 5, paddingVertical: 4, marginHorizontal: 10 }}>
                    <View style={{ borderRightWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '50%' }}>
                        <TouchableOpacity onPress={() => { Alert.alert("HOME TEAM") }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: '#F7D068' }}>HOME TEAM</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderLeftWidth: 1, borderColor: '#B9B9B9', height: 'auto', width: '50%' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('wager') }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 3, color: '#F7D068' }}>PENDING WAGERS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{ backgroundColor: "white", width: '100%', paddingHorizontal: 10, marginHorizontal: 10, marginVertical: 10 }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center', height: '40%', width: '100%'
                    }} >
                        <View style={[styles.container, { backgroundColor: '#FDF0D3', width: '100%' }]}>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                                    <TouchableOpacity onPress={() => {
                                        handlePrevious()
                                    }} style={{ flexDirection: "row" }}>
                                        <View style={{ backgroundColor: '#3C3C3C', display: "flex", alignSelf: "center", paddingVertical: 4, paddingHorizontal: 5.6, borderRadius: 10, }}>
                                            <Image source={ArrowLeftHistorySmallIcon} ></Image>
                                        </View>
                                        <View style={{ marginLeft: 8 }}>
                                            <Text style={[styles.text, { fontSize: 17 }]}>Previous</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ display: "flex", alignSelf: "center", paddingVertical: 4, paddingHorizontal: 15, borderRadius: 20, }}>
                                        <Image source={images} style={{ width: 35, height: 35, borderWidth: 3, borderColor: '#FDF0D3', }}></Image>
                                    </View>
                                    <View style={{ marginRight: 15 }}>
                                        <Text style={[styles.text, { fontSize: 20, color: '#22252A' }]}>{format(currentDate, 'EEE, MMM  d')}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        handleNext()
                                    }} style={{ flexDirection: "row" }}>
                                        <View style={{ marginRight: 8 }}>
                                            <Text style={[styles.text, { fontSize: 17 }]}>Next</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#3C3C3C', display: "flex", alignSelf: "center", paddingVertical: 4, paddingHorizontal: 5.6, borderRadius: 10 }}>
                                            <Image source={ArrowRightHistorySmallIcon} ></Image>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'white' }}>
                                {renderContent(daysOfWeek)}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View >
    );
};
const renderContent = (daysOfWeek) => {
    const tableData = [
        { name: '$14(+100%) W2 L3', age: '1', location: 'Alex' },
        { name: '$14(+100%) W2 L3', age: '2', location: 'Joe' },
        { name: '$14(+100%) W2 L3', age: '3', location: 'Tom' },
        { name: '$14(+100%) W2 L3', age: '4', location: 'Tony' },
        { name: '$14(+100%) W2 L3', age: '5', location: 'Algena' },
        { name: '$14(+100%) W2 L3', age: '6', location: 'Fatra' },
    ];
    return (
        <View>
            <View>
                <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Starters</Text>
            </View>
            <View>
                {tableData.map((rowData, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
                        <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
                    </View>
                ))}
            </View>
            <View style={{ marginTop: 30, }}>
                <View>
                    <Text style={[styles.text, { paddingHorizontal: 20, fontSize: 20 }]}>Keepers</Text>
                </View>
                <View>
                    {tableData.map((rowData, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={[styles.cell1, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#F3F6F6', borderRadius: 3, paddingVertical: 5 }]}>{rowData.age}</Text>
                            <Text style={[styles.cell, styles.text, { fontWeight: '400', fontSize: 12, backgroundColor: '#FDF0D3', borderRadius: 3, paddingVertical: 5 }]}>{rowData.location}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F3',
    },
    body: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar_container: {
        borderRadius: 64,
        marginRight: 5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 0.16,

    },
    avatar: {
        width: 140,
        height: 140,
        marginLeft: 0,
        marginRight: 5,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameContainer: {
        marginTop: 24,
        // alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    infoLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#666666',
        marginRight: 8,
    },
    infoText: {
        fontSize: 16,
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
    cell1: {
        textAlign: 'center',
        width: '10%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 10,
    },
    matchTypeDropdownButtonStyle: {
        backgroundColor: '#FDF0D3',
        paddingHorizontal: 10,
        paddingVertical: 3,
        // borderRadius: 100,
        flexDirection: 'row',
    },
    matchTypeDropdownButtonTxtStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: "black"
    },
    scheduleDropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    matchTypeDropdownItemTxtStyle: {
        flex: 1,
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
    matchTypeDropdownMenuStyle: {
        backgroundColor: '#FDF0D3',
        borderRadius: 3,
    },
});

export default Myprofile;