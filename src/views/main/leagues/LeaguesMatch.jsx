import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import DropdownIcon from '../../../assets/images/icons/drop-down-icon.png';
import SelectDropdown from "react-native-select-dropdown";
import GlobalStyle from "../../../styles/global";
import NavigationContext from "../../../components/NavigationContext";
import React, { useContext } from "react";
import global from "../../../styles/global";
import LeftArrowIcon from '../../../assets/images/icons/history-icon-4.png';
import RightArrowIcon from '../../../assets/images/icons/history-icon-5.png';
import { useNavigation } from "@react-navigation/native";

const LeaguesMatch = () => {

    const navigation = useNavigation();

    return (<View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={[GlobalStyle.appbar]}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ padding: 7, marginRight: 5 }}>
                        <Image source={SidebarIcon} />
                    </View>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Leagues</Text>
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
        <View style={[global.defaultPagePadding, { flexDirection: "row", paddingVertical: 20 }]}>
            <View style={[{ flexGrow: 1 }]}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <View style={[{ backgroundColor: "#3C3C3C", padding: 5, borderRadius: 20, display: "flex", alignSelf: "center" }]}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Image source={LeftArrowIcon} style={{ width: 16, height: 16 }} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={{ display: "flex", alignSelf: "center", marginLeft: 10 }}>
                        <Text style={[global.text_uppercase, { fontWeight: "600", fontSize: 14, color: "#22252A" }]}>bettor 1</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[{ flexGrow: 1, flexDirection: "row", justifyContent: "center" }]}>
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={{ color: "#22252A", fontWeight: "600", fontSize: 14, backgroundColor: "#F7D068", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 3 }}> $ 100</Text>
                </View>
            </View>
            <View style={[{ flexGrow: 1, flexDirection: "row", justifyContent: "flex-end" }]}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <View style={{ display: "flex", alignSelf: "center", marginRight: 10 }}>
                        <Text style={[global.text_uppercase, { fontWeight: "600", fontSize: 14, color: "#22252A" }]}>bettor 2</Text>
                    </View>
                    <View style={[{ backgroundColor: "#3C3C3C", padding: 5, borderRadius: 20, display: "flex", alignSelf: "center" }]}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Image source={RightArrowIcon} style={{ width: 16, height: 16 }} resizeMode="contain" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[{ flex: 1, paddingTop: 15 }]}>
            <ScrollView style={[global.defaultPagePadding]}>
                <View style={{ ...styles.topline, ...styles.table_row, borderColor: "#F7D068" }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>WR</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>TE</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>RB</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>QB</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>K</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row, borderColor: "#F7D068" }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>WR</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>TE</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>RB</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>QB</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>K</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row, borderColor: "#F7D068" }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>WR</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>TE</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>RB</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>QB</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
                <View style={{ ...styles.topline, ...styles.table_row }}>
                    <View style={{ ...styles.table_cell, flexDirection: "row" }}>
                        <Text style={styles.left_mark}>-7</Text>
                    </View>
                    <View style={{ ...styles.table_cell, display: "flex", alignSelf: "center" }}>
                        <Text style={{ color: "#3C3C3C", fontWeight: "600", fontSize: 14, ...global.text_center, ...global.text_uppercase }}>K</Text>
                    </View>
                    <View style={{ ...styles.table_cell, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.right_mark}>-7</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>);
};

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
    table_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 7,
        padding: 7,
        borderColor: "#B9B9B9"
    },
    table_cell: {
        flex: 1
    },
    left_mark: {
        color: "#3C3C3C",
        fontSize: 14,
        fontWeight: "400",
        paddingHorizontal: 23,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#F3F6F6",
    },
    right_mark: {
        color: "#3C3C3C",
        fontSize: 14,
        fontWeight: "400",
        paddingHorizontal: 23,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#FDF0D3",
    }
});

export default LeaguesMatch;