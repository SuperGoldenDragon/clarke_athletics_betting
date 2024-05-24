import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, ImageBackground, ActivityIndicator, Modal, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DefaultTextButton from '../../components/DefaultTextButton';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import LoginBottomMask from '../../assets/images/login-bottom-mask.png';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [loading, setLoading] = useState(false)
    // const [notificationVisible, setNotificationVisible] = useState(false);

    const handleImageLoad = (event) => {
        const { width, height } = event.nativeEvent.source;
        const screenWidth = Dimensions.get('window').width;
        const aspectRatio = width / height;
        const imageWidth = screenWidth;
        const imageHeight = screenWidth / aspectRatio;
        setImageSize({ width: imageWidth, height: imageHeight });
    };
    const handleLoginSubmit = () => {
        setLoading(true)
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
                setLoading(false);
                messaging().onMessage(remoteMessage => {
                    console.log('Foreground message:', remoteMessage);
                    // Display the notification to the user
                });
                messaging().onNotificationOpenedApp(remoteMessage => {
                    console.log('App opened by notification while in foreground:', remoteMessage);
                    // Handle notification interaction when the app is in the foreground
                });
                messaging().getInitialNotification().then(remoteMessage => {
                    console.log('App opened by notification from closed state:', remoteMessage);
                    // Handle notification interaction when the app is opened from a closed state
                });
                navigation.navigate('Main');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                setLoading(false)
                console.error(error);
            });
    }


    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']} style={{ position: "absolute", zIndex: -100, width: "100%", height: "100%" }}>

            </LinearGradient>
            <View style={{ flexDirection: 'row', justifyContent: 'center', left: '-10%', }}>
                <Image style={{ opacity: 0.43 }} source={loginlogo3} />
            </View>
            <View style={{ flex: 1, display: "flex", paddingTop: 50 }}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ width: 295 }}>
                            <TextInput style={[styles.text, { backgroundColor: 'grey', fontSize: 17, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white', marginBottom: 20 }]} value={email} placeholder='Email' placeholderTextColor={'white'} onChangeText={setEmail} />
                            <TextInput style={[styles.text, { backgroundColor: 'grey', fontSize: 17, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white', marginBottom: 10 }]} value={password} placeholder='Password' placeholderTextColor={'white'} secureTextEntry={true} onChangeText={setPassword} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Text style={[styles.text, { fontSize: 14, fontWeight: '400', color: '#F3F6F6' }]}>Forget password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={[styles.text, { fontSize: 14, fontWeight: '400', color: '#F3F6F6', textDecorationLine: 'underline' }]}>Reset</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 25, paddingBottom: 10 }}>
                        <DefaultTextButton style={{ width: 295, fontSize: 19 }} onPress={() => handleLoginSubmit()} >
                            <Text style={[styles.text, { fontWeight: '500' }]} >Login</Text>
                            {loading && <ActivityIndicator style={{ paddingHorizontal: 20 }} size="small" color="#22252A" />}
                        </DefaultTextButton>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <Text style={[styles.text, { color: '#F3F6F6', fontSize: 14, marginRight: 10 }]}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
                            <Text style={[styles.text, { color: '#F7D068', fontSize: 15 }]} >SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, zIndex: -1 }}>
                <ImageBackground source={LoginBottomMask} resizeMethod='contain' style={{ ...imageSize, opacity: 0.5 }}
                    onLoad={handleImageLoad}></ImageBackground>
            </View>
        </View >

    );
};


export default Login;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },

})
