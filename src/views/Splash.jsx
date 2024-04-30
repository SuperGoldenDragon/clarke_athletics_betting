import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import loginlogo1 from '../assets/images/logos/login-logo-1.png';
import { useEffect } from 'react';

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            toLoginSelect();
        }, 3000);
    }, []);

    const toLoginSelect = () => {
        navigation.navigate("Select Login");
    };

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8', }}>
            <Image source={loginlogo1} />
        </View>
    );
};
export default Splash;