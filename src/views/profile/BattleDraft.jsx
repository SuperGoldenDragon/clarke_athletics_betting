import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import DropdownIcon from '../../assets/images/icons/drop-down-icon.png';
const BattleDraft = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#22252A', paddingVertical: 10, paddingHorizontal: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ paddingTop: 5, paddingHorizontal: 5 }}><Image source={ArrowHistoryIcon}></Image></TouchableOpacity>
                    <View style={{}}>
                        <Text style={[styles.text, { color: "#FFFFFF" }]}>Battle Draft</Text>
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
            <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <Text>BattleDraft</Text>
            </View>
        </View>
    )
}
export default BattleDraft;
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