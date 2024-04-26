import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Avatar from "../../../components/Avatar";
import AgreeIcon from '../../../assets/images/icons/agree-icon.png';
import ChatIcon from '../../../assets/images/icons/chat-icon.png';

const CommentCard = (props: any) => {

    const { comment } = props;
    const { avatar, name, time, content, likes, replies } = comment;

    return (<View style={styles.container}>
        <Avatar avatar={avatar} />
        <View style={{ flexGrow: 1, maxWidth: "90%", marginLeft: 10 }}>
            <View style={styles.content}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>| {time}</Text>
                </View>
                <View>
                    <Text style={styles.content_text}>{content}</Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                        <Image source={AgreeIcon} style={{ width: 12, height: 11, marginRight: 5 }} />
                        <Text style={{ marginTop: -3, fontSize: 11 }}>15 Likes</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                        <Image source={ChatIcon} style={{ width: 12, height: 12, marginRight: 5 }} />
                        <Text style={{ marginTop: -3, fontSize: 11 }}>15 Replies</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={{ paddingHorizontal: 10, fontWeight: "600", color: "#3c3c3c" }}>Show previous replies</Text>
            </TouchableOpacity>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 10
    },
    content: {
        borderRadius: 6,
        backgroundColor: "#F3F6F6",
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 12
    },
    name: {
        color: "#22252A",
        fontWeight: "400",
        paddingRight: 5,
        fontSize: 14
    },
    time: {
        color: "#B9B9B9",
        fontSize: 12
    },
    content_text: {
        color: "#3C3C3C",
        paddingVertical: 14
    }
});

export default CommentCard;