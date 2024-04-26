import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomeIcon from '../assets/images/icons/home-icon.png';
import WagerIcon from '../assets/images/icons/wager-icon.png';
import LeaguesIcon from '../assets/images/icons/leagues-icon.png';
import LiveIcon from '../assets/images/icons/live-icon.png';
import PodcastIcon from '../assets/images/icons/podcast-icon.png';


const Indicator = (props: any) => {
    const { show } = props;
    return <View style={{ flexDirection: "row", justifyContent: "center", opacity: show ? 1 : 0 }}>
        <View style={{ width: 25, padding: 1.5, backgroundColor: "#F8C067", borderRadius: 3 }}></View>
    </View>
};

const BottomNavbar = (props: any) => {

    const { onChange } = props;
    const [selectedTab, setSelectedTab] = useState('HOME');

    const handleTabPress = (tabName: any) => {
        setSelectedTab(tabName);
        onChange(tabName);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('HOME')}>
                <Image source={HomeIcon} style={{ width: 20, height: 20 }} />
                <Text style={[styles.tabText, selectedTab === 'HOME' && styles.activeTabText]}>HOME</Text>
                <Indicator show={selectedTab === "HOME"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('WAGER')}>
                <Image source={WagerIcon} style={{ width: 40, height: 20 }} />
                <Text style={[styles.tabText, selectedTab === 'WAGER' && styles.activeTabText]}>WAGER</Text>
                <Indicator show={selectedTab === "WAGER"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('LEAGUES')}>
                <Image source={LeaguesIcon} style={{ width: 25, height: 20 }} />
                <Text style={[styles.tabText, selectedTab === 'LEAGUES' && styles.activeTabText]}>LEAGUES</Text>
                <Indicator show={selectedTab === "LEAGUES"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('LIVE')}>
                <Image source={LiveIcon} style={{ width: 30, height: 20 }} />
                <Text style={[styles.tabText, selectedTab === 'LIVE' && styles.activeTabText]}>LIVE</Text>
                <Indicator show={selectedTab === "LIVE"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => handleTabPress('PODCAST')}>
                <Image source={PodcastIcon} style={{ width: 20, height: 20 }} />
                <Text style={[styles.tabText, selectedTab === 'PODCAST' && styles.activeTabText]}>PODCAST</Text>
                <Indicator show={selectedTab === "PODCAST"} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        width: '100%',
        position: "absolute",
        bottom: 0,
        left: 0
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTabText: {
        color: '#F8C067',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default BottomNavbar;