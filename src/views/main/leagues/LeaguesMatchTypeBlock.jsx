import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ExpandOpenIcon from '../../../assets/images/icons/expand-right-icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import global from '../../../styles/global';

const LeaguesMatchTypeBlock = props => {

    const { name, odd, onPress } = props;

    return (<TouchableOpacity style={{ ...styles.card, borderColor: odd ? "#B9B9B9" : "#F7D068" }} onPress={onPress}>
        <Image source={ExpandOpenIcon} style={{ width: 19, height: 36, marginLeft: -7 }} />
        <View style={{ flexGrow: 1, display: "flex", alignSelf: "center" }}>
            <Text style={[styles.text, global.text_uppercase, global.text_center]}>{name}</Text>
        </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        borderColor: "#B9B9B9",
        marginVertical: 10,
        flexDirection: "row"
    },
    text: {
        color: "#22252A",
        fontSize: 14,
        fontWeight: "600"
    }
});

export default LeaguesMatchTypeBlock;