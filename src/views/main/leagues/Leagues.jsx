import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native'; // Import StatusBar
import LeaguesHeader from '../../../assets/images/leagues-header.png';
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import global from '../../../styles/global';
import LeaguesMatchTypeBlock from './LeaguesMatchTypeBlock';
import { useNavigation } from '@react-navigation/native';

const Leagues = () => {

    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const navigation = useNavigation();


    const handleImageLoad = (event) => {
        const { width, height } = event.nativeEvent.source;
        const screenWidth = Dimensions.get('window').width;
        const aspectRatio = width / height;
        const imageWidth = screenWidth;
        const imageHeight = screenWidth / aspectRatio;
        setImageSize({ width: imageWidth, height: imageHeight });
    };

    return (
        <View style={styles.container}>
            <View style={[global.defaultPagePadding, global.defaultAppbarPadding, styles.appbar]}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <View style={{ padding: 7, marginRight: 5 }}>
                            <Image source={SidebarIcon} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Leagues</Text>
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
            <Image source={LeaguesHeader} resizeMethod='contain' style={{ ...imageSize }}
                onLoad={handleImageLoad}></Image>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ ...global.defaultPagePadding, }}>
                    <LeaguesMatchTypeBlock name={"No parlay"} odd={true} onPress={() => navigation.navigate("Leagues Match")} />
                    <LeaguesMatchTypeBlock name={"Wager match"} />
                    <LeaguesMatchTypeBlock name={"king of prop"} odd={true} />
                    <LeaguesMatchTypeBlock name={"fantasy baseball"} />
                    <LeaguesMatchTypeBlock name={"king of prop"} odd={true} />
                    <LeaguesMatchTypeBlock name={"fantasy baseball"} />
                    <LeaguesMatchTypeBlock name={"king of prop"} odd={true} />
                    <LeaguesMatchTypeBlock name={"fantasy baseball"} />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: "#22252A"
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

export default Leagues;