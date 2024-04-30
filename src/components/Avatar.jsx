import { View, Image, StyleSheet } from "react-native";
import DefaultAvatar from '../assets/images/avatars/avatar-1.png';

const Avatar = (props) => {

    const { avatar, style } = props;

    let containerStyles = [styles.containar];
    if (Array.isArray(style)) {
        containerStyles = containerStyles.concat(style)
    } else {
        containerStyles.push(style);
    }

    return (
        <View style={containerStyles}>
            <Image source={avatar || DefaultAvatar} style={[styles.avatar]} />
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: "100%",
        height: "100%"
    },
    containar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    }
});

export default Avatar;