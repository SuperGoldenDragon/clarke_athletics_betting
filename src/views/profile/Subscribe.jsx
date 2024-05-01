import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ManImage from '../../assets/images/Subscribe-image.png';
import PageBackIcon from '../../assets/images/icons/back-icon-2.png';
import CheckIcon from '../../assets/images/icons/check-icon.png';
import GlobalStyles from "../../styles/global";

const Subscribe = () => {
    const navigation = useNavigation();
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const handleImageLoad = (event) => {
        const { width, height } = event.nativeEvent.source;
        const screenWidth = Dimensions.get('window').width;
        const aspectRatio = width / height;
        const imageWidth = screenWidth;
        const imageHeight = screenWidth / aspectRatio;
        setImageSize({ width: imageWidth, height: imageHeight });
    };
    return (<View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={[
            GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, GlobalStyles.appbar, styles.appbar, { flexDirection: "row" }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ paddingVertical: 12.5, marginRight: 15 }}>
                    <Image source={PageBackIcon} />
                </View>
            </TouchableOpacity>
            <View style={{ display: "flex", alignSelf: "center" }}>
                <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Subscribe</Text>
            </View>
        </View>
        <View>
            <Image source={ManImage} resizeMethod='contain' style={{ ...imageSize }} onLoad={handleImageLoad} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ maxWidth: 300 }}>
                <View>
                    <Text style={styles.HeaderText}>REMOVE ADS</Text>
                </View>
                <View>
                    <Text style={styles.Content}>By Subscribing To Whatawager,You Can Remove Ads From The App. Try For Free For 7 Days, Then $20/Month</Text>
                </View>
                <View style={styles.CheckImage}>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <View style={{ backgroundColor: '#22252A', borderRadius: 100, width: 16, height: 16, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image source={CheckIcon}></Image>
                            </View>
                        </View>
                        <Text style={[styles.CheckText]}>It give you an ad free experience</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <View style={{ backgroundColor: '#22252A', borderRadius: 100, width: 16, height: 16, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image source={CheckIcon}></Image>
                            </View>
                        </View>
                        <Text style={[styles.CheckText]}>It give you an ad free experience</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <View style={{ display: "flex", alignSelf: "center" }}>
                            <View style={{ backgroundColor: '#22252A', borderRadius: 100, width: 16, height: 16, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image source={CheckIcon}></Image>
                            </View>
                        </View>
                        <Text style={[styles.CheckText]}>It give you an ad free experience</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.SubText}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </View>


    </View>)
}

export default Subscribe;

const styles = StyleSheet.create({
    HeaderText: {
        textAlign: "center",
        color: "#22252A",
        marginTop: 25,
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 18.75
    },
    Content: {
        textAlign: "center",
        color: "#22252A",
        marginTop: 10,
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.84
    },
    CheckImage: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 30,
        textAlign: "center",
        borderRadius: 8,
        backgroundColor: "#F3F6F6"
    },
    CheckText: {
        marginLeft: 10,
        color: "#3C3C3C",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 28.1
    },
    SubText: {
        textAlign: "center",
        fontSize: 18.57,
        lineHeight: 21.76,
        fontWeight: "500",
        borderRadius: 8,
        color: "#22252A",
        backgroundColor: "#F7D068",
        paddingVertical: 10
    }
})