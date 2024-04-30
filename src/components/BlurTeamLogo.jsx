import React from 'react';
import { View, Image } from 'react-native';
import DefaultTeamLogo from '../assets/images/logos/team-logo-2.png';
import { BlurView } from '@react-native-community/blur';

const BlurTeamLogo = () => {
    return (
        <View style={{ width: 200, height: 200, padding: 5 }}>
            <Image source={DefaultTeamLogo} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
            <BlurView
                blurType="xlight"
                blurAmount={6}
                blurRadius={4}
                style={{ width: "100%", height: "100%" }}
                reducedTransparencyFallbackColor="#FDF0D3"
            ></BlurView>
        </View>
    );
};

export default BlurTeamLogo;