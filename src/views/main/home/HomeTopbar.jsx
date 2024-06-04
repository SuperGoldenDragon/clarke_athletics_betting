import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text, FlatList } from "react-native";
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import MaskImage from '../../../assets/images/home-header-mask.png';
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import NewsDefaultLogo from '../../../assets/images/latest-news-temp-image.png';
import GlobalStyle from '../../../styles/global';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import NavigationContext from "../../../components/NavigationContext";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "../../../components/api";
import { BASE_URL } from "../../../components/api";
const sampleNews = [{}, {}, {}];

const HomeTopbar = () => {
    const [Data, SetData] = useState([])
    const NewData = [];
    useEffect(() => {
        axios.get(BASE_URL + '/News', {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY
            },
        }).then((response) => {
            response.data.forEach((row) => {
                const play = [];
                play.push(row.Content);
                NewData.push(row);
                SetData(NewData)
            })
        }
        ).catch(err => {
            console.log(err);
        });
    }, [])
    const parentContext = useContext(NavigationContext);
    const navigation = useNavigation();

    const onToggleSidebar = () => {
        navigation.openDrawer();
    };

    return (<View >
        <ImageBackground source={MaskImage} style={styles.mask} />
        <View style={[styles.container, GlobalStyle.defaultPagePadding, GlobalStyle.defaultAppbarPadding]}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <TouchableOpacity onPress={onToggleSidebar}>
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
            <View style={{ paddingBottom: 60 }}>
                <Text style={{ fontSize: 12, color: "white", marginBottom: 10, fontWeight: "600" }}>LATEST NEWS</Text>
                {Data && (<FlatList
                    data={Data}
                    renderItem={({ item }) => (<View style={{ backgroundColor: "#F7CF68", borderRadius: 10, padding: 3, flexDirection: "row", marginRight: 8 }}>
                        <Image source={NewsDefaultLogo} style={{ width: 86, height: 68, marginRight: 6, borderRadius: 8 }} />
                        <View style={{ padding: 5, width: 200, height: 68 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 7, backgroundColor: "#B18E34", color: "white", fontWeight: 600, paddingHorizontal: 3, borderRadius: 2 }}>{item.Team}</Text>
                                <Text style={{ fontSize: 6, color: "#4B4B4B", paddingRight: 3, paddingLeft: 3, fontWeight: 400 }}>{item.TimeAgo}</Text>
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text numberOfLines={2} ellipsizeMode="tail" style={{ flexWrap: "wrap", fontFamily: "Roboto", fontSize: 10, fontWeight: 900, color: "#1B1B1B" }}>{item.Title}</Text>
                                <Text numberOfLines={2} ellipsizeMode="tail" style={{ flexWrap: "wrap", fontFamily: "Roboto", fontSize: 9, color: "#3C3C3C", }}>{item.Content.substring(0, 90)} </Text>
                            </View>
                        </View>
                    </View>)}
                    keyExtractor={(item, index) => Date.now() + index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: 10 }}
                >
                </FlatList>)}
            </View>
        </View>
    </View >)
};

const styles = StyleSheet.create({
    mask: {
        position: 'absolute', // Ensure ImageBackground covers the entire container
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "contain",
        width: "100%",
        zIndex: 0, // Ensure it's rendered below other components,
        opacity: 0.9
    },
    container: {
        zIndex: 3
    },
    icon: {
        width: 30,
        height: 26
    }
});

export default HomeTopbar;