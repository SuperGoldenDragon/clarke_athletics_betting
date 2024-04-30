import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DefaultTextButton from '../../components/DefaultTextButton';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import LoginBottomMask from '../../assets/images/login-bottom-mask.png';

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    const handleImageLoad = (event) => {
        const { width, height } = event.nativeEvent.source;
        const screenWidth = Dimensions.get('window').width;
        const aspectRatio = width / height;
        const imageWidth = screenWidth;
        const imageHeight = screenWidth / aspectRatio;
        setImageSize({ width: imageWidth, height: imageHeight });
    };

    return (
        <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', left: '-10%', }}>
                <Image style={{ opacity: 0.43 }} source={loginlogo3} />
            </View>
            <View style={{ flex: 1, display: "flex", paddingTop: 50 }}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ width: 295 }}>
                            <TextInput style={[sytles.text, { backgroundColor: 'grey', fontSize: 17, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white', marginBottom: 20 }]} value={email} placeholder='Email' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                            <TextInput style={[sytles.text, { backgroundColor: 'grey', fontSize: 17, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white', marginBottom: 10 }]} value={password} placeholder='Password' placeholderTextColor={'white'} onChange={(e => setPassword(e.target.value))} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                    <Text style={[sytles.text, { fontSize: 14, fontWeight: '400', color: '#F3F6F6' }]}>Forget password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={[sytles.text, { fontSize: 14, fontWeight: '400', color: '#F3F6F6', textDecorationLine: 'underline' }]}>Reset</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 25, paddingBottom: 10 }}>
                        <DefaultTextButton style={{ width: 295, fontSize: 19 }} onPress={() => navigation.navigate('Main')} ><Text style={[sytles.text, { fontWeight: '500' }]} >Login</Text></DefaultTextButton>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <Text style={[sytles.text, { color: '#F3F6F6', fontSize: 14 }]}>Don't have an account?</Text>
                        <Text style={[sytles.text, { color: '#F7D068', fontSize: 15 }]} onPress={() => navigation.navigate("Sign up")} >SIGN UP</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <ImageBackground source={LoginBottomMask} resizeMethod='contain' style={{ ...imageSize, opacity: 0.5, alignSelf: "flex-end" }}
                    onLoad={handleImageLoad}></ImageBackground>
            </View>
        </LinearGradient>
    );
};

export default Login;
const sytles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24
    }

})
