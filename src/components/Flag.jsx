import React from 'react';
import DefaultFlag from '../assets/images/flags/default-flag.png';
import { Image } from 'react-native';

const Flag = (props) => {

    const { flag, style, ...rest } = props;

    return (
        <Image source={flag || DefaultFlag} style={style} {...rest} />
    );
};


export default Flag;