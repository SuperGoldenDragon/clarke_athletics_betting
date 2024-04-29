import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import BuzzerFeedMatchCard from "./BuzzerFeedMatchCard";
import { useNavigation } from "@react-navigation/native";
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import DropdownIcon from '../../assets/images/icons/login-vector.png';

const BuzzerFeed = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#22252A', paddingVertical: 10 }}>
                <View style={{ paddingTop: 5, paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}><Image source={ArrowHistoryIcon}></Image></TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={[styles.text, { color: "#FFFFFF" }]}>Buzzer Feed</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10 }}>
                <View style={{ flexDirection: "row", padding: 5 }}>
                    <SelectDropdown
                        data={[]}
                        onSelect={(item) => { }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.matchTypeDropdownButtonStyle, { width: 80, height: 25, borderRadius: 3 }]}>
                                    <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, }]}>
                                        {selectedItem || 'Sports'}
                                    </Text>
                                    <View style={{ marginTop: 5, padding: 4 }}>
                                        <Image source={DropdownIcon} style={{ width: 8, height: 6.7, }} />
                                    </View>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.scheduleDropdownItemStyle, ...(isSelected && { backgroundColor: '#000' }) }}>
                                    <Text style={styles.matchTypeDropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.matchTypeDropdownMenuStyle}
                    />
                </View>
                <View style={{ flexDirection: "row", padding: 5 }}>
                    <SelectDropdown
                        data={[]}
                        onSelect={(item) => { }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.matchTypeDropdownButtonStyle, { width: 80, height: 25, borderRadius: 3 }]}>
                                    <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, }]}>
                                        {selectedItem || 'Date'}
                                    </Text>
                                    <View style={{ marginTop: 5, padding: 4 }}>
                                        <Image source={DropdownIcon} style={{ width: 8, height: 6.7, }} />
                                    </View>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.scheduleDropdownItemStyle, ...(isSelected && { backgroundColor: '#000' }) }}>
                                    <Text style={styles.matchTypeDropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.matchTypeDropdownMenuStyle}
                    />
                </View>
                <View style={{ flexDirection: "row", padding: 5 }}>
                    <SelectDropdown
                        data={[]}
                        onSelect={(item) => { }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.matchTypeDropdownButtonStyle, { width: 80, height: 25, borderRadius: 3 }]}>
                                    <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5, }]}>
                                        {selectedItem || 'Commit'}
                                    </Text>
                                    <View style={{ marginTop: 5, padding: 4 }}>
                                        <Image source={DropdownIcon} style={{ width: 8, height: 6.7, }} />
                                    </View>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.scheduleDropdownItemStyle, ...(isSelected && { backgroundColor: '#000' }) }}>
                                    <Text style={styles.matchTypeDropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.matchTypeDropdownMenuStyle}
                    />
                </View>
            </View>
            <View style={{ paddingHorizontal: 21, flex: 1 }}>
                <ScrollView>
                    <BuzzerFeedMatchCard />
                    <BuzzerFeedMatchCard />
                    <BuzzerFeedMatchCard />
                    <BuzzerFeedMatchCard />
                </ScrollView>
            </View>
        </View>
    )
}
export default BuzzerFeed;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
    matchTypeDropdownButtonStyle: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 5,
        paddingVertical: 3,
        // borderRadius: 100,
        flexDirection: 'row',
    },
    matchTypeDropdownButtonTxtStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: "#B9B9B9"
    },
    matchTypeDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    matchTypeDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    matchTypeDropdownMenuStyle: {
        backgroundColor: 'grey',
        borderRadius: 3,
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
})