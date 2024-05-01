import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PlayerAvatar from '../../assets/images/avatars/avatar-2.png';
import DefaultFlag from '../../assets/images/flags/default-flag.png';

const TeamSquadTab = () => {
    return (<View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
            <View style={styles.PlayerArea}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.FieldText}>FORWARD</Text>
            </View>
            <View style={[styles.PlayerArea, styles.underline]}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.PlayerArea, styles.underline]}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.PlayerArea, styles.underline]}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.PlayerArea, styles.underline]}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.PlayerArea, styles.underline]}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.PlayerArea]}>
                <Image source={PlayerAvatar}></Image>
                <View style={{ marginLeft: 10, padding: 3 }}>
                    <Text style={styles.PlayerName}>Mariono Puki</Text>
                    <View style={styles.InformationArea}>
                        <Text style={styles.PlayerInfo}>Coach</Text>
                        <Image source={DefaultFlag} style={styles.FlagImage}></Image>
                        <Text style={styles.PlayerInfo}>Atlanta,USA</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={[styles.FieldText, { marginBottom: 30 }]}>MIDFEILDER</Text>
            </View>
        </ScrollView>
    </View>)
};

export default TeamSquadTab;

const styles = StyleSheet.create({
    PlayerName: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 11.54
    },
    InformationArea: {
        marginTop: 5,
        flexDirection: "row"
    },
    PlayerArea: {
        paddingTop: 30,
        paddingBottom: 20,
        marginHorizontal: 50,
        flexDirection: "row",
    },
    PlayerInfo: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.06
    },
    FlagImage: {
        maxHeight: 14,
        maxWidth: 14,
        marginHorizontal: 5
    },
    FieldText: {
        color: "#3C3C3C",
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16.28,
        backgroundColor: "#F5F4F4",
        borderLeftWidth: 4,
        borderLeftColor: "#F7D068",
        paddingVertical: 12,
        paddingLeft: 50,
        marginTop: 10
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: "#B9B9B9"
    }
})