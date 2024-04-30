import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import global from "../../../styles/global";
import SortIcon from '../../../assets/images/icons/sort-icon.png';
import TeamLogo from "../../../components/TeamLogo";

const MatchStandingTab = () => {
    return (<View style={{ ...styles.container }}>
        <ScrollView style={{ ...global.defaultPagePadding, ...styles.scroll_container }}>
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ flexGrow: 1 }}>
                    <Text style={{ color: "#3C3C3C", fontWeight: "700", fontSize: 12, ...global.text_uppercase }}>STANDINGS APPERANCE</Text>
                    <Text style={{ color: "#C7B995", fontWeight: "400", fontSize: 12 }}>Select your standing appearance type</Text>
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
            <Text style={{ ...global.text_uppercase, ...global.text_center, color: "#22252A", fontSize: 12, fontWeight: "600" }}>
                eastern conference
            </Text>
            <View style={{ ...styles.table_row }}>
                <Text style={{ ...styles.table_head_cell }}>#</Text>
                <Text style={{ ...styles.table_head_cell, flexGrow: 1 }}>TEAM</Text>
                <Text style={{ ...styles.table_head_cell }}>P</Text>
                <Text style={{ ...styles.table_head_cell }}>W-L</Text>
                <Text style={{ ...styles.table_head_cell }}>PCT</Text>
            </View>
            <View style={{ ...styles.table_row }}>
                <Text style={{ ...styles.table_cell_text }}>1</Text>
                <View style={{ ...styles.table_cell_text, flexGrow: 1, flexDirection: "row" }}>
                    <TeamLogo style={{ width: 23, height: 23, marginHorizontal: 5 }} />
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#3B3B3B" }}>Washington Wizards</Text>
                    </View>

                </View>
                <Text style={{ ...styles.table_cell_text }}>2</Text>
                <Text style={{ ...styles.table_cell_text }}>1-1</Text>
                <Text style={{ ...styles.table_cell_text }}>1.0</Text>
            </View>
            <View style={{ ...styles.table_row }}>
                <Text style={{ ...styles.table_cell_text }}>2</Text>
                <View style={{ ...styles.table_cell_text, flexGrow: 1, flexDirection: "row" }}>
                    <TeamLogo style={{ width: 23, height: 23, marginHorizontal: 5 }} />
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#3B3B3B" }}>Washington Wizards</Text>
                    </View>

                </View>
                <Text style={{ ...styles.table_cell_text }}>2</Text>
                <Text style={{ ...styles.table_cell_text }}>1-1</Text>
                <Text style={{ ...styles.table_cell_text }}>1.0</Text>
            </View>
            <View style={{ ...styles.table_row }}>
                <Text style={{ ...styles.table_cell_text }}>3</Text>
                <View style={{ ...styles.table_cell_text, flexGrow: 1, flexDirection: "row" }}>
                    <TeamLogo style={{ width: 23, height: 23, marginHorizontal: 5 }} />
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#3B3B3B" }}>Washington Wizards</Text>
                    </View>

                </View>
                <Text style={{ ...styles.table_cell_text }}>2</Text>
                <Text style={{ ...styles.table_cell_text }}>1-1</Text>
                <Text style={{ ...styles.table_cell_text }}>1.0</Text>
            </View>
            <View style={{ ...styles.table_row }}>
                <Text style={{ ...styles.table_cell_text }}>4</Text>
                <View style={{ ...styles.table_cell_text, flexGrow: 1, flexDirection: "row" }}>
                    <TeamLogo style={{ width: 23, height: 23, marginHorizontal: 5 }} />
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#3B3B3B" }}>Washington Wizards</Text>
                    </View>

                </View>
                <Text style={{ ...styles.table_cell_text }}>2</Text>
                <Text style={{ ...styles.table_cell_text }}>1-1</Text>
                <Text style={{ ...styles.table_cell_text }}>1.0</Text>
            </View>
            <View style={{ ...styles.table_row }}>
                <Text style={{ ...styles.table_cell_text }}>5</Text>
                <View style={{ ...styles.table_cell_text, flexGrow: 1, flexDirection: "row" }}>
                    <TeamLogo style={{ width: 23, height: 23, marginHorizontal: 5 }} />
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#3B3B3B" }}>Washington Wizards</Text>
                    </View>

                </View>
                <Text style={{ ...styles.table_cell_text }}>2</Text>
                <Text style={{ ...styles.table_cell_text }}>1-1</Text>
                <Text style={{ ...styles.table_cell_text }}>1.0</Text>
            </View>
        </ScrollView>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    scroll_container: {
        // paddingTop: 30
    },
    table_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomColor: "#B9B9B9",
        borderBottomWidth: 1
    },
    table_head_cell: {
        color: "#C7B995",
        fontSize: 10,
        fontWeight: "600",
        paddingVertical: 3,
        paddingHorizontal: 6,
        textTransform: "uppercase"
    },
    table_cell: {
        flex: 1
    },
    table_cell_text: {
        fontSize: 12,
        color: "#3B3B3B",
        fontWeight: "600",
        paddingVertical: 3,
        paddingHorizontal: 6,
    }
});

export default MatchStandingTab;