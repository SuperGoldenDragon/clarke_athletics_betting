import { View, Image, StyleSheet } from "react-native";
import DefaultAvatar from '../assets/images/avatars/avatar-1.png';

const Avatar = (props) => {

    const { avatar, style } = props;

    return (
        <View style={style}>
            <Image source={avatar || DefaultAvatar} style={[styles.avatar]} />
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30
    }
});

export default Avatar;