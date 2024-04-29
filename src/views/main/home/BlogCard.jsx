import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import TeamLogo1 from '../../../assets/images/logos/team-logo-1.png';
import TeamLogo2 from '../../../assets/images/logos/team-logo-2.png';
import BackIcon from '../../../assets/images/icons/back-icon-1.png';
import AgreeIcon from '../../../assets/images/icons/agree-icon.png';
import ChatIcon from '../../../assets/images/icons/chat-icon.png';
import BookmarkIcon from '../../../assets/images/icons/bookmark-icon.png';
import DefaultTextButton from "../../../components/DefaultTextButton";
import ChatFilledIcon from '../../../assets/images/icons/chat-filled-icon.png'
import AgreeFilledIcon from '../../../assets/images/icons/agree-filled-icon.png'
import Avatar from '../../../components/Avatar';
import CommentCard from './CommentCard';
import SelectDropdown from 'react-native-select-dropdown';
import TeamLogo from '../../../components/TeamLogo';



const BlogCard = (props) => {
    const { onLiveChat, isChat, isAgree, noChat, comments, scoreTable } = props;

    return (<View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
                <TeamLogo logo={TeamLogo1} style={{}} />
                <TeamLogo logo={TeamLogo2} style={{ marginLeft: -9 }} />
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
                    <Image source={BackIcon} style={{ width: 20, height: 16 }} />
                </TouchableOpacity>
            </View>
        </View>
        {!scoreTable && <View style={[styles.underline, { flexDirection: "row", marginBottom: 10, paddingVertical: 5 }]}>
            <Text style={{ fontWeight: "700" }}>SCORE -</Text>
            <Text> 2 - 2</Text>
        </View>}
        {scoreTable && <View style={styles.table}>
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
        </View>}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={{ flexDirection: "row", marginRight: 50 }}>
                <Image source={isAgree ? AgreeFilledIcon : AgreeIcon} style={{ marginRight: 5 }} />
                <Text style={{ marginTop: -3 }}>1120</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 50 }}>
                <Image source={isChat ? ChatFilledIcon : ChatIcon} style={{ marginRight: 5 }} />
                <Text style={{ marginTop: -3 }}>50</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 50 }}>
                <Image source={BookmarkIcon} style={{ marginRight: 5 }} />
                <Text style={{ marginTop: -3 }}>100</Text>
            </View>
        </View>
        <View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", flexGrow: 1 }}>
                    <Avatar style={noChat ? styles.no_chat_avatar : {}} />
                    <Avatar style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Avatar style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Avatar style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Avatar style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Avatar style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Avatar style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <View style={noChat ? styles.no_chat_avatar : styles.default_avatar}>
                        <Text style={[{ width: 30, height: 30 }, styles.more_avatar]}>
                            1000 +
                        </Text>
                    </View>

                </View>
                {
                    !noChat && <View style={{ paddingTop: 5 }}>
                        <DefaultTextButton onPress={onLiveChat}>View Live Chat</DefaultTextButton>
                    </View>
                }
            </View>
        </View>
        {
            comments && comments.length > 0 && <View style={{ borderTopColor: "#B9B9B9", borderTopWidth: 1, marginVertical: 10, paddingTop: 24 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }}>
                    <Text style={{ fontWeight: "400" }}>COMMENTS</Text>
                    <SelectDropdown
                        data={["Most Recent", "High high hish"]}
                        onSelect={(item) => { }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={[styles.dropdownButtonStyle]}>
                                    <Text style={[styles.dropdownButtonTxtStyle, { flexGrow: 1, paddingHorizontal: 5 }]}>
                                        {selectedItem || 'MOST RECENT'}
                                    </Text>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#eee' }) }}>
                                    <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                </View>
                {
                    comments.map((comment, index) => (<CommentCard key={index} comment={comment} />))
                }
            </View>
        }

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
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: '#B9B9B9',
    },
    no_chat_avatar: {
        flexGrow: 1
    },
    default_avatar: {
        marginLeft: -10
    },
    more_avatar: {
        backgroundColor: "#D9D9D9",
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 8,
        paddingVertical: 9,
        textAlign: "center",
        fontWeight: "700",
        alignSelf: "flex-start"
    },

    dropdownButtonStyle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#EDEDED",
        borderRadius: 6
    },
    dropdownButtonTxtStyle: {
        fontSize: 10,
        fontWeight: '500',
        textAlign: "left",
        color: "#3C3C3C"
    },
    dropdownButtonArrowStyle: {
        fontSize: 10,
    },
    dropdownMenuStyle: {
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 10,
        fontWeight: '500'
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
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
});

export default BlogCard;