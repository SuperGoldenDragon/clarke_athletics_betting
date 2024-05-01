import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useState } from "react";
import GlobalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import PageBackIcon from '../../assets/images/icons/history-icon-3.png';
import subscribeImage from '../../assets/images/subscribe-image.png';
import subscribeIcon from '../../assets/images/icons/subscribe-icon.png';
import DefaultButton from "../../components/DefaultButton";
const RemoveAd = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={[
                GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, GlobalStyles.appbar, { flexDirection: "row" }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ paddingVertical: 12.5, marginRight: 15 }}>
                        <Image source={PageBackIcon} />
                    </View>
                </TouchableOpacity>
                <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Subscribe</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image source={subscribeImage} style={{ flex: 1, resizeMode: 'cover' }}></Image>
            </View>
            <View style={{ marginVertical: 40 }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={[styles.text, { color: '#22252A' }]}>Remove Ads</Text>
                </View>
                <View style={{ paddingVertical: 20, marginHorizontal: 40 }}>
                    <Text style={[styles.text, { fontWeight: "400", color: '#22252A', maxwidth: 50, textAlign: "center" }]}>By subscribing to Whatawager,you can remove ads from the app. Try for free for 7 days,
                        Then $20/month</Text>
                </View>
                <View style={{ marginHorizontal: 50, backgroundColor: '#F3F6F6' }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ flexDirection: "row", paddingBottom: 5 }} >
                            <View style={{ backgroundColor: 'black', alignSelf: "center", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50, }}>
                                <Image source={subscribeIcon} ></Image>
                            </View>
                            <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#3C3C3C', paddingHorizontal: 10 }]}>
                                It give you an ad free experience
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 5 }} >
                            <View style={{ backgroundColor: 'black', alignSelf: "center", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50 }}>
                                <Image source={subscribeIcon} ></Image>
                            </View>
                            <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#3C3C3C', paddingHorizontal: 10 }]}>
                                It supports our work
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 5 }} >
                            <View style={{ backgroundColor: 'black', alignSelf: "center", paddingHorizontal: 2, paddingVertical: 2, borderRadius: 50 }}>
                                <Image source={subscribeIcon} ></Image>
                            </View>
                            <Text style={[styles.text, { fontWeight: "400", fontSize: 14, color: '#3C3C3C', paddingHorizontal: 10 }]}>
                                It’s Optional
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 50, marginVertical: 30 }}>
                    <DefaultButton><Text style={[styles.text, { fontWeight: "500", fontSize: 19, color: '#22252A' }]}>Subscribe</Text></DefaultButton>
                </View>
            </View>

        </View>
    )
}
export default RemoveAd;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: "600",
        fontSize: 16,

    }
})