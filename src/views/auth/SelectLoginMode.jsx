import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import loginlogo2 from '../../assets/images/logos/login-logo-2.png';
import GmailIcon from '../../assets/images/icons/gmail-icon.png';
import LoginBottomMask from '../../assets/images/login-bottom-mask.png';
import DefaultButton from '../../components/DefaultButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = () => {
    GoogleSignin.configure({
        webClientId: '123506907972-m3a7jctregm9gvggma4o1k3gjsa4kddn.apps.googleusercontent.com',
    });
    const navigation = useNavigation();

    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [loading, setLoading] = useState(false);

    const handleImageLoad = (event) => {
        const { width, height } = event.nativeEvent.source;
        const screenWidth = Dimensions.get('window').width;
        const aspectRatio = width / height;
        const imageWidth = screenWidth;
        const imageHeight = screenWidth / aspectRatio;
        setImageSize({ width: imageWidth, height: imageHeight });
    };

    const handleGoogleContinueSubmit = async () => {
        setLoading(true);
        GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

        await auth().signInWithCredential(googleCredential).then(() => {
            setLoading(false);
            navigation.navigate('Main')
        })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']}
                style={{ position: "absolute", width: "100%", height: "100%", zIndex: -100 }}>
            </LinearGradient >
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', left: '-10%', }}>
                    <Image style={{ opacity: 0.43 }} source={loginlogo3} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ width: 186, height: 186 }} source={loginlogo2} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                    <Text style={[styles.text, { color: '#FFFFFF' }]}>SIGN TO PLAY</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <DefaultButton style={{ width: 300, backgroundColor: 'white' }} onPress={() => handleGoogleContinueSubmit()} >
                            <Image source={GmailIcon} ></Image>
                            <Text style={[styles.text, { fontSize: 18, fontWeight: '500', marginLeft: 10 }]}>Continue with Google</Text>
                            {loading && <ActivityIndicator style={{ paddingHorizontal: 20 }} size="small" color="#22252A" />}
                        </DefaultButton>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <DefaultButton style={{ width: 300, }} onPress={() => navigation.navigate("Login")}>
                            <Text style={[styles.text, { fontSize: 19, fontWeight: '500', color: "#22252A" }]}>Continue with Email</Text>
                        </DefaultButton>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row", zIndex: -1 }}>
                    <ImageBackground source={LoginBottomMask} resizeMethod='contain' style={{ ...imageSize, opacity: 0.5, alignSelf: "flex-end" }}
                        onLoad={handleImageLoad}></ImageBackground>
                </View>
            </View>
        </View>

    );
};

export default Login;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24
    }

})
