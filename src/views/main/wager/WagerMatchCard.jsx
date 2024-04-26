import React, { useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import DetailIocn from '../../../assets/images/icons/detail-icon.png';
import TeamLogo1 from '../../../assets/images/logos/team-logo-1.png';
import TeamLogo2 from '../../../assets/images/logos/team-logo-2.png';
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";

const WagerMatchCard = (props) => {


    const { odd, toMatchDetail } = props;
    const [showDetail, setShowDetail] = useState(false);

    const onGoToDetail = () => {
        toMatchDetail && toMatchDetail({});
    };

    return (<View style={[styles.container, odd && styles.odd_border]}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <SelectDropdown
                data={["Toggle Expand", "Detail"]}
                onSelect={(item, index) => {
                    if (index == 0) setShowDetail(!showDetail);
                    if (index == 1) onGoToDetail();
                }}
                renderButton={() => {
                    return (
                        <View style={[styles.detailDropdownButtonStyle]}>
                            <View style={{ padding: 4 }}>
                                <Image source={DetailIocn} style={{ width: 16, height: 4 }} />
                            </View>
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.detailDropdownItemStyle }}>
                            <Text style={styles.detailDropdownItemTxtStyle}>{item}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.detailDropdownMenuStyle}
            />
            {/* <TouchableOpacity onPress={() => setShowDetail(!showDetail)}>
                <Image source={DetailIocn} style={{ width: 16, height: 4 }} />
            </TouchableOpacity> */}
        </View>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexGrow: 1, width: "32%" }}>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <Image source={TeamLogo1} style={styles.teamLogo} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <Text style={styles.teamName}>Wizards</Text>
                </View>
            </View>
            <View style={{ flexGrow: 1, width: "32%" }}>
                <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800", marginBottom: 12, fontSize: 10 }}>NBA LEAUGE</Text>
                <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800" }}>Tomorrow</Text>
                <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800" }}>16:30</Text>
            </View>
            <View style={{ flexGrow: 1, width: "32%" }}>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <Image source={TeamLogo2} style={styles.teamLogo} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <Text style={styles.teamName}>Atlanta Hawks</Text>
                </View>
            </View>
        </View>
        {
            showDetail && <View>
                <View style={[styles.topline, { flexDirection: "row" }]}>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <View style={styles.first_cell}>
                            <Text style={{ color: "#3C3C3C" }}>Wizards</Text>
                            <Text style={{ color: "#F01313" }}></Text>
                            <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <Text style={styles.second_cell_text}>Money Line</Text>
                    </View>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <View style={styles.third_cell}>
                            <Text style={{ color: "#3C3C3C" }}>Hwaks</Text>
                            <Text style={{ color: "#F01313" }}></Text>
                            <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.topline, { flexDirection: "row" }]}>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <View style={styles.first_cell}>
                            <Text style={{ color: "#3C3C3C" }}>Wizards</Text>
                            <Text style={{ color: "#F01313" }}>-2</Text>
                            <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <Text style={styles.second_cell_text}>Spead</Text>
                    </View>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <View style={styles.third_cell}>
                            <Text style={{ color: "#3C3C3C" }}>Hwaks</Text>
                            <Text style={{ color: "#30E712" }}>+2</Text>
                            <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.topline, { flexDirection: "row" }]}>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <View style={styles.first_cell}>
                            <Text style={{ color: "#3C3C3C" }}>Under</Text>
                            <Text style={{ color: "#F01313" }}>+2</Text>
                            <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                        </View>
                    </View>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <Text style={styles.second_cell_text}>Total</Text>
                    </View>
                    <View style={{ flexGrow: 1, width: "32%" }}>
                        <View style={styles.third_cell}>
                            <Text style={{ color: "#3C3C3C" }}>Hwaks</Text>
                            <Text style={{ color: "#30E712" }}>2</Text>
                            <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                        </View>
                    </View>
                </View>
            </View>
        }
    </View >);
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#B9B9B9",
        marginBottom: 15
    },
    odd_border: {
        borderColor: "#F8C067"
    },
    teamLogo: {
        width: 50,
        height: 50
    },
    teamName: {
        textAlign: "center",
        fontWeight: "600",
        color: "#3C3C3C",
        maxWidth: "55%"
    },
    topline: {
        borderTopColor: "#B9B9B9",
        borderTopWidth: 1,
        paddingVertical: 5
    },
    second_cell_text: {
        fontWeight: "600",
        color: "#3C3C3C",
        textAlign: "center"
    },
    first_cell: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 5,
        backgroundColor: "#F3F6F6",
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    third_cell: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 5,
        backgroundColor: "#FDF0D3",
        paddingHorizontal: 10,
        paddingVertical: 6
    },

    // detail dropdown styles
    detailDropdownButtonStyle: {
        paddingVertical: 5,
        minWidth: 120,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    detailDropdownButtonTxtStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: "#3C3C3C",
        borderWidth: 1,
        borderColor: "red"
    },
    detailDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    detailDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    detailDropdownMenuStyle: {
        backgroundColor: '#eee',
        borderRadius: 8
    },
    detailDropdownItemStyle: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    detailDropdownItemTxtStyle: {
        fontSize: 10,
        fontWeight: '500',
        color: '#3C3C3C',
    }
});

export default WagerMatchCard;