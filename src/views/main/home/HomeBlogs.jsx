import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import SidebarIcon from '../../../assets/images/icons/sidebar-icon.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultAvatar from '../../../assets/images/avatars/avatar-1.png';
import BlogCard from "./BlogCard";
import GlobalStyles from "../../../styles/global";

const sampleComments = [{
    name: "Albert Ailey",
    time: "1 hour ago",
    likes: 15,
    replise: 15,
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    avatar: DefaultAvatar
}, {
    name: "Albert Ailey",
    time: "1 hour ago",
    likes: 15,
    replise: 15,
    content: "Neque porro quisquam .",
    avatar: DefaultAvatar
}];

const HomeBlogs = () => {
    return (<View style={{ flex: 1 }}>
<<<<<<< HEAD
        <View style={[GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding,styles.appbar]}>
=======
        <View style={[GlobalStyles.defaultPagePadding, GlobalStyles.defaultAppbarPadding, styles.appbar]}>
>>>>>>> 6c167b058b1e83125f5ff75587a73239037ddc9b
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <View style={{ padding: 7, marginRight: 5 }}>
                        <Image source={SidebarIcon} />
                    </View>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 18, marginRight: "auto", fontWeight: "600", paddingVertical: 2 }}>Home</Text>
                <View style={{ paddingVertical: 5, flexDirection: "row" }}>
                    <View style={{ marginRight: 7 }}>
                        <Text style={{ color: "white", textAlign: "right", fontSize: 8 }}>BALANCE</Text>
                        <Text style={{ color: "white", textAlign: "right", fontWeight: "600", marginTop: -3, fontSize: 12 }}>12.56</Text>
                    </View>
                    <View style={{ padding: 5, backgroundColor: '#333', borderRadius: 4, marginRight: 10, borderWidth: 2, borderColor: '#555', alignSelf: "flex-start" }}>
                        <Image source={WalletIcon} />
                    </View>
                    <View style={{ paddingVertical: 3 }}>
                        <Image source={SearchIcon} />
                    </View>
                </View>
            </View>
        </View>
        <View style={[{ flex: 1, paddingBottom: 10 }]}>
            <ScrollView style={[styles.defaultPadding, { paddingVertical: 10 }]}>
                <BlogCard isChat={true} />
                <BlogCard isAgree={true} />
                <BlogCard noChat={true} />
                <BlogCard comments={sampleComments} />
                <BlogCard />
                <BlogCard />
            </ScrollView>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    defaultPadding: {
        paddingHorizontal: 21
    },
    appbar: {
        backgroundColor: "#22252A"
    }
});

export default HomeBlogs;