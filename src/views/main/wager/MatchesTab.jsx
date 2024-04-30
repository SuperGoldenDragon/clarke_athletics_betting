import { StyleSheet, View, ScrollView, Text } from "react-native";
import global from "../../../styles/global";
import TeamLogo from "../../../components/TeamLogo";

const MatchesTab = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ ...global.defaultPagePadding }}>
                <Text style={{ ...styles.text_1 }}>
                    TEAM STREAKS
                </Text>
                <View style={{ ...styles.team_speak_block }}>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>

                    <View style={{ flexGrow: 1, display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ ...global.text_uppercase, fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            losses
                        </Text>
                    </View>
                    <View style={{ display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            4
                        </Text>
                    </View>
                </View>
                <View style={{ ...styles.team_speak_block }}>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>
                    <View style={{ flexGrow: 1, display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ ...global.text_uppercase, fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            losses
                        </Text>
                    </View>
                    <View style={{ display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            4
                        </Text>
                    </View>
                </View>
                <View style={{ ...styles.team_speak_block }}>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>
                    <View style={{ flexGrow: 1, display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ ...global.text_uppercase, fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            losses
                        </Text>
                    </View>
                    <View style={{ display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            4
                        </Text>
                    </View>
                </View>
                <View style={{ ...styles.team_speak_block }}>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>
                    <TeamLogo style={{ width: 21, height: 21 }}></TeamLogo>
                    <View style={{ flexGrow: 1, display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ ...global.text_uppercase, fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            losses
                        </Text>
                    </View>
                    <View style={{ display: "flex", alignSelf: "center", paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: "600", color: "#22252A" }}>
                            4
                        </Text>
                    </View>
                </View>
                <Text style={{ ...styles.text_1 }}>
                    head 2 head streaks
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    team_speak_block: {
        borderColor: "#B9B9B9",
        borderRadius: 5,
        borderWidth: 1,
        padding: 7,
        flexDirection: "row",
        marginBottom: 10
    },
    text_1: {
        color: "#22252A",
        fontWeight: "600",
        ...global.text_center,
        ...global.text_uppercase,
        paddingVertical: 15,
        fontSize: 12
    }
});

export default MatchesTab;