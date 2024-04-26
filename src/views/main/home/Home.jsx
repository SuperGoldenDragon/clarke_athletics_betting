import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import HomeTopbar from "./HomeTopbar";
import PlusIcon from '../../../assets/images/icons/plus-icon.png';
import SortIcon from '../../../assets/images/icons/sort-icon.png';
import SearchField from "../../../components/SearchField";
import HomeMatchCard from "./HomeMatchCard";
import LiveChatDialog from '../../../components/LiveChatDialog';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../../../styles/global';

const Home = (props) => {

    const [chatMatch, setChatMatch] = useState(null);
    const navigation = useNavigation();

    const onSort = () => {
        navigation.navigate("HOME_BLOGS");
    };

    return (<View style={{ flex: 1 }}>
        <View>
            <HomeTopbar />
            <View style={[GlobalStyle.defaultPagePadding, { marginTop: -20 }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18 }}>
                    <Text style={{ color: "#22252A", fontWeight: "bold", paddingTop: 3 }}>SPORTS TALK</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "white", borderColor: "#B9B9B9", borderWidth: 1, paddingHorizontal: 15, borderRadius: 3, paddingVertical: 5, marginRight: 8 }}>
                            <View style={{ padding: 5, marginRight: 5 }}>
                                <Image source={PlusIcon} style={{ width: 10, height: 10 }} />
                            </View>
                            <Text style={{ color: "#3B3B3B" }}>New Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "#B9B9B9", backgroundColor: "white", borderWidth: 1, paddingHorizontal: 7, borderRadius: 3, paddingVertical: 5 }} onPress={() => onSort()}>
                            <View style={{ padding: 5 }}>
                                <Image source={SortIcon} style={{ width: 10, height: 10 }} />
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
                <HomeMatchCard onOpenChat={() => setChatMatch({})} />
                <HomeMatchCard />
                <HomeMatchCard />
                <HomeMatchCard />
                <HomeMatchCard />
                <HomeMatchCard />
            </ScrollView>
        </View >
        <LiveChatDialog open={chatMatch != null} onClose={() => setChatMatch(null)} />
    </View >);
};

export default Home;