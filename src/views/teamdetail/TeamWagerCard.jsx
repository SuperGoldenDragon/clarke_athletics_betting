import React, { useContext, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import DetailIocn from '../../assets/images/icons/detail-icon.png';
import TeamLogo1 from '../../assets/images/logos/team-logo-1.png';
import TeamLogo2 from '../../assets/images/logos/team-logo-2.png';
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavigationContext from "../../components/NavigationContext";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import axios from "axios";
import { API_KEY } from "../../components/api";
import { BASE_URL } from "../../components/api";
import { SvgUri } from 'react-native-svg';
const TeamWagerCard = (props) => {
    const { odd, AwayTeam, HomeTeam, DateTime } = props;
    const [showDetail, setShowDetail] = useState(false);
    const [scheduleDate, setDate] = useState("");
    const [scheduleTime, setTime] = useState("");
    const [Logo1, setLogo1] = useState('');
    const [Logo2, setLogo2] = useState('');
    const [scheduleawayteam, setScheduleAwayTeam] = useState('');
    const [schedulehometeam, setScheduleHomeTeam] = useState('');
    const navigation = useNavigation();
    const currenDate = new Date();
    const currentYear = currenDate.getFullYear();
    useEffect(() => {
        if (!DateTime) {
            return;
        } else {
            const convertedDate = moment(DateTime).format('MM/DD/YYYY');
            const convertedTime = moment(DateTime).format('hh:mm');
            setDate(convertedDate);
            setTime(convertedTime);
        }
        //get the TeamData from the api
        const fetchTeamData = async () => {
            try {
                const response = await axios.get(BASE_URL + '/Teams', {
                    headers: {
                        'Ocp-Apim-Subscription-Key': API_KEY
                    },
                });
                const teamdump = [];
                response.data.forEach((row) => {
                    if (row) {
                        teamdump.push(row);
                    }
                });
                const list1 = AwayTeam ? (teamdump.find(item => item.Key === AwayTeam)) : (teamdump.find(item => item.Key === schedulehometeam))
                if (list1) {
                    setLogo1(list1.WikipediaLogoUrl);
                } else {
                    console.warn('AwayTeam not found in team data');
                }
                const list2 = HomeTeam ? (teamdump.find(item => item.Key === HomeTeam)) : (teamdump.find(item => item.Key === scheduleawayteam));
                if (list2) {
                    setLogo2(list2.WikipediaLogoUrl);
                } else {
                    // console.warn('HomeTeam not found in team data');
                }
            } catch (err) {
                console.log(err);
            }
        };
        const fetchTeamData2 = async () => {
            try {
                const response1 = await axios.get(BASE_URL + '/SchedulesBasic/' + currentYear, {
                    headers: {
                        'Ocp-Apim-Subscription-Key': API_KEY
                    },
                });
                const scheduleData = [];
                response1.data.forEach((row) => {
                    if (row.Date === null) {
                        return;
                    } else {
                        // console.log(row)
                        scheduleData.push(row);
                    }
                });
                const schedulelist1 = AwayTeam
                    ? (scheduleData.filter(item => item.AwayTeam === AwayTeam)[0])
                    : HomeTeam ? (scheduleData.filter(item => item.HomeTeam === HomeTeam)[0]) : null
                setScheduleAwayTeam(AwayTeam ? schedulelist1.HomeTeam : null);
                setScheduleHomeTeam(HomeTeam ? schedulelist1.AwayTeam : null);

            } catch (err) {
                console.log(err);
            }
        }
        fetchTeamData2();
        fetchTeamData();

    }, [DateTime, scheduleawayteam, schedulehometeam]);
    const onGoToDetail = () => {
        try {
            navigation.navigate("Match Detail");
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <View style={[styles.container, odd && styles.odd_border]}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <SelectDropdown
                    data={["Toggle Expand", "Detail"]}
                    onSelect={(item, index) => {
                        if (index == 0) setShowDetail(!showDetail);
                        if (index == 1) onGoToDetail();
                    }}
                    renderButton={() => {
                        return (
                            <View style={[styles.detailDropdownButtonStyle]}>
                                <View style={{ padding: 4 }}>
                                    <Image source={DetailIocn} style={{ width: 16, height: 4 }} />
                                </View>
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.detailDropdownItemStyle }}>
                                <Text style={styles.detailDropdownItemTxtStyle}>{item}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.detailDropdownMenuStyle}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexGrow: 1, width: "32%" }}>
                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>

                        <TouchableOpacity>
                            {Logo1 ? (<SvgUri
                                width="50"
                                height="60"
                                uri={Logo1}
                            />) : <Image source={TeamLogo2} style={styles.teamLogo} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                        <Text style={styles.teamName}>{HomeTeam ? schedulehometeam : AwayTeam}</Text>
                    </View>
                </View>
                <View style={{ flexGrow: 1, width: "32%" }}>
                    <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800", marginBottom: 12, fontSize: 10 }}>NFL LEAUGE</Text>
                    <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800" }}>{scheduleDate}</Text>
                    <Text style={{ textAlign: "center", color: "#3C3C3C", fontWeight: "800" }}>{scheduleTime}</Text>
                </View>
                <View style={{ flexGrow: 1, width: "32%" }}>
                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                        <TouchableOpacity>
                            {Logo2 ? (<SvgUri
                                width="50"
                                height="50"
                                uri={Logo2}
                            />) : <Image source={TeamLogo2} style={styles.teamLogo} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                        <Text style={styles.teamName}>{AwayTeam ? scheduleawayteam : HomeTeam}</Text>
                    </View>
                </View>
            </View>
            {
                showDetail && <View>
                    <View style={[styles.topline, { flexDirection: "row" }]}>
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
                    <View style={[styles.topline, { flexDirection: "row" }]}>
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
                    <View style={[styles.topline, { flexDirection: "row" }]}>
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
            }
        </View >);
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#B9B9B9",
        marginBottom: 15
    },
    odd_border: {
        borderColor: "#F8C067"
    },
    teamLogo: {
        width: 50,
        height: 50
    },
    teamName: {
        textAlign: "center",
        fontWeight: "600",
        color: "#3C3C3C",
        maxWidth: "55%"
    },
    topline: {
        borderTopColor: "#B9B9B9",
        borderTopWidth: 1,
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

    // detail dropdown styles
    detailDropdownButtonStyle: {
        paddingVertical: 5,
        minWidth: 120,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    detailDropdownButtonTxtStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: "#3C3C3C",
        borderWidth: 1,
        borderColor: "red"
    },
    detailDropdownButtonArrowStyle: {
        fontSize: 10,
    },
    detailDropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    detailDropdownMenuStyle: {
        backgroundColor: '#eee',
        borderRadius: 8
    },
    detailDropdownItemStyle: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    detailDropdownItemTxtStyle: {
        fontSize: 10,
        fontWeight: '500',
        color: '#3C3C3C',
    }
});

export default TeamWagerCard;