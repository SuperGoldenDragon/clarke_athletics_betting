import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageBackIcon from '../../assets/images/icons/back-icon-2.png';
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
import GlobalStyles from '../../styles/global';
import DefaultTextButton from '../../components/DefaultTextButton';
const ProfileContainer = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, borderStartColor: 'white' }}>
            <View style={[
                GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, GlobalStyles.appbar, styles.appbar, { flexDirection: "row" }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ paddingVertical: 12.5, marginRight: 15 }}>
                        <Image source={PageBackIcon} />
                    </View>
                </TouchableOpacity>
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Profile</Text>
                </View>
            </View>
            <View style={[{ backgroundColor: '#F5F4F4', paddingVertical: 15 }, GlobalStyles.defaultPagePadding]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={Avartar} style={{ width: 45, height: 45 }}></Image>
                    </View>
                    <View >
                        <Text style={[styles.text, { fontSize: 12, color: '#3C3C3C', fontWeight: '400', marginBottom: 10 }]}>
                            Sync your favorites, join the chat, view top  predictors and more!
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <DefaultTextButton style={{ paddingHorizontal: 30 }}>Sign in</DefaultTextButton>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[{ backgroundColor: "white", flex: 1, borderWidth: 1 }, GlobalStyles.defaultPagePadding]}>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={BuzzerIcon} ></Image>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Buzzer') }}>
                        <Text style={[styles.text, { paddingLeft: 20, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Buzzer Feed</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={TVscheduleIcon} ></Image>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('TVSchedule') }}>
                        <Text style={[styles.text, { paddingLeft: 20, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>TV Schedule</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={BattleIcon}></Image>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Battle') }}>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Battle Draft</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={DroppingOddsIcon}></Image>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Dropping') }}>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Dropping Odds</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={SettingsIcon}></Image>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={RemoveIcon}></Image>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('RemoveAd') }}>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Remove Ad</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={NewIcon}></Image>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>What's New?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={StarIcon}></Image>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Rate Us</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={FeedbackIcon}></Image>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Feedback</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                    <View style={{ width: 25, flexDirection: "row", justifyContent: "center" }}>
                        <Image source={ShareIcon}></Image>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.text, { paddingLeft: 23, fontWeight: '400', fontSize: 14, color: '#3C3C3C' }]}>Share Whatawager</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
})
export default ProfileContainer;
