import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import BlurTeamLogo from '../../components/BlurTeamLogo';
import global from '../../styles/global';
import TeamWagerCard from './TeamWagerCard';
import ContactIcon from '../../assets/images/icons/contact-icon.png';
import CalendarIcon from '../../assets/images/icons/calendar-icon.png';
import LoadingIcon from '../../assets/images/icons/loading-icon-1.png';
import Tournament1 from '../../assets/images/tournament-1.png';
import Tournament2 from '../../assets/images/tournament-2.png';
import Tournament3 from '../../assets/images/tournament-3.png';
import moment from 'moment';
import { BASE_URL } from '../../components/api';
import { API_KEY } from '../../components/api';
import Flag from '../../components/Flag';
import axios from 'axios';
const TeamDetailsTab = ({ route, navigation }) => {
    const currenDate = new Date();
    const currentYear = currenDate.getFullYear();
    const { AwayTeam, HomeTeam } = route.params;
    const [playnumber, setPlayNumber] = useState('')
    const [avgAge, setAvgAge] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [datetime, setDateTime] = useState();
    const scheduledump = [];
    const play = [];
    const age = [];
    useEffect(() => {
        axios.get(BASE_URL + '/PlayersBasic/' + (AwayTeam ? AwayTeam : HomeTeam), {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY
            },
        }).then((response) => {
            response.data.forEach((row) => {
                play.push(row);
                age.push(row.Age);
            })
            const avg = parseInt(Average(age) / (play.length + 1));
            setAvgAge(avg);
            setPlayNumber((play.length + 1).toString());
        }
        ).catch(err => {
            console.log(err);
        });

        return () => {
            console.log("dismounted")
        }
    }, [AwayTeam, HomeTeam])
    useEffect(() => {
        axios.get(BASE_URL + '/SchedulesBasic/' + currentYear, {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY
            },
        }).then((response) => {
            response.data.forEach((row) => {
                if (row.Date === null) {
                    return;
                } else {
                    scheduledump.push(row);
                }
            })
            const list1 = AwayTeam
                ? (scheduledump.filter(item => item.AwayTeam === AwayTeam)[0])
                : null
            if (list1 && list1.DateTime) {
                setDateTime(list1.DateTime);
            } else {
                console.warn('No matching team found or DateTime is undefined');
            }
        }
        ).catch(err => {
            console.log(err);
        });
    }, [AwayTeam, HomeTeam])
    //get the average age of the players 
    const Average = (array) => {
        let sum = 0;
        array.forEach(element => { sum += element });
        return sum;
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView style={[global.defaultPagePadding]}>
                <Text style={[styles.title]}>Featured Match</Text>
                <TeamWagerCard AwayTeam={AwayTeam} HomeTeam={HomeTeam} DateTime={datetime} />
                <Text style={[styles.title]}>team info</Text>
                <View style={{ borderRadius: 10, borderColor: "#F8C067", borderWidth: 1, padding: 12 }}>
                    <View style={{ padding: 5, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#B9B9B9" }}>
                        <View style={{ flexGrow: 1, paddingVertical: 5, borderRightColor: "#B9B9B9", borderRightWidth: 1 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                                <Image source={ContactIcon} />
                            </View>
                            <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "700", color: "#3C3C3C" }}>{playnumber}</Text>
                            <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "400", color: "#3C3C3C" }}>Team Players</Text>
                        </View>
                        <View style={{ flexGrow: 1, paddingVertical: 5 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                                <Image source={CalendarIcon} />
                            </View>
                            <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "700", color: "#3C3C3C" }}>{avgAge}</Text>
                            <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "400", color: "#3C3C3C" }}>Avg Players Age</Text>
                        </View>
                    </View>
                    <View style={{ padding: 5, flexDirection: "row" }}>
                        <View style={{ flexGrow: 1, paddingVertical: 5, borderRightColor: "#B9B9B9", borderRightWidth: 1 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                                <Image source={LoadingIcon} />
                            </View>
                            <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "700", color: "#3C3C3C" }}>23</Text>
                            <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "400", color: "#3C3C3C" }}>Foreign players</Text>
                        </View>
                        <View style={{ flexGrow: 1, paddingVertical: 5 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                                <Image source={LoadingIcon} />
                            </View>
                            <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "700", color: "#3C3C3C" }}>23</Text>
                            <Text style={{ textAlign: "center", fontSize: 10, fontWeight: "400", color: "#3C3C3C" }}>National team players</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styles.title]}>latest transfers</Text>
                <View style={{ padding: 12, borderRadius: 10, borderColor: "#B9B9B9", borderWidth: 1 }}>
                    <View style={{ flexDirection: "row", marginBottom: 8 }}>
                        <Text style={{ color: "#30E712", fontWeight: "600", fontSize: 12, flexGrow: 1 }}>Latest Arrivals</Text>
                        <Text style={{ color: "#F01313", fontWeight: "600", fontSize: 12, textAlign: "right", flexGrow: 1 }}>Latest Departures</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 8, }}>
                        <Text style={{ flexGrow: 1, color: "#3C3C3C", backgroundColor: "#ecfdea", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6, fontWeight: "400", fontSize: 12, marginRight: 7 }}>Latest Arrivals</Text>
                        <Text style={{ flexGrow: 1, color: "#3C3C3C", backgroundColor: "#fee9e8", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6, fontWeight: "400", fontSize: 12, textAlign: "right", marginLeft: 7 }}>Latest Departures</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 8, }}>
                        <Text style={{ flexGrow: 1, color: "#3C3C3C", backgroundColor: "#ecfdea", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6, fontWeight: "400", fontSize: 12, marginRight: 7 }}>Latest Arrivals</Text>
                        <Text style={{ flexGrow: 1, color: "#3C3C3C", backgroundColor: "#fee9e8", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6, fontWeight: "400", fontSize: 12, textAlign: "right", marginLeft: 7 }}>Latest Departures</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 8, }}>
                        <Text style={{ flexGrow: 1, color: "#3C3C3C", backgroundColor: "#ecfdea", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6, fontWeight: "400", fontSize: 12, marginRight: 7 }}>Latest Arrivals</Text>
                        <Text style={{ flexGrow: 1, color: "#3C3C3C", backgroundColor: "#fee9e8", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6, fontWeight: "400", fontSize: 12, textAlign: "right", marginLeft: 7 }}>Latest Departures</Text>
                    </View>
                </View>
                <Text style={[styles.title]}>tournaments</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: 'center' }}>
                        <Image source={Tournament1} resizeMode='contain' />
                    </View>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: 'center' }}>
                        <Image source={Tournament3} resizeMode='contain' />
                    </View>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: 'center' }}>
                        <Image source={Tournament2} resizeMode='contain' />
                    </View>
                </View>
                <Text style={[styles.title]}>info</Text>
                <View style={[styles.underline, { flexDirection: "row", paddingVertical: 5 }]}>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1 }}>Coach</Text>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1, textAlign: "right" }}>State farm arena</Text>
                </View>
                <View style={[styles.underline, { flexDirection: "row", paddingVertical: 5 }]}>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1 }}>Country</Text>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Flag style={{ marginHorizontal: 5 }} />
                        <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", textAlign: "right" }}>Atlanta,USA</Text>
                    </View>
                </View>
                <View style={[styles.underline, { flexDirection: "row", paddingVertical: 5 }]}>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1 }}>Foundation date</Text>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1, textAlign: "right" }}>State farm arena</Text>
                </View>
                <Text style={[styles.title]}>Match Information</Text>
                <View style={[styles.underline, { flexDirection: "row", paddingVertical: 5 }]}>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1 }}>Coach</Text>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1, textAlign: "right" }}>State farm arena</Text>
                </View>
                <View style={[{ flexDirection: "row", paddingVertical: 5, marginBottom: 20 }]}>
                    <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", flexGrow: 1 }}>Country</Text>
                    <View style={{ flexGrow: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <Flag style={{ marginHorizontal: 5 }} />
                        <Text style={{ color: "#22252A", fontSize: 12, fontWeight: "400", textAlign: "right" }}>Atlanta,USA</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
        marginVertical: 20,
        textTransform: "uppercase",
        color: "#22252A"
    },
    underline: {
        borderBottomColor: "#B9B9B9",
        borderBottomWidth: 1
    }
});

export default TeamDetailsTab;