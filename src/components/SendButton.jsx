import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CopyIcon from '../assets/images/icons/copy-icon.png';
const SendButton = ({ handleChat }) => {
    return (
        <TouchableOpacity onPress={handleChat} style={styles.button}>
            <Image source={CopyIcon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        // width: 40,
        // height: 40,
        // margin: 0,
        // padding: 0,
        // marginLeft: 16,
        // marginRight: 0,
        // borderRadius: 500,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#00aeff',
        paddingVertical: 7
    },
});

export default SendButton;
