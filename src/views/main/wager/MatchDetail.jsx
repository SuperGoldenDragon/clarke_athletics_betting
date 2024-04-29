import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import PageBackIcon from '../../../assets/images/icons/back-icon-2.png';
import BackIcon from '../../../assets/images/icons/back-icon-white-3.png';
import MatchDetailBg from '../../../assets/images/match-detail-bg.png';
import TeamLogo1 from '../../../assets/images/logos/team-logo-1.png';
import TeamLogo2 from '../../../assets/images/logos/team-logo-2.png';
import { LinearGradient } from 'react-native-linear-gradient';
import MatchDetailTab from "./MatchDetailTab";
import MatchLineupTab from "./MatchLineupTab";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MatchStandingTab from "./MatchStandingTab";
import GlobalStyles from "../../../styles/global";
import TeamLogo from "../../../components/TeamLogo";

const Tab = createMaterialTopTabNavigator();


// Custom tab bar component
const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
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
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <Text style={{ color: isFocused ? '#F7D068' : 'white', paddingVertical: 10, borderBottomColor: "#F7D068", borderBottomWidth: isFocused ? 2 : 0 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </LinearGradient>
    );
};

const MatchDetail = () => {

    const route = useRoute();
    const match = route.params?.match;
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    if (!match) {
        goBack();
    }
    return (
        <NavigationContainer independent={true}>
            <View style={{ flex: 1 }}>
                <View style={[
                    GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, GlobalStyles.appbar, styles.appbar]}>
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
                    <ImageBackground source={MatchDetailBg} style={{ width: "100%", height: "100%", opacity: 0.6, position: "absolute", }} />
                    <View style={[GlobalStyles.defaultPagePadding, { paddingVertical: 20 }]}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexGrow: 1, width: "32%" }}>
                                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                                    <TeamLogo logo={TeamLogo1} style={{ width: 50, height: 50 }} />
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                                    <Text style={styles.teamName}>Wizards</Text>
                                </View>
                            </View>
                            <View style={{ flexGrow: 1, width: "32%" }}>
                                <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "400", marginVertical: 12, fontSize: 14 }}>77:30</Text>
                                <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800", fontSize: 25 }}>2 : 1</Text>
                            </View>
                            <View style={{ flexGrow: 1, width: "32%" }}>
                                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                                    <TeamLogo logo={TeamLogo2} style={{ width: 50, height: 50 }} />
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                                    <Text style={styles.teamName}>Atlanta Hawks</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 15 }}>
                            <View style={[styles.underline, { flexDirection: "row" }]}>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <View style={styles.first_cell}>
                                        <Text style={{ color: "#3C3C3C" }}>Wizards</Text>
                                        <Text style={{ color: "#F01313" }}></Text>
                                        <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                                    </View>
                                </View>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <Text style={styles.second_cell_text}>Money Line</Text>
                                </View>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <View style={styles.third_cell}>
                                        <Text style={{ color: "#3C3C3C" }}>Hwaks</Text>
                                        <Text style={{ color: "#F01313" }}></Text>
                                        <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.underline, { flexDirection: "row" }]}>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <View style={styles.first_cell}>
                                        <Text style={{ color: "#3C3C3C" }}>Wizards</Text>
                                        <Text style={{ color: "#F01313" }}>-2</Text>
                                        <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                                    </View>
                                </View>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <Text style={styles.second_cell_text}>Spead</Text>
                                </View>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <View style={styles.third_cell}>
                                        <Text style={{ color: "#3C3C3C" }}>Hwaks</Text>
                                        <Text style={{ color: "#30E712" }}>+2</Text>
                                        <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.underline, { flexDirection: "row" }]}>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <View style={styles.first_cell}>
                                        <Text style={{ color: "#3C3C3C" }}>Under</Text>
                                        <Text style={{ color: "#F01313" }}>+2</Text>
                                        <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                                    </View>
                                </View>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <Text style={styles.second_cell_text}>Total</Text>
                                </View>
                                <View style={{ flexGrow: 1, width: "32%" }}>
                                    <View style={styles.third_cell}>
                                        <Text style={{ color: "#3C3C3C" }}>Hwaks</Text>
                                        <Text style={{ color: "#30E712" }}>2</Text>
                                        <Text style={{ color: "#3C3C3C" }}>1.25</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="DETAILS">
                        <Tab.Screen name="DETAILS" component={MatchDetailTab} />
                        <Tab.Screen name="LINEUPS" component={MatchLineupTab} />
                        <Tab.Screen name="STANDINGS" component={MatchStandingTab} />
                        <Tab.Screen name="MATCHES" component={MatchLineupTab} />
                    </Tab.Navigator>
                </View>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    appbar: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    teamName: {
        textAlign: "center",
        fontWeight: "600",
        color: "#3C3C3C",
        maxWidth: "55%"
    },
    underline: {
        borderBottomColor: "#B9B9B9",
        borderBottomWidth: 1,
        paddingVertical: 5
    },
    second_cell_text: {
        fontWeight: "600",
        color: "#3C3C3C",
        textAlign: "center"
    },
    first_cell: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 5,
        backgroundColor: "#F3F6F6",
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    third_cell: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 5,
        backgroundColor: "#FDF0D3",
        paddingHorizontal: 10,
        paddingVertical: 6
    },
});

export default MatchDetail;