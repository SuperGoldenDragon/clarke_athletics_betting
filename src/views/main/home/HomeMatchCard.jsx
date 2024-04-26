import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import TeamLogo1 from '../../../assets/images/logos/team-logo-1.png';
import TeamLogo2 from '../../../assets/images/logos/team-logo-2.png';
import BackIcon from '../../../assets/images/icons/back-icon-1.png';
import AgreeIcon from '../../../assets/images/icons/agree-icon.png';
import ChatIcon from '../../../assets/images/icons/chat-icon.png';
import BookmarkIcon from '../../../assets/images/icons/bookmark-icon.png';
import DefaultButton from "../../../components/DefaultButton";
import DefaultAvatar from '../../../assets/images/avatars/avatar-1.png';
import TeamLogo from '../../../components/TeamLogo';
import Avatar from '../../../components/Avatar';

const HomeMatchCard = (props) => {

    const { onOpenChat } = props;

    return (<View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
                <TeamLogo logo={TeamLogo1} />
                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -10 }} />
            </View>
            <View>
                <Text style={styles.teamNames}>Toronto Raptors VS Detroit Pistons</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#4B4B4B", fontSize: 12 }}>23 Nov,2023 | </Text>
                    <Text style={{ color: "#B9B9B9", fontSize: 12 }}>Started 11 mins ago</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", flexGrow: 1, justifyContent: "flex-end" }}>
                <TouchableOpacity>
                    <Image source={BackIcon} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.cell_head}>SCORE</Text>
                <Text style={styles.cell_head}>COVER</Text>
                <Text style={styles.cell_head}>OVER/UNDER</Text>
            </View>
            <View style={styles.underline} />
            <View style={styles.row}>
                <Text style={styles.cell}>2-2</Text>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: "green", marginRight: 5, fontWeight: "400" }}>2</Text>
                    <Text style={{ marginRight: 5, fontWeight: "400" }}>:</Text>
                    <Text style={{ color: "red", fontWeight: "400" }}>-2</Text>
                </View>
                <Text style={styles.cell}>160</Text>
            </View>
            <View style={styles.underline} />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={{ flexDirection: "row", marginRight: 50 }}>
                <Image source={AgreeIcon} style={{ marginRight: 5 }} />
                <Text style={{ marginTop: -3 }}>1120</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 50 }}>
                <Image source={ChatIcon} style={{ marginRight: 5 }} />
                <Text style={{ marginTop: -3 }}>50</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 50 }}>
                <Image source={BookmarkIcon} style={{ marginRight: 5 }} />
                <Text style={{ marginTop: -3 }}>100</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", flexGrow: 1 }}>
                <Avatar style={{}} />
                <Avatar style={styles.avatar} />
                <Avatar style={styles.avatar} />
                <Avatar style={styles.avatar} />
                <Avatar style={styles.avatar} />
                <Avatar style={styles.avatar} />
                <Avatar style={styles.avatar} />
                <Text style={[styles.avatar, styles.more_avatar]}>
                    1000 +
                </Text>
            </View>
            <View style={{ paddingTop: 5 }}>
                <DefaultButton onPress={onOpenChat}>View Live Chat</DefaultButton>
            </View>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingVertical: 16,
        width: "100%",
        backgroundColor: '#fff', // Background color of the container
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0, // No horizontal offset
            height: 3, // 2 units of vertical offset
        },
        shadowOpacity: 0.25, // Opacity of the shadow
        shadowRadius: 6, // Radius of the shadow blur
        elevation: 5, // Android shadow elevation (ignored on iOS)
        borderColor: "#eee",
        borderWidth: 2,
        marginBottom: 10
    },
    teamNames: {
        color: "#22252A",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 16,
        maxWidth: "70%"
    },
    table: {
        marginBottom: 10, // Optional: Add margin bottom for spacing
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    cell_head: {
        flex: 1,
        textAlign: 'center',
        fontWeight: "700",
        color: "#3C3C3C",
        fontSize: 12
    },
    cell: {
        flex: 1,
        color: "#3C3C3C",
        textAlign: "center",
        fontWeight: "400"
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: '#B9B9B9',
    },
    avatar: {
        marginLeft: -10
    },
    more_avatar: {
        backgroundColor: "#D9D9D9",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 10,
        paddingVertical: 12,
        textAlign: "center",
        fontWeight: "700"
    }
});

export default HomeMatchCard;