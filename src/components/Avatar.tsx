import { View, Image, StyleSheet } from "react-native";
import DefaultAvatar from '../assets/images/avatars/avatar-1.png';

const Avatar = (props: any) => {

    const { avatar, style } = props;

    return (
        <View style={style}>
            <Image source={avatar || DefaultAvatar} style={[styles.avatar]} />
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40
    }
});

export default Avatar;