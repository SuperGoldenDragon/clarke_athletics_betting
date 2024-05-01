import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import ArrowHistoryIcon from '../../assets/images/icons/history-icon-3.png';
import NewsImage from '../../assets/images/new-image.png';
const WhatsNew = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#22252A', paddingVertical: 10, paddingHorizontal: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ paddingTop: 5, paddingHorizontal: 5 }}><Image source={ArrowHistoryIcon}></Image></TouchableOpacity>
                    <View style={{}}>
                        <Text style={[styles.text, { color: "#FFFFFF" }]}>Latest News</Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <View style={{ flexDirection: "row", borderWidth: 1, borderColor: 'red', }}>
                        <View style={{ borderRadius: 5 }}>
                            <Image source={NewsImage} />
                        </View>
                        <View >
                            <Text>NBA</Text>
                            <Text>6 hours ago</Text>
                            <Text>NBA All-Star Game, back to the classic East VS West</Text>
                            <Text>Now it's official: the 2024 NBA All-Star Game will be Sunday 18 February in</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default WhatsNew;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
})