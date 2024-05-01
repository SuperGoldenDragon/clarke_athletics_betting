import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SortIcon from '../../assets/images/icons/sort-icon.png';
import SelectDropdown from "react-native-select-dropdown";
import DropdownIcon from '../../assets/images/icons/drop-down-icon.png';

const TeamStatisticsTab = () => {
    return (<View style={{ ...styles.container }}>
        <ScrollView style={{ paddingHorizontal: 30 }}>
            <View>
                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                    <View style={{ flexGrow: 1, flexDirection: "row", }}>
                        <SelectDropdown
                            data={[]}
                            onSelect={(item) => { }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={[styles.matchTypeDropdownButtonStyle]}>
                                        <Text style={[styles.matchTypeDropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5 }]}>
                                            {selectedItem || 'NBA LEAGUE'}
                                        </Text>
                                        <View style={{ padding: 6 }}>
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
                    <View>
                        <TouchableOpacity style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 7, borderWidth: 1, borderRadius: 5, borderColor: "#EDEDED" }}>
                            <View style={{ display: "flex", alignSelf: "center", marginRight: 5 }}>
                                <Image source={SortIcon} />
                            </View>
                            <Text style={{ color: "#22252A", fontSize: 12 }}>Filters</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.RatingFomat, { flexDirection: "row", justifyContent: "space-between" }]}>
                <Text style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: 14, lineHeight: 16.41, color: "#22252A", marginTop: 5 }}>AVG WHATAWAGER RATING</Text>
                <TouchableOpacity>
                    <Text style={[styles.SubText, { backgroundColor: "#F7D068" }]}>8.5</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: "Roboto", fontWeight: "700", fontSize: 14, lineHeight: 16.41, color: "#22252A", margin: 20 }}>SUMMARY</Text>
            <View style={{ borderWidth: 1, borderColor: "#B9B9B9", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontFamily: "Roboto", fontWeight: "700", fontSize: 14, lineHeight: 16.41, color: "#22252A", margin: 20, marginTop: 40 }}>ATTACKING</Text>
            <View style={{ borderWidth: 1, borderColor: "#F7D068", borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, marginBottom: 30 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#B9B9B9", paddingBottom: 8, marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontFamily: "Roboto", fontWeight: "600", fontSize: 12, lineHeight: 11.54, color: "#3C3C3C", marginTop: 10 }}>FAVORITE</Text>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>-7</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    matchTypeDropdownButtonStyle: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 100,
        flexDirection: 'row',
    },
    matchTypeDropdownButtonTxtStyle: {
        fontSize: 14,
        fontWeight: '600',
        color: "#22252A"
    },
    matchTypeDropdownMenuStyle: {
        backgroundColor: '#ddd',
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
        color: '#22252A',
    },
    RatingFomat: {
        padding: 18,
        borderWidth: 1,
        borderColor: "#F8C067",
        borderRadius: 8,
        marginBottom: 10
    },
    PlayerName: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 11.54
    },
    InformationArea: {
        marginTop: 5,
        flexDirection: "row"
    },
    PlayerInfo: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.06
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: "#B9B9B9"
    },
    SubText: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 16.41,
        borderRadius: 5,
        color: "#3C3C3C",
        paddingVertical: 5,
        width: 60
    },
});

export default TeamStatisticsTab;