/*Profile/What's New?*/
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import NewsImage from '../../assets/images/new-image.png';
import NewDialog from "../../components/NewDialog";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../components/api";
import { BASE_URL } from "../../components/api";
function WhatsNew() {
    const [Data, setData] = useState([]);
    const NewData = [];
    useEffect(() => {
        axios.get(BASE_URL + '/News', {
            headers: {
                'Ocp-Apim-Subscription-Key': API_KEY
            },
        }).then((response) => {
            response.data.forEach((row) => {
                const play = [];
                play.push(row.Content);
                NewData.push(row);
                setData(NewData)
            })
        }
        ).catch(err => {
            console.log(err);
        });
    }, [])
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#22252A', paddingVertical: 10, paddingHorizontal: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile'); }} style={{ paddingTop: 5, paddingHorizontal: 5 }}><Image source={ArrowHistoryIcon}></Image></TouchableOpacity>
                    <View style={{}}>
                        <Text style={[styles.text, { color: "#FFFFFF" }]}>Latest News</Text>
                    </View>
                </View>
            </View>
            {/* <ScrollView style={{ padding: 25, paddingRight: 18 }}> */}
            <ScrollView style={{ paddingTop: 8 }}>
                {Data && (
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => <NewDialog key={item.id} title={item.Title} team={item.Team} timeago={item.TimeAgo} content={item.Content} url={item.Url} />}
                        showsHorizontalScrollIndicator={true}
                        scrollEnabled={false}
                    />
                )}
            </ScrollView>
        </View>
    );
}
export default WhatsNew;
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
        marginTop: 4,
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 12.98,
        color: "#3C3C3C"
    },
})