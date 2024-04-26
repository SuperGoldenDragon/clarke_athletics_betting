import { ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyle from "../../../styles/global";
import TeamLogo from "../../../components/TeamLogo";
import TeamLogo1 from '../../../assets/images/logos/team-logo-1.png';
import Flag from "../../../components/Flag";


const MatchDetailTab = () => {
    return (<View style={[styles.container]}>
        <ScrollView style={[GlobalStyle.defaultPagePadding]}>
            <View style={{ paddingVertical: 20 }}>
                <View style={[styles.pre_matching, styles.content]}>
                    <Text style={styles.content_title}>PRE-MATCH STANDINGS</Text>
                    <View style={[styles.row, styles.underline]}>
                        <Text style={[styles.cell_head, { paddingHorizontal: 7 }]}>
                            #
                        </Text>
                        <Text style={[styles.cell_head, { paddingHorizontal: 7 }]}>
                            TEAM
                        </Text>
                        <Text style={[styles.cell_head, { flexGrow: 1, textAlign: "right", paddingHorizontal: 10 }]}>
                            LATEST
                        </Text>
                        <Text style={[styles.cell_head, { paddingHorizontal: 7 }]}>
                            W-L
                        </Text>
                    </View>
                    <View style={[styles.row]}>
                        <Text style={[styles.cell, { padding: 7 }]}>
                            10
                        </Text>
                        <View style={[styles.cell]}>
                            <TeamLogo logo={TeamLogo1} />
                        </View>
                        <View style={[styles.cell, { flexGrow: 1, paddingVertical: 3, paddingHorizontal: 7 }]}>
                            <View style={[styles.LWbar]}>
                                <Text style={styles.L}>L</Text>
                                <Text style={styles.W}>W</Text>
                            </View>
                        </View>
                        <Text style={[styles.cell, { padding: 7 }]}>
                            1-1
                        </Text>
                    </View>
                    <View style={[styles.row]}>
                        <Text style={[styles.cell, { padding: 7 }]}>
                            11
                        </Text>
                        <View style={[styles.cell]}>
                            <TeamLogo />
                        </View>
                        <View style={[styles.cell, { flexGrow: 1, paddingVertical: 3, paddingHorizontal: 7 }]}>
                            <View style={[styles.LWbar]}>
                                <Text style={styles.L}>L</Text>
                                <Text style={styles.L}>L</Text>
                                <Text style={styles.W}>W</Text>
                            </View>
                        </View>
                        <Text style={[styles.cell, { padding: 7 }]}>
                            1-1
                        </Text>
                    </View>
                </View>
                <View style={[styles.content]}>
                    <Text style={styles.content_title}>MATCH INFORMATION</Text>
                    <View style={[styles.underline, { flexDirection: "row", paddingVertical: 7 }]}>
                        <Text style={{ fontSize: 12, color: "#22252A", marginRight: "auto" }}>Venue</Text>
                        <Text style={{ fontSize: 12, color: "#22252A" }}>State farm arena</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 7 }}>
                        <Text style={{ fontSize: 12, color: "#22252A", marginRight: "auto" }}>Location</Text>
                        <Flag style={{ marginHorizontal: 5 }} />
                        <Text style={{ fontSize: 12, color: "#22252A" }}>Atlanta,USA</Text>
                    </View>
                </View>
                <Text style={[styles.content_title]}>TEAM STATISTICS</Text>
                <View style={[styles.statistics, styles.content]}>

                </View>
            </View>
        </ScrollView>
    </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    pre_matching: {
        borderWidth: 1,
        borderColor: "#F8C067",
        borderRadius: 10,
    },
    statistics: {
        borderWidth: 1,
        borderColor: "#F8C067",
        borderRadius: 10,
    },
    content: {
        padding: 15
    },
    content_title: {
        fontSize: 12,
        fontWeight: "700",
        color: "#22252A",
        textAlign: "center",
        marginVertical: 10
    },
    underline: {
        borderBottomColor: "#B9B9B9",
        borderBottomWidth: 1
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    cell_head: {
        textAlign: 'center',
        fontWeight: "600",
        color: "#C7B995",
        fontSize: 10
    },
    cell: {
        color: "#3B3B3B",
        textAlign: "center",
        fontWeight: "400",
        fontSize: 12
    },
    LWbar: {
        backgroundColor: "#F3F6F6",
        borderRadius: 5,
        flexDirection: "row"
    },
    L: {
        color: "white",
        backgroundColor: "#F01313",
        paddingVertical: 4,
        paddingHorizontal: 9,
        borderRadius: 4,
        fontSize: 12
    },
    W: {
        color: "white",
        backgroundColor: "#30E712",
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 4,
        fontSize: 12
    }
});

export default MatchDetailTab;