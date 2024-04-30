import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ExpandOpenIcon from '../../../assets/images/icons/expand-open-icon.png';
import ExpandCloseIcon from '../../../assets/images/icons/expand-close-icon.png';
import { useState } from "react";
import global from "../../../styles/global";
import Avatar from "../../../components/Avatar";
const PlayerCompareContainer = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const onToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.player_compare_container}>
            <View style={styles.expand_icon_container}>
                <TouchableOpacity onPress={onToggleExpand}>
                    <Image source={isExpanded ? ExpandCloseIcon : ExpandOpenIcon} style={styles.expand_icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.avatar_container}>
                <View style={{ flexGrow: 1, flexDirection: "row" }}>
                    <View style={{ display: "flex", alignSelf: "center", }}>
                        <Avatar style={styles.avatar} />
                    </View>
                    <View style={{ display: "flex", alignSelf: "center", flexGrow: 1 }}>
                        <Text style={{ fontSzie: 12, color: "#3C3C3C", fontWeight: "700", marginBottom: -5 }}>20.3</Text>
                        <Text style={{ fontSzie: 12, color: "#C7B995" }}>Bradley Beal</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ ...global.text_uppercase, ...global.text_center, fontSize: 10, fontWeight: "600", maxWidth: 100 }}>compare</Text>
                </View>
                <View style={{ flexGrow: 1, flexDirection: "row" }}>
                    <View style={{ display: "flex", alignSelf: "center", flexGrow: 1 }}>
                        <Text style={{ textAlign: "right", fontSzie: 12, color: "#3C3C3C", fontWeight: "700", marginBottom: -5 }}>20.3</Text>
                        <Text style={{ textAlign: "right", fontSzie: 12, color: "#C7B995" }}>Bradley Beal</Text>
                    </View>
                    <View style={{ display: "flex", alignSelf: "center" }}>
                        <Avatar style={styles.avatar} />
                    </View>

                </View>
            </View>
            <View style={{ display: isExpanded ? 'flex' : 'none' }}>
                <View style={{}}>
                    <View style={{ ...styles.topline, ...styles.table_row }}>
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
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    player_compare_container: {
        borderColor: "#F7D068",
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        marginVertical: 7
    },
    expand_icon_container: {
        marginTop: -7,
        flexDirection: "row",
        justifyContent: "center"
    },
    expand_icon: {
        width: 37,
        height: 19
    },
    avatar_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    avatar: {
        width: 35,
        height: 35
    },
    topline: {
        borderTopWidth: 1,
        borderTopColor: "#B9B9B9",
        // borderTop: 0.5
    },
    table_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
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

export default PlayerCompareContainer;