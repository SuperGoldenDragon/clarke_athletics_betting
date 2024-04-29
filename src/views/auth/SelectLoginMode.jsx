import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../components/DefaultButton';
import LinearGradient from 'react-native-linear-gradient';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import loginlogo2 from '../../assets/images/logos/login-logo-2.png';
import loginlogo6 from '../../assets/images/logos/login-logo-6.png';
import loginlogo5 from '../../assets/images/logos/login-logo-5.png';
const Login = () => {

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', left: '-10%', }}>
                    <Image style={{ opacity: 0.43 }} source={loginlogo3} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ width: 186, height: 180 }} source={loginlogo2} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                    <Text style={[styles.text, { color: '#FFFFFF' }]}>SIGN TO PLAY</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <DefaultButton style={{ width: 300, backgroundColor: 'white' }} onPress={() => navigation.navigate("Login")}>
                            <Image style={{ width: 20, height: 20 }} source={loginlogo6}></Image>
                            <Text style={[styles.text, { fontSize: 18, fontWeight: '500', paddingVertical: 5, paddingLeft: 5 }]}>Continue with Google</Text>
                        </DefaultButton>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <DefaultButton style={{ width: 300, }} onPress={() => navigation.navigate("History")}>
                            <Text style={[styles.text, { fontSize: 19, fontWeight: '500' }]}>Continue with Email</Text>
                        </DefaultButton>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                    <Image source={loginlogo5} ></Image>
                </View>
            </View>
        </LinearGradient >
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
