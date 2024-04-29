import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../components/DefaultButton';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import loginlogo5 from '../../assets/images/logos/login-logo-5.png';
const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <LinearGradient colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', left: '-10%', }}>
                    <Image style={{ opacity: 0.43 }} source={loginlogo3} />
                </View>
                <View style={{ alignItems: 'center', paddingTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TextInput style={[sytles.text, { backgroundColor: 'grey', width: 295, fontSize: 17, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={email} placeholder='Email' placeholderTextColor={'white'} onChange={(e) => setEmail(e.target.value)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 13 }} >
                        <TextInput style={[sytles.text, { backgroundColor: 'grey', width: 295, fontSize: 17, fontWeight: '400', borderRadius: 3, paddingLeft: 15, color: 'white' }]} value={password} placeholder='password' placeholderTextColor={'white'} onChange={(e => setPassword(e.target.value))} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                        <Text style={[sytles.text, { fontSize: 14, fontWeight: '400', color: '#F3F6F6' }]}>Forget password?</Text>
                        <Text style={[sytles.text, { fontSize: 14, fontWeight: '400', color: '#F3F6F6', textDecorationLine: 'underline' }]}>Reset</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 25, paddingBottom: 10 }}>
                    <DefaultButton style={{ width: 295, fontSize: 19 }}><Text style={[sytles.text, { fontWeight: '500' }]} onPress={() => navigation.navigate('Profile')} >Login</Text></DefaultButton>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <Text style={[sytles.text, { color: '#F3F6F6', fontSize: 14 }]}>Don't have an account?   </Text>
                    <Text style={[sytles.text, { color: '#F7D068', fontSize: 15 }]} onPress={() => navigation.navigate("Sign up")} >SIGN UP</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }} >
                    <Image source={loginlogo5} ></Image>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', top: '-20%' }} >
                    <Image source={loginlogo5} ></Image>
                </View>
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
