import { View, Image, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultAvatar from '../../../assets/images/avatars/avatar-1.png';
import BlogCard from "./BlogCard";
import GlobalStyles from "../../../styles/global";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import LiveChatDialog from '../../../components/LiveChatDialog';
const sampleComments = [{
    name: "Albert Ailey",
    time: "1 hour ago",
    likes: 15,
    replise: 15,
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    avatar: DefaultAvatar
}, {
    name: "Albert Ailey",
    time: "1 hour ago",
    likes: 15,
    replise: 15,
    content: "Neque porro quisquam .",
    avatar: DefaultAvatar
}];

const HomeBlogs = () => {
    const [dataArr, setdataArr] = useState([]);
    const navigation = useNavigation();
    const [chatMatch, setChatMatch] = useState(false);
    useEffect(() => {
        firestore()
            .collection('Newpost')
            .orderBy('createdAt', 'asc')    // Sort by timestamp
            .limitToLast(15)
            .onSnapshot(querySnapshot => {
                const postArr = [];
                querySnapshot?.forEach(doc => {
                    const id = doc.id;
                    const data = doc.data();
                    // Add docId and chat data to chats array 
                    postArr.push({ id, ...data });

                });
                setdataArr(postArr);
            });

    }, []);

    return (<View style={{ flex: 1 }}>
        <View style={[GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, styles.appbar]}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ padding: 7, marginRight: 5 }}>
                        <Image source={SidebarIcon} />
                    </View>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Home</Text>
                <View style={{ paddingVertical: 5, flexDirection: "row" }}>
                    <View style={{ marginRight: 7 }}>
                        <Text style={{ color: "white", textAlign: "right", fontSize: 8 }}>BALANCE</Text>
                        <Text style={{ color: "white", textAlign: "right", fontWeight: "600", marginTop: -3, fontSize: 12 }}>12.56</Text>
                    </View>
                    <View style={{ padding: 5, backgroundColor: '#333', borderRadius: 4, marginRight: 10, borderWidth: 2, borderColor: '#555', alignSelf: "flex-start" }}>
                        <Image source={WalletIcon} />
                    </View>
                    <View style={{ paddingVertical: 3 }}>
                        <Image source={SearchIcon} />
                    </View>
                </View>
            </View>
        </View>
        <View style={[{ flex: 1, paddingBottom: 10 }]}>
            <ScrollView style={[styles.defaultPadding, { paddingVertical: 10 }]}>
                {dataArr && (
                    <FlatList
                        data={dataArr}
                        renderItem={({ item }) => <BlogCard key={item.id} Blogdata={item} onLiveChat={() => setChatMatch(true)} />}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                )}
            </ScrollView>
            <LiveChatDialog open={chatMatch != false} onClose={() => setChatMatch(false)} />
        </View>
    </View>);
};

const styles = StyleSheet.create({
    defaultPadding: {
        paddingHorizontal: 21
    },
    appbar: {
        backgroundColor: "#22252A"
    }
});

export default HomeBlogs;