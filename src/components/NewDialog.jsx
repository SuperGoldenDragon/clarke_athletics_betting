import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import NewsImage from '../assets/images/new-image.png';
const NewDialog = (props) => {
    const { title, team, timeago, content, url } = props;
    const openURL = (url) => {
        Linking.openURL(url).catch((err) => {
            console.error("Failed to open URL:", err);
        });
    };
    return (
        <View style={styles.ImageItem}>
            <Image source={NewsImage} />
            <View style={{ paddingLeft: 10, paddingTop: 8, paddingRight: 130 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.NBAButton}>{team}</Text>
                    <Text style={styles.smallText}>{timeago}</Text>
                </View>
                <TouchableOpacity onPress={() => { openURL(url) }}>
                    <Text style={styles.headerText}>{title}</Text>
                </TouchableOpacity>
                <Text style={styles.contentText}>
                    {content.substring(0, 90)}
                </Text>
            </View>
        </View>
    )
}
export default NewDialog;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
    ImageItem: {
        borderRadius: 8,
        flexDirection: "row",
        padding: 5,
        marginTop: 15,
        marginRight: 20,
        marginLeft: 25,
        backgroundColor: "white",
        shadowRadius: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.25,
        elevation: 7
    },
    NBAButton: {
        backgroundColor: "#B18E34",
        borderRadius: 2,
        paddingHorizontal: 3,
        paddingVertical: 1,
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: 7,
        lineHeight: 7.61
    },
    smallText: {
        marginLeft: 3,
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 10.87,
        color: "#4B4B4B"
    },
    headerText: {
        marginTop: 6,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 15.22,
        color: "#1B1B1B"
    },
    contentText: {
        marginTop: 6,
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 12.98,
        color: "#3C3C3C"
    },
})