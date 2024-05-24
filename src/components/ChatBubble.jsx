import { View, Image, StyleSheet, Text } from "react-native";
import auth, { firebase } from '@react-native-firebase/auth';
import moment from "moment";
const ChatBubble = (props) => {
    const { chat } = props;
    const { id, imageUrl, text, owner, createdAt, Username } = chat;
    currenttime = moment(createdAt).format("YYYY-MM-DD | h:mm  A");
    const currentUser = auth().currentUser.uid;
    const playname = auth().currentUser.displayName;
    const Email = auth().currentUser.email;
    return owner === currentUser ? (<View style={styles.you_container}>
        <View style={[styles.avatar_container]}>
            <Image source={{ uri: imageUrl }} style={styles.avatar} />
        </View>
        <View style={{ flexGrow: 1, maxWidth: "80%" }}>
            <Text style={[styles.name, { textAlign: "right" }]}>{Username}</Text>
            <View style={[styles.bubble, { alignItems: "flex-end" }]}>
                <View style={{}}>
                    <Text style={[styles.content, styles.you_bubble_border]}>{text}</Text>
                    <Text style={styles.time}>
                        {currenttime}
                    </Text>
                </View>

            </View>
        </View>
    </View>) : (<View style={[styles.container]}>
        <View style={[styles.avatar_container]}>
            <Image source={{ uri: imageUrl }} style={styles.avatar} />
        </View>
        <View style={{ flexGrow: 1, maxWidth: "80%" }}>
            <Text style={[styles.name, { textAlign: "left", paddingLeft: 5 }]}>{Username}</Text>
            <View style={[styles.bubble, { alignItems: "flex-start" }]}>
                <View style={{}} >
                    <Text style={[styles.content, styles.bubble_border, {}]}>{text}</Text>
                    <Text style={[styles.time, { textAlign: "left" }]}>
                        {currenttime}
                    </Text>
                </View>

            </View>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    you_container: {
        flexDirection: "row-reverse"
    },
    avatar_container: {
        borderRadius: 64,
        marginRight: 10,

    },
    avatar: {
        width: 32,
        height: 32,
        marginLeft: 0,
        marginRight: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        color: "#000E08",
        marginBottom: 9,
        fontWeight: "500",
        marginRight: 6,
        fontSize: 8
    },
    bubble: {
        marginBottom: 6,
        paddingHorizontal: 6,
        flex: 1
    },
    bubble_border: {
        borderTopLeftRadius: 0
    },
    you_bubble_border: {
        borderTopRightRadius: 0,
        backgroundColor: "#F8C067"
    },
    content: {
        backgroundColor: "#EDEDED",
        padding: 6,
        fontSize: 11,
        fontWeight: "400",
        color: "#000E08",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 8
    },
    time: {
        textAlign: "right",
        fontSize: 7,
        fontWeight: "900",
        paddingHorizontal: 5,

    }
});

export default ChatBubble;