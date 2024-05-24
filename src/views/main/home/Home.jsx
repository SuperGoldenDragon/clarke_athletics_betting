import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import HomeTopbar from "./HomeTopbar";
import PlusIcon from '../../../assets/images/icons/plus-icon.png';
import SortIcon from '../../../assets/images/icons/sort-icon.png';
import SearchField from "../../../components/SearchField";
import LiveChatDialog from '../../../components/LiveChatDialog';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../../../styles/global';
import NavigationContext from '../../../components/NavigationContext';
import BlogCard from './BlogCard';


const Home = () => {

    const navigation = useNavigation();
    const [chatMatch, setChatMatch] = useState(null);

    const onSort = () => {
        navigation.navigate("Home Blogs");
    };

    return (<View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
            <HomeTopbar />
            <View style={[GlobalStyle.defaultPagePadding/* , { marginTop: -20 } */]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18 }}>
                    <Text style={{ color: "#22252A", fontWeight: "bold", paddingTop: 5, fontSize: 12 }}>SPORTS TALK</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "white", borderColor: "#B9B9B9", borderWidth: 1, paddingHorizontal: 15, borderRadius: 3, paddingVertical: 5, marginRight: 8 }}>
                            <View style={{ padding: 5, marginRight: 5 }}>
                                <Image source={PlusIcon} />
                            </View>
                            <Text style={{ color: "#3B3B3B", fontSize: 12, paddingVertical: 2 }}>New Post</Text>
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
                <BlogCard onLiveChat={_ => setChatMatch({})} />
                {/* <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard /> */}
            </ScrollView>
        </View >
        <LiveChatDialog open={chatMatch != null} onClose={() => setChatMatch(null)} />

    </View >);
};

export default Home;