import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import logo from '../../../assets/images/logos/logobutton.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TeamDetailsTab from '../../teamdetail/TeamDetailsTab';
const Podcast = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const Tab = createMaterialTopTabNavigator();
    const togglePlayPause = () => {
        setIsPlaying(prevState => !prevState);
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', }}>
            <View style={[styles.videoContainer, { justifyContent: 'center' }]}>
                <TouchableWithoutFeedback onPress={togglePlayPause}>
                    <Video
                        ref={videoRef}
                        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Example video URL
                        style={styles.video}
                        paused={isPlaying}
                        resizeMode="contain"
                        controls={true}
                    />
                </TouchableWithoutFeedback>
            </View>
            <LinearGradient colors={['#22252A', '#4B4B4B']}>
                <View style={{ width: '100%', height: 40, flexDirection: 'row', flexGrow: 1 }}>
                    <View style={{ flex: 1, paddingHorizontal: 2 }}>
                        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="Standings">
                            <Tab.Screen name="Big Wins" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Bad Beats" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Team Rant" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Daily Wager" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Book Recap" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Interviews" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Yesterday’s Games" component={WeeklyHistoryTab} />
                            <Tab.Screen name="League MVP" component={WeeklyHistoryTab} />
                            <Tab.Screen name="Open Book" component={WeeklyHistoryTab} />
                        </Tab.Navigator>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};
const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ width: "100%", flexDirection: 'row' }}>
            <LinearGradient colors={['#22252A', '#4B4B4B']}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Image source={logo} style={{ width: 40, height: 40 }} />
                </View>
            </LinearGradient>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <LinearGradient
                    colors={['#22252A', '#4B4B4B']}
                    start={{ x: 0, y: 0 }} // Vertical gradient, start from top
                    end={{ x: 0, y: 1 }} // Vertical gradient, end at bottom
                    style={{
                        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
                    }}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                style={{ flex: 1, alignItems: 'center', marginHorizontal: 20 }}
                            >
                                <Text style={{ color: isFocused ? '#F7D068' : 'white', paddingVertical: 10, borderBottomColor: "#F7D068", borderBottomWidth: isFocused ? 2 : 0 }}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </LinearGradient>
            </ScrollView>
        </View>
    );
};
const WeeklyHistoryTab = () => {
    const tableData = [
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' },
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' },
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' },
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' },
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' },
        { name: '$14(+100%) W2 L3', age: 'FAVORITE', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'OVER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'UNDER', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'TOTAL', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PLAYER PROP', location: '$14(+100%) W2 L3' },
        { name: '$14(+100%) W2 L3', age: 'PARLAY', location: '$14(+100%) W2 L3' },
        { name: '$100(+100%) W10 L8', age: '|', location: '$100(+100%) W10 L8' }
    ];
    return (
        <View style={[{ backgroundColor: 'white' }]}>
            <View style={{ flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', paddingHorizontal: 2, }}>
                <View style={{ borderRightWidth: 1, backgroundColor: '#F7D068', borderColor: '#B9B9B9', height: 'auto', width: '50%' }}>
                    <TouchableOpacity >
                        <Text style={{ textAlign: 'center', fontSize: 15, paddingVertical: 3, color: 'black' }}>Field</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderLeftWidth: 1, backgroundColor: '#F7D068', borderColor: '#B9B9B9', height: 'auto', width: '50%' }}>
                    <TouchableOpacity >
                        <Text style={{ textAlign: 'center', fontSize: 15, paddingVertical: 3, color: 'black' }}>H2H</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    {tableData.map((rowData, index) => (
                        <View key={index} style={styles.row}>
                            <Text>{rowData.age}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View >
    );
};
const styles = StyleSheet.create({
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.95,
        // Ensure the video takes up the full height of the container
    },
    videoContainer: {
        width: '100%',
        height: '35%',
    },
    controls: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    playButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 25,
        padding: 10,
    },
    appbar: {
        backgroundColor: "#22252A"
    },
});
export default Podcast;