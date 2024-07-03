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
import DefaultAvatar from '../../../assets/images/avatars/avatar-1.png';
import CommentCard from './CommentCard';
import SelectDropdown from 'react-native-select-dropdown';
import firestore from '@react-native-firebase/firestore';
import TeamLogo from '../../../components/TeamLogo';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const BlogCard = (props) => {
    const { Blogdata } = props;
    const { onLiveChat, isChat, isAgree, noChat, comments, scoreTable, onValue } = props;
    const { channelName, image_A_Uri, image_B_Uri, owner, count, id } = Blogdata;
    const [chatLen, setChatLen] = useState(0);
    const [_count, setCount] = useState(count);
    const [_data, setData] = useState([]);
    const splitWords = channelName.split('  ');
    const addCount = async () => {
        setCount(_count + 1);
        UpdateCount(id, _count);
    }
    const UpdateCount = async (id, data) => {
        firestore()
            .collection("Newpost")
            .doc(id)
            .update({
                count: data + 1
            }).then(() => {
                console.log("Document update successfully!");
            }).catch((error) => {
                console.log("Error", error);
            })
    }
    const _getChatLength = async (name) => {
        firestore()
            .collection('chats')
            .where('channelName', '==', name)
            .orderBy('createdAt', 'asc')
            .limitToLast(15)
            .onSnapshot(querySnapshot => {
                let chatsArr = [];
                if (querySnapshot === null) return;
                querySnapshot?.forEach(doc => {
                    const id = doc.id;
                    const data = doc.data();
                    chatsArr.push({ id, ...data });
                });
                setChatLen(chatsArr.length);
                setData(chatsArr);
            });
    }
    useEffect(() => {
        _getChatLength(channelName);
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                {/* <View style={{ flexDirection: "row", marginRight: 10 }}>
                <Image src={image_A_Uri} style={{ width: 30, height: 30, }} />
                <Image src={image_B_Uri} style={{ width: 30, height: 30, marginLeft: -9 }} />
            </View> */}
                <View style={{ flexGrow: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', paddingLeft: 5 }}>
                    <Text style={[styles.teamNames, { fontSize: 30 }]}>{splitWords[0]} </Text>
                    <Text style={[styles.teamNames, { borderBottomWidth: 1, borderColor: '#26272B', fontSize: 30 }]}>{splitWords[1]} </Text>
                    <Text style={[styles.teamNames, { fontSize: 30 }]}> {splitWords[2]}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center', paddingTop: 5, borderBottomWidth: 1, borderColor: '#26272B', marginHorizontal: 100 }}>
                <View style={{ paddingHorizontal: 27, borderRightWidth: 1, paddingBottom: 5, }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center', fontSize: 18 }]}>Final</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center', fontSize: 18 }]}>ODDS</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, paddingBottom: 5, }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center', fontSize: 18 }]}>Final</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center', fontSize: 18 }]}>Results</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ borderColor: '#26272B', paddingHorizontal: 30, borderRightWidth: 1, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ borderColor: '#26272B', paddingHorizontal: 30, borderRightWidth: 1, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ borderColor: '#26272B', paddingHorizontal: 30, borderRightWidth: 1, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center' }}>
                <View style={{ borderColor: '#26272B', paddingHorizontal: 30, borderRightWidth: 1, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#26272B', marginHorizontal: 40 }}>
                <View style={{ borderColor: '', paddingHorizontal: 30, borderRightWidth: 1, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 5 }}>
                    <View style={{}}>
                        <Text style={[styles.teamNames, { textAlign: 'center' }]}>Final</Text>
                    </View>
                </View>
            </View>
            {!scoreTable && <View style={[styles.underline, { flexDirection: "row", marginBottom: 10, paddingVertical: 5 }]}>
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
                    <TouchableOpacity onPress={() => addCount()}>
                        <Image source={isAgree ? AgreeFilledIcon : AgreeIcon} style={{ marginRight: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: -3 }}>{_count}</Text>
                </View>
                <View style={{ flexDirection: "row", marginRight: 50 }}>
                    <Image source={isChat ? ChatFilledIcon : ChatIcon} style={{ marginRight: 5 }} />
                    <Text style={{ marginTop: -3 }}>{chatLen}</Text>
                </View>
                <View style={{ flexDirection: "row", marginRight: 50 }}>
                    <Image source={BookmarkIcon} style={{ marginRight: 5 }} />
                    <Text style={{ marginTop: -3 }}>100</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: "row" }}>

                    <View style={{ flexDirection: "row", flexGrow: 1 }}>
                        {_data.length > 0 ? _data.slice(0, 7).map((row, index) => (
                            <Image
                                key={index}
                                source={{ uri: row.imageUrl }}
                                style={[styles.default_avatar, { borderRadius: 64, marginLeft: index === 0 ? 0 : -10 }]}
                            />
                        )) : (<Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : { width: 30, height: 30 }} />)}
                        {/* <Image resizeMode='contain' source={DefaultAvatar} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={styles.default_avatar} /> */}
                        {/* <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : { width: 30, height: 30 }} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <Image resizeMode='contain' source={DefaultAvatar} style={noChat ? styles.no_chat_avatar : styles.default_avatar} />
                    <View style={noChat ? styles.no_chat_avatar : styles.default_avatar}>
                        <Text style={[{ width: 30, height: 30 }, styles.more_avatar]}>
                            1000 +
                        </Text>
                    </View> */}

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
        // maxWidth: "70%",
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: '#B9B9B9',
    },
    no_chat_avatar: {
        flexGrow: 1,
        width: 30,
        height: 30
    },
    default_avatar: {
        marginLeft: -10,
        width: 30,
        height: 30
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