import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../components/DefaultButton';
import LinearGradient from 'react-native-linear-gradient';
import loginlogo3 from '../../assets/images/logos/login-logo-3.png';
import loginlogo2 from  '../../assets/images/logos/login-logo-2.png';

const Login = () => {

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#22252A','#3C3C3C','#1B1B1B']}
            style={{flex:1}}>
            <View>
                <View style={{flexDirection:'row',justifyContent:'center',left:'-10%', }}>
                    <Image style={{opacity:0.43}} source={loginlogo3}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center' }}>
                    <Image style={{width:186,height:180}}  source={loginlogo2}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center', paddingVertical:10}}>
                    <Text style={[sytles.text,{color:'#FFFFFF'}]}>SIGN TO PLAY</Text>
                </View>
                <View>
                    <View style={{borderWidth:2, borderColor:'red',}}>
                         <DefaultButton style={{}} onPress={() => navigation.navigate("Main")}>Login</DefaultButton>
                    </View>
                    {/* <View>
                         <DefaultButton onPress={() => navigation.navigate("Sign up")}>Sign up</DefaultButton>
                    </View> */}
                </View>
            </View>
        </LinearGradient>    
    );
};

export default Login;
const sytles= StyleSheet.create({
    text:{
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize:24
    }
    
})
