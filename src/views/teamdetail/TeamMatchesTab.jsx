import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import global from '../../styles/global';
import TeamLogo from '../../components/TeamLogo';
import TeamLogo1 from '../../assets/images/logos/team-logo-1.png';
import TeamLogo2 from '../../assets/images/logos/team-logo-2.png';

const TeamMatchesTab = () => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
                <Text style={styles.date}>9th November,2023 | 16:00</Text>
                <View style={[global.defaultPagePadding, { marginVertical: 10 }]}>
                    <View style={{ borderRadius: 10, borderColor: "#B9B9B9", borderWidth: 1, padding: 12 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <TeamLogo logo={TeamLogo1} style={{}} />
                                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -9 }} />
                            </View>
                            <View>
                                <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#4B4B4B", fontSize: 12, fontWeight: "400" }}>23 Nov,2023 | </Text>
                                    <Text style={{ color: "#B9B9B9", fontSize: 12, fontWeight: "400" }}>Started 11 mins ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.date}>9th November,2023 | 16:00</Text>
                <View style={[global.defaultPagePadding, { marginVertical: 10 }]}>
                    <View style={{ borderRadius: 10, borderColor: "#B9B9B9", borderWidth: 1, padding: 12 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <TeamLogo logo={TeamLogo1} style={{}} />
                                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -9 }} />
                            </View>
                            <View>
                                <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#4B4B4B", fontSize: 12, fontWeight: "400" }}>23 Nov,2023 | </Text>
                                    <Text style={{ color: "#B9B9B9", fontSize: 12, fontWeight: "400" }}>Started 11 mins ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.date}>9th November,2023 | 16:00</Text>
                <View style={[global.defaultPagePadding, { marginVertical: 10 }]}>
                    <View style={{ borderRadius: 10, borderColor: "#B9B9B9", borderWidth: 1, padding: 12 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <TeamLogo logo={TeamLogo1} style={{}} />
                                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -9 }} />
                            </View>
                            <View>
                                <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#4B4B4B", fontSize: 12, fontWeight: "400" }}>23 Nov,2023 | </Text>
                                    <Text style={{ color: "#B9B9B9", fontSize: 12, fontWeight: "400" }}>Started 11 mins ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.date}>9th November,2023 | 16:00</Text>
                <View style={[global.defaultPagePadding, { marginVertical: 10 }]}>
                    <View style={{ borderRadius: 10, borderColor: "#B9B9B9", borderWidth: 1, padding: 12 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <TeamLogo logo={TeamLogo1} style={{}} />
                                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -9 }} />
                            </View>
                            <View>
                                <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#4B4B4B", fontSize: 12, fontWeight: "400" }}>23 Nov,2023 | </Text>
                                    <Text style={{ color: "#B9B9B9", fontSize: 12, fontWeight: "400" }}>Started 11 mins ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.date}>9th November,2023 | 16:00</Text>
                <View style={[global.defaultPagePadding, { marginVertical: 10 }]}>
                    <View style={{ borderRadius: 10, borderColor: "#B9B9B9", borderWidth: 1, padding: 12 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <TeamLogo logo={TeamLogo1} style={{}} />
                                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -9 }} />
                            </View>
                            <View>
                                <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#4B4B4B", fontSize: 12, fontWeight: "400" }}>23 Nov,2023 | </Text>
                                    <Text style={{ color: "#B9B9B9", fontSize: 12, fontWeight: "400" }}>Started 11 mins ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    date: {
        color: "#3C3C3C",
        fontSize: 12,
        fontWeight: "600",
        backgroundColor: "#F5F4F4",
        paddingVertical: 5,
        ...global.defaultPagePadding,
        marginVertical: 10
    },
    teamNames: {
        color: "#22252A",
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 16,
        maxWidth: "70%"
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: '#B9B9B9',
    },
});

export default TeamMatchesTab;