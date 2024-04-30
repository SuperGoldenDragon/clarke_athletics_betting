import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import global from "../../../styles/global";
import PlayerCompareContainer from "./PlayerCompareContainer";

const MatchLineupTab = () => {

    return (<View style={styles.container}>
        <ScrollView style={styles.scrollcontainer}>
            <Text style={styles.text_topplayer}>Top Players</Text>
            <PlayerCompareContainer />
            <PlayerCompareContainer />
            <PlayerCompareContainer />
        </ScrollView>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    scrollcontainer: {
        ...global.defaultPagePadding,
        // paddingVertical: 20
    },
    text_topplayer: {
        textTransform: "uppercase",
        textAlign: "center",
        color: "#22252A",
        fontSize: 12,
        fontWeight: "600",
        paddingVertical: 30
    },
    topline: {
        borderBottomWidth: 1,
        borderBottomColor: "#B9B9B9",
        // borderTop: 0.5
    },
});

export default MatchLineupTab;