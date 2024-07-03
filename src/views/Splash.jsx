import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import loginlogo1 from '../assets/images/logos/logo3.png';
import { useEffect } from 'react';

let timeId = null;

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        timeId = setTimeout(() => {
            toLoginSelect();
        }, 500);
    }, []);

    const toLoginSelect = () => {
        navigation.navigate("Select Login");
        if (timeId) clearTimeout(timeId);
        timeId = null;
    };

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8', }}>
            <TouchableOpacity onPress={toLoginSelect}>
                <Image source={loginlogo1} style={{ width: 280, height: 280 }} />
            </TouchableOpacity>
        </View>
    );
};
export default Splash;