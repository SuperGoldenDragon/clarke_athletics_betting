import { View, Image, StyleSheet, Text } from "react-native";
import DefaultAvatar from '../assets/images/avatars/avatar-1.png';

const ChatBubble = (props) => {

    const { avatar, name, you, time, content } = props;

    return (<View style={you ? styles.you_container : styles.container}>
        <View style={styles.avatar_container}>
            <Image source={DefaultAvatar} style={styles.avatar} />
        </View>
        <View style={{ flexGrow: 1, maxWidth: "80%" }}>
            <Text style={[styles.name, { textAlign: you ? "right" : "left" }]}>{you ? "You" : name}</Text>
            <View style={[styles.bubble, { alignItems: you ? "flex-end" : "flex-start" }]}>
                <View >
                    <Text style={[styles.content, you ? styles.you_bubble_border : styles.bubble_border]}>{content}</Text>
                    <Text style={styles.time}>
                        {time}
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
        marginRight: 10
    },
    avatar: {
        width: 32,
        height: 32
    },
    name: {
        color: "#000E08",
        marginBottom: 7,
        fontWeight: "500",
        marginRight: 6
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
        fontSize: 9,
        fontWeight: "900",
        paddingHorizontal: 10
    }
});

export default ChatBubble;