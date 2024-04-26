import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import SidebarIcon from '../../../assets/images/sidebar-icon.png';
import BgImage from '../../../assets/images/home-header-bg.png';
import MaskImage from '../../../assets/images/home-header-mask.png';
import SearchIcon from '../../../assets/images/icons/search-icon.png';
import WalletIcon from '../../../assets/images/icons/wallet-icon.png';
import NewsDefaultLogo from '../../../assets/images/latest-news-temp-image.png';

const HomeTopbar = () => {
    return (<View >
        <ImageBackground source={BgImage} style={styles.bg_view} />
        <ImageBackground source={MaskImage} style={styles.mask} />
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
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
            <View style={{ marginBottom: 50 }}>
                <Text style={{ fontSize: 16, color: "white", marginBottom: 10 }}>LATEST NEWS</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#F7CF68", borderRadius: 10, padding: 3, flexDirection: "row", height: 90, marginRight: 15 }}>
                        <Image source={NewsDefaultLogo} style={{ width: 100, height: "auto", marginRight: 10, padding: 8, borderRadius: 8 }} />
                        <View style={{ padding: 8 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 8, backgroundColor: "#B18E34", color: "white", paddingRight: 3, paddingLeft: 3, borderRadius: 2 }}>NBA</Text>
                                <Text style={{ fontSize: 8, color: "#4B4B4B", paddingRight: 3, paddingLeft: 3 }}>6 hours ago</Text>
                            </View>
                            <View>
                                <Text style={{ width: 180, fontFamily: "Roboto", fontSize: 12, fontWeight: 900 }}>NBA All-Star Game, back to the classic East VS West</Text>
                                <Text style={{ width: 180, fontFamily: "Roboto", fontSize: 8 }}>Now it's official: the 2024 NBA All-Star Game will be Sunday 18 February in</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 3, flexDirection: "row", height: 90 }}>
                        <Image source={NewsDefaultLogo} style={{ width: 100, height: "auto", marginRight: 10, padding: 8, borderRadius: 8 }} />
                        <View style={{ padding: 8 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 8, backgroundColor: "#B18E34", color: "white", paddingRight: 3, paddingLeft: 3, borderRadius: 2 }}>NBA</Text>
                                <Text style={{ fontSize: 8, color: "#4B4B4B", paddingRight: 3, paddingLeft: 3 }}>6 hours ago</Text>
                            </View>
                            <View>
                                <Text style={{ width: 180, fontFamily: "Roboto", fontSize: 12 }}>NBA All-Star Game, back to the classic East VS West</Text>
                                <Text style={{ width: 180, fontFamily: "Roboto", fontSize: 8 }}>Now it's official: the 2024 NBA All-Star Game will be Sunday 18 February in</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View >)
};

const styles = StyleSheet.create({
    bg_view: {
        position: 'absolute', // Ensure ImageBackground covers the entire container
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "contain",
        width: "100%",
        height: 300, // Set a fixed height or use a specific unit like pixels
        zIndex: 0, // Ensure it's rendered below other components,
    },
    mask: {
        position: 'absolute', // Ensure ImageBackground covers the entire container
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "contain",
        width: "100%",
        height: 250, // Set a fixed height or use a specific unit like pixels
        zIndex: 1, // Ensure it's rendered below other components,
        opacity: 0.9
    },
    container: {
        paddingTop: 12,
        paddingRight: 21,
        paddingLeft: 21,
        zIndex: 3
    },
    icon: {
        width: 30,
        height: 26
    }
});

export default HomeTopbar;