import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, ImageBackground } from 'react-native';
import PageBackIcon from '../../assets/images/icons/back-icon-2.png';
import BackIcon from '../../assets/images/icons/back-icon-white-3.png';
import global from '../../styles/global';
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TeamDetailsTab from './TeamDetailsTab';
import TeamLogo from '../../components/TeamLogo';
import DefaultLogo from '../../assets/images/logos/team-logo-1.png';
import { BlurView } from '@react-native-community/blur';

const Tab = createMaterialTopTabNavigator();


// Custom tab bar component
const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ width: "100%" }}>
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

const TeamDetail = () => {

    const navigation = useNavigation();

    const goBack = () => {
        try {
            navigation.goBack();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <NavigationContainer independent={true}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={[global.defaultPagePadding, global.defaultAppbarPadding, global.appbar, styles.appbar]}>
                    <View >
                        <TouchableOpacity onPress={goBack}>
                            <View style={{ paddingVertical: 12.5, marginRight: 15 }}>
                                <Image source={PageBackIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={{ paddingVertical: 12 }}>
                                <Image source={BackIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <View style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%", flexDirection: "row", justifyContent: "center" }}>
                        <LinearGradient
                            colors={['#ffc950', '#FDF0D3', '#ffc950']}
                            start={{ x: 0, y: 0 }} // Vertical gradient, start from top
                            end={{ x: 0, y: 1 }} // Vertical gradient, end at bottom>
                            style={{ position: "absolute", zIndex: -10, width: "100%", height: "100%", flexDirection: "row", justifyContent: "center", opacity: 0.1 }}
                        >
                        </LinearGradient>
                        <ImageBackground source={DefaultLogo} resizeMode="cover" style={{ width: "100%", height: "auto" }} />
                        <BlurView
                            blurType="xlight"
                            blurAmount={6}
                            blurRadius={4}
                            style={{ position: "absolute", width: "100%", height: "100%", opacity: 1 }}
                            reducedTransparencyFallbackColor="#FDF0D3"
                        >
                        </BlurView>
                    </View>

                    {/* <LinearGradient
                        colors={['#FDF0D3', '#F3D9A9', '#FDF0D3']}
                        start={{ x: 0, y: 0 }} // Vertical gradient, start from top
                        end={{ x: 0, y: 1 }} // Vertical gradient, end at bottom>
                        style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%", flexDirection: "row", justifyContent: "center", opacity: 0.3 }}
                    >
                    </LinearGradient> */}

                    <View style={{ paddingHorizontal: 35, paddingVertical: 20, flexDirection: "row" }}>
                        <TeamLogo style={{ width: 70, height: 70, marginRight: 20 }} />
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <Text style={{ fontSize: 17, fontWeight: "700", color: "#3C3C3C" }}>Washington Wizards</Text>
                            <Text style={{ fontSize: 12, fontWeight: "400", color: "#3C3C3C" }}>Washington DC</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="DETAILS" >
                        <Tab.Screen name="DETAILS" component={TeamDetailsTab} />
                        <Tab.Screen name="STANDINGS" component={TeamDetailsTab} />
                        <Tab.Screen name="MATCHES" component={TeamDetailsTab} />
                        <Tab.Screen name="SQUAD" component={TeamDetailsTab} />
                        <Tab.Screen name="TOP PLAYERS" component={TeamDetailsTab} />
                        <Tab.Screen name="STATISTICS" component={TeamDetailsTab} />
                    </Tab.Navigator>
                </View>
            </View>
        </NavigationContainer >
    );
};


const styles = StyleSheet.create({
    appbar: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default TeamDetail;