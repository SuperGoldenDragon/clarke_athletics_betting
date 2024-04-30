import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from "@react-navigation/native";
import ManImage from '../../assets/images/Subscribe-image.png';
import PageBackIcon from '../../assets/images/icons/back-icon-2.png';
import EllipseIcon from '../../assets/images/icons/Ellipse.png';
import VectorIcon from '../../assets/images/icons/Vector.png';
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
        <View>
            <Text style={styles.HeaderText}>REMOVE ADS</Text>
        </View>
        <View>
            <Text style={styles.Content}>By Subscribing To Whatawager,You Can Remove Ads From The App. Try For Free For 7 Days, Then $20/Month</Text>
        </View>
        <View style={styles.CheckDiv}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: "2.4%" }}>
                    <Image source={EllipseIcon} />
                </View>
                <Text style={styles.CheckText}>It give you an ad free experience</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: "2.4%" }}>
                    <Image source={EllipseIcon} />
                </View>
                <Text style={styles.CheckText}>It supports our work</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: "2.4%" }}>
                    <Image source={EllipseIcon} />
                </View>
                <Text style={styles.CheckText}>It’s Optional</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.SubButton}>
                <Text style={styles.SubText}>Subscribe</Text>
            </View>
        </TouchableOpacity>
    </View>)
}

export default Subscribe;

const styles = StyleSheet.create({
    HeaderText: {
        textAlign: "center",
        color: "black",
        marginTop: "6%",
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 18.75
    },
    Content: {
        textAlign: "center",
        color: "black",
        marginTop: "3%",
        marginHorizontal: "14.25%",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.84
    },
    CheckDiv: {
        marginTop: "6%",
        marginHorizontal: "13.23%",
        paddingVertical: "5%",
        paddingHorizontal: "8%",
        textAlign: "center",
        borderRadius: 3,
        backgroundColor: "#F3F6F6"
    },
    CheckText: {
        marginLeft: "3%",
        color: "black",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 28.1
    },
    SubButton: {
        marginVertical: "6%",
        marginHorizontal: "12.47%",
        padding: "2.1%",
        borderRadius: 5,
        height: 50,
        backgroundColor: "#F7D068",
    },
    SubText: {
        textAlign: "center",
        fontSize: 18.57,
        fontWeight: "500",
        color: "black",
    }
})