/*WAGER/TOP PLAYERS*/
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import global from "../../styles/global";
import SortIcon from '../../assets/images/icons/sort-icon.png';
import PlayerAvatar from '../../assets/images/avatars/avatar-2.png';
import SearchField from "../../components/SearchField";

const TeamTopPlayersTab = () => {
    return (<View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView style={{ ...global.defaultPagePadding }}>
            <View style={{ flexDirection: "row", display: "flex", marginVertical: 20 }}>
                <View style={{ flexGrow: 1, marginRight: 20 }}>
                    <SearchField />
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderRadius: 5, borderColor: "#EDEDED" }}>
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <Image source={SortIcon} />
                        </View>
                        <Text style={{ color: "#22252A", fontSize: 12 }}>Filters</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.RatingFomat}>
                <Text style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: 12, lineHeight: 14.06, color: "#22252A" }}>AVG WHATAWAGER RATING</Text>
                <View style={[styles.PlayerArea, styles.underline, { justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={PlayerAvatar}></Image>
                        <View style={{ marginLeft: 10, padding: 3 }}>
                            <Text style={styles.PlayerName}>Mariono Puki</Text>
                            <View style={styles.InformationArea}>
                                <Text style={styles.PlayerInfo}>Coach</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#F7D068" }]}>8.5</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.PlayerArea, styles.underline, { justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={PlayerAvatar}></Image>
                        <View style={{ marginLeft: 10, padding: 3 }}>
                            <Text style={styles.PlayerName}>Mariono Puki</Text>
                            <View style={styles.InformationArea}>
                                <Text style={styles.PlayerInfo}>Coach</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#F7D068" }]}>6.5</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.PlayerArea, { paddingBottom: 5, justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={PlayerAvatar}></Image>
                        <View style={{ marginLeft: 10, padding: 3 }}>
                            <Text style={styles.PlayerName}>Mariono Puki</Text>
                            <View style={styles.InformationArea}>
                                <Text style={styles.PlayerInfo}>Coach</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#F7D068" }]}>6</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.GoalsFomat]}>
                <Text style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: 12, lineHeight: 14.06, color: "#22252A" }}>GOALS</Text>
                <View style={[styles.PlayerArea, styles.underline, { justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={PlayerAvatar}></Image>
                        <View style={{ marginLeft: 10, padding: 3 }}>
                            <Text style={styles.PlayerName}>Mariono Puki</Text>
                            <View style={styles.InformationArea}>
                                <Text style={styles.PlayerInfo}>Coach</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>8.5</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.PlayerArea, styles.underline, { justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={PlayerAvatar}></Image>
                        <View style={{ marginLeft: 10, padding: 3 }}>
                            <Text style={styles.PlayerName}>Mariono Puki</Text>
                            <View style={styles.InformationArea}>
                                <Text style={styles.PlayerInfo}>Coach</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>6.5</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.PlayerArea, { paddingBottom: 5, justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={PlayerAvatar}></Image>
                        <View style={{ marginLeft: 10, padding: 3 }}>
                            <Text style={styles.PlayerName}>Mariono Puki</Text>
                            <View style={styles.InformationArea}>
                                <Text style={styles.PlayerInfo}>Coach</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.SubText, { backgroundColor: "#EDEDED" }]}>6</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    </View >)
};
export default TeamTopPlayersTab;

const styles = StyleSheet.create({
    RatingFomat: {
        padding: 18,
        borderWidth: 1,
        borderColor: "#F8C067",
        borderRadius: 10
    },
    PlayerName: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 11.54
    },
    PlayerArea: {
        paddingTop: 20,
        flexDirection: "row",
    },
    PlayerInfo: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.06
    },
    FlagImage: {
        maxHeight: 14,
        maxWidth: 14,
        marginHorizontal: 5
    },
    underline: {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#B9B9B9"
    },
    GoalsFomat: {
        marginVertical: 30,
        padding: 18,
        borderWidth: 1,
        borderColor: "#B9B9B9",
        borderRadius: 10
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
    }
})