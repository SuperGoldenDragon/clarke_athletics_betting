import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import HomeTopbar from "./HomeTopbar";
import PlusIcon from '../../../assets/images/icons/plus-icon.png';
import SortIcon from '../../../assets/images/icons/sort-icon.png';
import SearchField from "../../../components/SearchField";
import LiveChatDialog from '../../../components/LiveChatDialog';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../../../styles/global';
import NavigationContext from '../../../components/NavigationContext';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import BlogCard from './BlogCard';
const Home = () => {
    const [dataArr, setdataArr] = useState([]);
    const [chatID, setchatID] = useState('');
    const navigation = useNavigation();
    const [chatMatch, setChatMatch] = useState(false);
    const [loading, setLoading] = useState(true);
    console.log(chatMatch);
    useEffect(() => {
        firestore()
            .collection('Newpost')
            .orderBy('createdAt', 'asc')    // Sort by timestamp
            .limitToLast(15)
            .onSnapshot(querySnapshot => {
                const postArr = [];
                if (querySnapshot === null) { return }
                else
                    querySnapshot?.forEach(doc => {
                        const id = doc.id;
                        const data = doc.data();
                        // Add docId and chat data to chats array 
                        postArr.push({ id, ...data });
                    });
                setdataArr(postArr);
                // setLoading(false);
            });
    }, []);
    const onSort = () => {
        navigation.navigate("Home Blogs");
    };
    const callpost = () => {
        navigation.navigate('Newchannel');

    };
    const handleLivechat = (channelName) => {
        setChatMatch(true);
        setchatID(channelName);
    }
    return (<View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
            <HomeTopbar />
            <View style={[GlobalStyle.defaultPagePadding/* , { marginTop: -20 } */]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18 }}>
                    <Text style={{ color: "#22252A", fontWeight: "bold", paddingTop: 5, fontSize: 12 }}>SPORTS TALK</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => callpost()} style={{ flexDirection: "row", backgroundColor: "white", borderColor: "#B9B9B9", borderWidth: 1, paddingHorizontal: 15, borderRadius: 3, paddingVertical: 5, marginRight: 8 }}>
                            <View style={{ padding: 5, marginRight: 5 }}>
                                <Image source={PlusIcon} />
                            </View>
                            <Text style={{ color: "#3B3B3B", fontSize: 12, paddingVertical: 2 }}>New Sports Debat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "#B9B9B9", backgroundColor: "white", borderWidth: 1, paddingHorizontal: 7, borderRadius: 3, paddingVertical: 5 }} onPress={() => onSort()}>
                            <View style={{ padding: 5 }}>
                                <Image source={SortIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <SearchField />
                </View>
            </View>
        </View>
        <View style={{ paddingHorizontal: 21, flex: 1, }}>
            <ScrollView>
                {dataArr && (
                    <FlatList
                        data={dataArr}
                        renderItem={({ item }) => <BlogCard key={item.id} Blogdata={item} onLiveChat={() => handleLivechat(item.channelName)} />}
                        showsHorizontalScrollIndicator={true}
                        scrollEnabled={false}
                    />
                )}
            </ScrollView>
        </View >
        <LiveChatDialog open={chatMatch} onClose={() => setChatMatch(false)} active={chatID} />
    </View >);
};

export default Home;