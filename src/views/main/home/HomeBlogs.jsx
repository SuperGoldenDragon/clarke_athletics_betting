import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import SidebarIcon from '../../../assets/images/sidebar-icon.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultAvatar from '../../../assets/images/avatars/avatar-1.png';
import BlogCard from "./BlogCard";

const sampleComments: Array<any> = [{
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
        <View style={[styles.defaultPadding, styles.appbar]}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <View style={{ padding: 7, marginRight: 15 }}>
                        <Image style={{ width: 30, height: 26 }} source={SidebarIcon} />
                    </View>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 23, marginRight: "auto", paddingVertical: 3 }}>Home</Text>
                <View style={{ padding: 5, flexDirection: "row" }}>
                    <View style={{ marginRight: 7 }}>
                        <Text style={{ color: "white", textAlign: "right", fontSize: 12 }}>BALANCE</Text>
                        <Text style={{ color: "white", textAlign: "right", fontWeight: 900, marginTop: -3 }}>12.56</Text>
                    </View>
                    <View style={{ padding: 5, backgroundColor: '#333', borderRadius: 4, marginRight: 10, borderWidth: 2, borderColor: '#555', alignSelf: "flex-start" }}>
                        <Image source={WalletIcon} style={{ width: 17, height: 17 }} />
                    </View>
                    <View style={{ padding: 3 }}>
                        <Image source={SearchIcon} style={{ width: 27, height: 27 }} />
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
        backgroundColor: "#22252A",
        paddingVertical: 12
    }
});

export default HomeBlogs;