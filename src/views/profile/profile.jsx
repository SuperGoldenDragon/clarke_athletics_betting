import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import Avartar from '../../assets/images/avatars/avatar-1.png';
import BuzzerIcon from '../../assets/images/icons/rss-interface-icon.png';
import TVscheduleIcon from '../../assets/images/icons/profile-icon.png';
import BattleIcon from '../../assets/images/icons/battleforwesnoth-icon.png';
import DroppingOddsIcon from '../../assets/images/icons/graph-down-icon.png';
import SettingsIcon from '../../assets/images/icons/settings-account-more-icon.png';
import RemoveIcon from '../../assets/images/icons/adsilence-icon.png';
import NewIcon from '../../assets/images/icons/new-icon.png';
import StarIcon from '../../assets/images/icons/star-icon.png';
import FeedbackIcon from '../../assets/images/icons/feedback-icon.png';
import ShareIcon from '../../assets/images/icons/share-boxed-icon.png';
const Profile = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, borderStartColor: 'white' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#22252A', paddingVertical: 10 }}>
                <View style={{ paddingTop: 5, paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}><Image source={ArrowHistoryIcon}></Image></TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={[styles.text, { color: "#FFFFFF" }]}>Profile</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#F5F4F4' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <Image source={Avartar}></Image>
                    </View>
                    <View style={{ marginTop: 25, marginLeft: 10 }}>
                        <Text style={[styles.text, { fontSize: 12, color: '#3C3C3C', fontWeight: '400' }]}>
                            Sync your favorites, join the chat, view top
                        </Text>
                        <Text style={[styles.text, { fontSize: 12, color: '#3C3C3C', fontWeight: '400' }]}>
                            predictors and more!
                        </Text>
                    </View>
                </View>
                <View style={{ width: 108, marginLeft: 88 }}>
                    <TouchableOpacity style={{ backgroundColor: '#F7D068', borderRadius: 3 }}><Text style={[styles.text, { fontSize: 12, fontWeight: '400', color: '#3C3C3C', textAlign: 'center', paddingVertical: 3.5 }]}>Sign In</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={BuzzerIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity onPress={() => { navigation.navigate('Buzzer') }}><Text style={[styles.text, { paddingLeft: 20, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Buzzer Feed</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={TVscheduleIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity onPress={() => { navigation.navigate('TVSchedule') }}><Text style={[styles.text, { paddingLeft: 20, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>TV Schedule</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={BattleIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Battle Draft</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={DroppingOddsIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Dropping Odds</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={SettingsIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Settings</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={RemoveIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Remove Ad</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={NewIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>What's New?</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={StarIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Rate Us</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={FeedbackIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Feedback</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Image source={ShareIcon} style={{ marginTop: 2, alignItems: 'center' }}></Image>
                    <TouchableOpacity><Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Share Whatawager</Text></TouchableOpacity>
                </View>
            </View>
        </View >



    );
};

export default Profile;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
})