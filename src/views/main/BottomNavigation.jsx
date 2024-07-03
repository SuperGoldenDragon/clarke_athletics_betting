import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import Home from './home/Home';
import Wager from './wager/Wager';
import Leagues from './leagues/Leagues';
import Trend from './Trend/Trends';
import Podcast from './podcast/Podcast';
import HomeIcon from '../../assets/images/icons/home-icon.png';
import WagerIcon from '../../assets/images/icons/wager-icon.png';
import LeaguesIcon from '../../assets/images/icons/leagues-icon.png';
// import LiveIcon from '../../assets/images/icons/live-icon.png';
import LiveIcon from '../../assets/images/icons/live.png';
import PodcastIcon from '../../assets/images/icons/podcast-icon.png';
import TeamDetail from '../teamdetail/TeamDetail';


const navIcons = [{ icon: HomeIcon, width: 16.72, height: 17.58 },
{ icon: WagerIcon, width: 35, height: 17 },
{ icon: LeaguesIcon, width: 25, height: 17 },
{ icon: LiveIcon, width: 24, height: 18 },
{ icon: PodcastIcon, width: 17, height: 17 }
];

const Tab = createBottomTabNavigator();

// Custom tab bar component
const CustomTabBar = (props) => {
    const { state, descriptors, navigation } = props;

    return (
        <View
            style={{
                flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
                borderTopColor: "#ddd", borderTopWidth: 2, paddingVertical: 7,
                backgroundColor: "white"
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

                const iconObj = navIcons[index];

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        {iconObj.icon && <Image source={iconObj.icon} style={{ width: iconObj.width, height: iconObj.height }} />}
                        <Text style={{ color: isFocused ? '#F7D068' : '#22252A', paddingVertical: 3, fontSize: 12 }}>
                            {label}
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", opacity: isFocused ? 1 : 0 }}>
                            <View style={{ width: 25, padding: 1.5, backgroundColor: "#F8C067", borderRadius: 3 }}></View>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const BottomNavigation = () => {

    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="LEAGUE" >
            <Tab.Screen name="HOME" component={Home} options={{ headerShown: false }} /* initialParams={{ parentNavigate: navigation.navigate }} */ />
            <Tab.Screen name="WAGER" component={Wager} options={{ headerShown: false }} />
            <Tab.Screen name="LEAGUE" component={Leagues} options={{ headerShown: false }} />
            <Tab.Screen name="TRENDS" component={Trend} options={{ headerShown: false }} />
            <Tab.Screen name="PODCAST" component={Podcast} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};


export default BottomNavigation;